exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (/^\/blog\/\d$/.test(location.pathname)) {
    window.location.hash = "blog"
  }
  if (
    (prevLocation ? /^\/blog/.test(prevLocation.pathname) : false) &&
    /^\/blog$/.test(location.pathname)
  ) {
    window.location.hash = "blog"
  }

  typeof window !== "undefined" &&
    window.gtag &&
    window.gtag("event", "link", {
      event_category: "Page link",
      event_label: "Link pressed: " + location.pathname,
    })
}
