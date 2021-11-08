const api = require('./mtproto-api');


chan()

async function chan() {
    const resolvedPeer = await api.call('contacts.resolveUsername', {
        username: 'mtproto_core',
    });

    const channel = resolvedPeer.chats.find(
        (chat) => chat.id === resolvedPeer.peer.channel_id
    );

    const inputPeer = {
        _: 'inputPeerChannel',
        channel_id: channel.id,
        access_hash: channel.access_hash,
    };

    const LIMIT_COUNT = 10;
    const allMessages = [];

    const firstHistoryResult = await api.call('messages.getHistory', {
        peer: inputPeer,
        limit: LIMIT_COUNT,
    });

    const historyCount = firstHistoryResult.count;

    for (let offset = 0; offset < historyCount; offset += LIMIT_COUNT) {
        const history = await api.call('messages.getHistory', {
            peer: inputPeer,
            add_offset: offset,
            limit: LIMIT_COUNT,
        });

        allMessages.push(...history.messages);
    }

    console.log('allMessages:', allMessages);
}

// (async () => {
//     let rez = await api.call('help.getNearestDc');
//     console.log(rez)
// })()