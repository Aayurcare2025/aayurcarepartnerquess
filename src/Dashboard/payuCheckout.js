// Starts a PayU checkout for a plan. The backend sets the price from the plan
// name (productinfo) and returns either a PayU payment link to open, or the
// signed fields for PayU's hosted checkout form. Either way the browser leaves
// for PayU.
import { API_BASE } from "../apiBase";
import { getAttribution } from "../attribution";

// Read by the payment success page to report the purchase to analytics.
export const PENDING_PURCHASE_KEY = "pendingPurchase";

function readApplicant() {
  try {
    return JSON.parse(localStorage.getItem("applicant")) || {};
  } catch {
    return {};
  }
}

export async function startPayUCheckout({ productinfo, email }) {
  const applicant = readApplicant();
  const phone = (applicant.contact_no || localStorage.getItem("phone") || "")
    .replace(/\D/g, "")
    .slice(-10);

  const response = await fetch(`${API_BASE}/payment/initiate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      productinfo,
      email,
      phone,
      firstname: applicant.first_name || "Customer",
      applicant_id: applicant.applicant_id || "",
      // Campaign that brought this person, saved with the payment.
      ...getAttribution(),
    }),
  });

  const data = await response.json().catch(() => ({}));
  const failure = new Error(data.message || "Couldn't start the payment. Try again in a minute");
  if (!response.ok) throw failure;

  if (data.txnid) {
    try {
      localStorage.setItem(
        PENDING_PURCHASE_KEY,
        JSON.stringify({ transactionId: data.txnid, plan: productinfo, amount: data.amount, startedAt: Date.now() }),
      );
    } catch {
      // Analytics only; the payment works without it.
    }
  }

  // Payment link setup (client id / secret): PayU hosts the whole payment page.
  if (String(data.paymentLink || "").startsWith("https://")) {
    window.location.assign(data.paymentLink);
    return;
  }

  if (!data.hash || !String(data.payuUrl || "").startsWith("http")) throw failure;

  const fields = {
    key: data.key,
    txnid: data.txnid,
    amount: data.amount,
    productinfo: data.productinfo,
    firstname: data.firstname,
    email: data.email,
    phone: data.phone,
    udf1: data.udf1 || "",
    udf2: "",
    udf3: "",
    udf4: "",
    udf5: "",
    surl: data.surl,
    furl: data.furl,
    hash: data.hash,
  };

  const form = document.createElement("form");
  form.method = "POST";
  form.action = data.payuUrl;
  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value ?? "";
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
}
