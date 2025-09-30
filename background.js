// Listen whenever a tab updates or URL changes
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete" || !tab.url) return;

  // Get focus mode + blocked sites
  chrome.storage.local.get(["blockedSites", "focusMode"], (data) => {
    const focusMode = data.focusMode || false;
    const blockedSites = data.blockedSites || [];

    if (!focusMode) return; // Focus mode OFF → do nothing

    // Check if current URL contains any blocked site
    for (let site of blockedSites) {
      if (tab.url.includes(site)) {
        // Redirect to blank page
        chrome.tabs.update(tabId, { url: chrome.runtime.getURL('blocked.html') });
        break;
      }
    }
  });
});
