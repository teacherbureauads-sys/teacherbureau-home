// Google Ads conversion tracking for the "Submit lead form" goal.
// Requires gtag.js to already be loaded on the page (it is — see
// app/layout.js, which loads it via the GoogleAnalytics component
// whenever the GA_ID environment variable is set).
export function reportLeadConversion(url) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    // gtag not loaded (blocked by an ad-blocker, or GA_ID isn't set) —
    // don't let tracking break the actual form submission.
    if (url) window.location = url;
    return;
  }

  window.gtag("event", "conversion", {
    send_to: "AW-/oXVkCKONvoIdEN-DmeRE",
    event_callback: function () {
      if (url) window.location = url;
    },
  });
}
