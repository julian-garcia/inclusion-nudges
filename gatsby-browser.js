exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (/^\/blog\/\d$/.test(location.pathname)) {
    window.location.hash = 'blog';
  }
  if ((prevLocation ? /^\/blog/.test(prevLocation.pathname) : false) && /^\/blog$/.test(location.pathname)) {
    window.location.hash = 'blog';
  }
}
