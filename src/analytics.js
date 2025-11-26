//analytics.jsimport ReactGA from "react-ga4";
import ReactGA from "react-ga4";
export const initGA = () => {
  ReactGA.initialize("G-P4512BJZDC");
};

export const trackPage = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};
