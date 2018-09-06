window.persistAndQueryStorage = function(key, value) {
  if (value) {
    localStorage.setItem(key, value);
    return value;
  } else {
    return localStorage.getItem(key);
  }
}

window.onload = function() {
  let url = new URL(window.location.href);
  let email = url.searchParams.get("email");
  let utmSource = url.searchParams.get("utm_source");
  let utmMedium = url.searchParams.get("utm_medium");
  let utmCampaign = url.searchParams.get("utm_campaign");
  if (typeof(Storage) !== "undefined") {
    email = window.persistAndQueryStorage("email", email)
    utmSource = window.persistAndQueryStorage("utmSource", utmSource)
    utmMedium = window.persistAndQueryStorage("utmMedium", utmMedium)
    utmCampaign = window.persistAndQueryStorage("utmCampaign", utmCampaign)
  }
  window.history.replaceState(null, null, window.location.pathname);
};

