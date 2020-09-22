// now check:https://developer.chrome.com/extensions/tabs

/**
 * Open chrome new tab at url
 *
 * @param {string} url
 */
const Tabs = url => {
    chrome.tabs.create({ url });
};

export default Tabs;
