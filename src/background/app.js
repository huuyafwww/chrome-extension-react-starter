import { onMessage } from '@plugins'; // import onMessage plugin

const onMessageEvent = (req, sender, sendResponse) => {
    console.log(req.hoge);
    sendResponse(req.hoge);
    return true;
};

onMessage(onMessageEvent);
