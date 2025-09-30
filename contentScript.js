// contentScript.js

// Display a fullscreen overlay with focus reminder
function showFocusMessage() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    overlay.style.color = '#fff';
    overlay.style.zIndex = '10000';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.fontFamily = 'Arial, sans-serif';

    const title = document.createElement('h1');
    title.textContent = 'Focus on your work';
    title.style.fontSize = '3rem';
    title.style.margin = '0';

    const message = document.createElement('p');
    message.textContent = "Don't get distracted again!";
    message.style.fontSize = '1.5rem';
    message.style.marginTop = '1rem';

    overlay.appendChild(title);
    overlay.appendChild(message);

    // Clear the body content and append overlay
    document.body.innerHTML = '';
    document.body.appendChild(overlay);

    // Stop any further loading or scripts if needed
    window.stop();
}

// Listen for message from background to activate blocking UI
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'blockSite') {
        showFocusMessage();
    }
});
