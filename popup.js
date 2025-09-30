// Elements
const siteInput = document.getElementById("siteInput");
const addBtn = document.getElementById("addBtn");
const siteList = document.getElementById("siteList");
const focusToggle = document.getElementById("focusToggle");

// Load saved data on popup open
chrome.storage.local.get(["blockedSites", "focusMode"], (data) => {
  const sites = data.blockedSites || [];
  const focusMode = data.focusMode || false;

  sites.forEach(addSiteToList);
  updateFocusButton(focusMode);
});

// Add site
addBtn.addEventListener("click", () => {
  const site = siteInput.value.trim();
  if (!site) return;

  chrome.storage.local.get(["blockedSites"], (data) => {
    const sites = data.blockedSites || [];
    if (!sites.includes(site)) {
      sites.push(site);
      chrome.storage.local.set({ blockedSites: sites });
      addSiteToList(site);
    }
  });

  siteInput.value = "";
});

// Remove site
function addSiteToList(site) {
  const li = document.createElement("li");
  li.textContent = site;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    chrome.storage.local.get(["blockedSites"], (data) => {
      const sites = data.blockedSites || [];
      const updated = sites.filter((s) => s !== site);
      chrome.storage.local.set({ blockedSites: updated });
    });
    li.remove();
  });

  li.appendChild(removeBtn);
  siteList.appendChild(li);
}

// Focus mode toggle
focusToggle.addEventListener("click", () => {
  chrome.storage.local.get(["focusMode"], (data) => {
    const newMode = !data.focusMode;
    chrome.storage.local.set({ focusMode: newMode });
    updateFocusButton(newMode);
  });
});

function updateFocusButton(focusMode) {
  focusToggle.textContent = focusMode ? "Turn OFF Focus Mode" : "Turn ON Focus Mode";
}
