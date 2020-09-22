// noew check:https://developer.chrome.com/extensions/runtime#method-sendMessage
class Message {
    /**
     * Send messeage at background
     *
     * @param {*} vars
     */
    static send(vars = null) {
        return new Promise(resolve => {
            chrome.runtime.sendMessage({ vars }, res => resolve(res));
        });
    }
}

export default Message;
