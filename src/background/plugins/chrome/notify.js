import { Tabs } from '@plugins';

// now check:https://developer.chrome.com/extensions/notifications
class Notify {

    /**
     * Run notification
     *
     * @param {string} type
     * @param {string} title
     * @param {string} message
     * @param {string} iconUrl
     */
    static run(type = 'basic', title, message, iconUrl) {
        chrome.notifications.create('', {
            type,
            title,
            message,
            iconUrl,
        });
    }

    /**
     * This is Example.
     * When you click notification,open url by new tab
     *
     * @param {string} url
     */
    static setOnClickListener(url) {
        chrome.notifications.onClicked.addListener(() => {
            Tabs(url);
        });
    }
}

export default Notify;
