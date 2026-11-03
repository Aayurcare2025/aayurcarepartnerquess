// Starts a PayU hosted checkout for a plan. The backend sets the price from the
// plan name (productinfo), builds the hash and returns the fields PayU expects;
// this posts them to PayU, which navigates the browser away.
const API_BASE = "https://4lxmjt45zon6pu5yrlcuouu6.200.234.44.53.sslip.io";

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
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.hash || !String(data.payuUrl || "").startsWith("http")) {
    throw new Error(data.message || "Couldn't start the payment. Try again in a minute");
  }

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
