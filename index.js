
module.exports = function TimedChat(mod) {
    mod.hook('S_CHAT', 2, {order: 5}, addTime);
    mod.hook('S_WHISPER', 2, {order: 5}, addTime);
    mod.hook('S_PRIVATE_CHAT', 1, {order: 5}, addTime);
    mod.hook('S_PARTY_MATCH_LINK', 2, {order: 5}, addTimeLFG);
};

function addTime(event) {
    event.message = `<FONT>[${new Date().toLocaleTimeString()}]</FONT> ${event.message}`;
    return true;
}

function addTimeLFG(event) {
    event.message = `[${new Date().toLocaleTimeString()}] ${event.message}`;
    return true;
}
