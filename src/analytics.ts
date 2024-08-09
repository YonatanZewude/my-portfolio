import ReactGA from "react-ga4";

const initializeAnalytics = () => {
  const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;
  if (googleAnalyticsId) {
    ReactGA.initialize(googleAnalyticsId);
  } else {
    console.error("Google Analytics tracking ID is not defined");
  }
};

const logPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};

const logEvent = (category: string, action: string) => {
  ReactGA.event({ category, action });
};

export { initializeAnalytics, logPageView, logEvent };
