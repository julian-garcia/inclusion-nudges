exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (/^\/blog\/\d$/.test(location.pathname)) {
    window.scrollTo(0,document.body.scrollHeight);
  }
  if ((prevLocation ? /^\/blog/.test(prevLocation.pathname) : false) && /^\/blog$/.test(location.pathname)) {
    window.scrollTo(0,document.body.scrollHeight);
  }
}
