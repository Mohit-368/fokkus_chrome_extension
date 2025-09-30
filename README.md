# fokkus_chrome_extension
Focus Mode Blocking helps boost productivity by blocking distracting websites. Customize your blocklist, enable Focus Mode to see a motivating message instead of distracting sites, and protect mode toggle with a password. Easy to use and perfect for staying focused on work or study.
Here is a technical description for your web extension, formatted for your GitHub README:

***

## Technical Description

This Chrome extension is designed to boost productivity by blocking distracting websites and enforcing focus through an overlay message and password-protected toggling.

### Key Features
- Blocklist management to specify distracting websites.
- Focus Mode that displays a fullscreen reminder on blocked sites.
- Password protection to prevent unauthorized disabling of Focus Mode.
- Easy popup interface for site management and mode control.

### Technologies Used
- **JavaScript:** Core logic for background processing, popup interactivity, and content scripts.
- **HTML & CSS:** Popup UI and overlay styling for the focus message.
- **Chrome Extension APIs:** 
  - `chrome.storage` for saving blocked sites, focus mode status, and password securely.
  - `chrome.tabs` and `chrome.runtime` for tab monitoring, URL blocking, and message passing between scripts.
  - `background.service_worker` for efficient event-based background tasks.
- **Manifest Version 3:** Modern manifest format specifying scripts, permissions, and extension metadata.

### Architecture Overview
- **Manifest (`manifest.json`):** Declares permissions, scripts, icons, and the popup.
- **Background Script:** Monitors tab URL changes, blocks access to sites when Focus Mode is active, and communicates with content scripts.
- **Content Script:** Injected into web pages to show the fullscreen overlay message on blocked sites.
- **Popup UI:** Allows users to add/remove blocked sites, toggle Focus Mode with password prompt, and manage settings.

This setup leverages modern web technologies and Chrome’s extension platform to provide a seamless and secure focus management experience.

***

Let me know if you want it expanded with code snippets or more detailed breakdowns!Here is a technical description for your web extension README:

***

## Technical Description

This Chrome extension helps enhance productivity by blocking distracting websites and enforcing focus through a fullscreen overlay and password-protected mode toggle.

### Features
- Customizable blocklist for distracting websites
- Focus Mode that shows a motivating fullscreen message on blocked sites
- Password protection to prevent unauthorized disabling of Focus Mode
- Popup UI to manage blocked sites and toggle mode

### Technologies Used
- **JavaScript:** For logic in background scripts, popup, and content scripts
- **HTML & CSS:** For popup interface and overlay styling
- **Chrome Extension APIs:** Storage, Tabs, Runtime messaging for extension functionality
- **Manifest Version 3:** For defining permissions, scripts, and extension metadata

### Architecture
- **Manifest (manifest.json):** Specifies permissions, scripts, icons, and popup details
- **Background Script:** Monitors tabs, blocks URLs during Focus Mode, and controls communication
- **Content Script:** Injected on tabs to display full-page focus message
- **Popup:** UI for blocking management and password-protected toggle

This architecture leverages Chrome’s modern extension platform and web technologies to provide a user-friendly, secure focus blocking tool.

