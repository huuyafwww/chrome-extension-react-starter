// now check:https://developer.chrome.com/extensions/storage

class Storage {

    /**
     * Get sync data in Chrome storage
     *
     * @param {*} item
     */
    static getItemInStorage(item) {
        return new Promise(resolve => {
            chrome.storage.sync.get(item, data => {
                resolve(data.item);
            });
        });
    }

    /**
     * Set sync data in Chrome storage
     *
     * @param {*} item
     */
    static setItemInStorage(item) {
        chrome.storage.sync.set({ item });
    }

    /**
     * Clear all sync data in Chrome storage
     */
    static clearData() {
        chrome.storage.sync.clear();
    }
}

export default Storage;
