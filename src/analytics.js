
import ReactGA from "react-ga4";

// Query parameters that identify a person. Google Analytics must never receive
// them, so they're removed from every page view; utm_* parameters are kept, as
// GA uses them to credit campaigns.
const PRIVATE_PARAMS = ["contact_number", "applicant_id"];

function withoutPrivateParams(pathAndSearch) {
  const url = new URL(pathAndSearch, window.location.origin);
  PRIVATE_PARAMS.forEach((param) => url.searchParams.delete(param));
  return url;
}

export const initGA = () => {
  // trackPage sends every page view, so GA doesn't send its own on load (it
  // would carry the raw address and count the first page twice).
  ReactGA.initialize("G-P4512BJZDC", { gtagOptions: { send_page_view: false } });
};

export const trackPage = (path) => {
  const url = withoutPrivateParams(path);
  ReactGA.send({
    hitType: "pageview",
    page: url.pathname + url.search,
    location: url.href,
  });
};

// GA4 ecommerce purchase, so campaigns can be compared by revenue.
export const trackPurchase = ({ transactionId, plan, amount }) => {
  ReactGA.event("purchase", {
    transaction_id: transactionId,
    value: Number(amount) || 0,
    currency: "INR",
    items: [{ item_id: plan, item_name: plan, price: Number(amount) || 0, quantity: 1 }],
  });
};
