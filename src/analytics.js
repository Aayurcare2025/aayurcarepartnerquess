//analytics.jsimport ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-P4512BJZDC"),{
    debug: true,
  }
};

export const trackPage = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};
