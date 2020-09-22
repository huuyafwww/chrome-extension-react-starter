// now check:https://developer.chrome.com/extensions/runtime#event-onMessage

/**
 * When on message by browser action,run event
 *
 * @param {*} event
 */
const onMessage = event => chrome.runtime.onMessage.addListener(event);

export default onMessage;
