const path = require('path');
const MTProto = require('@mtproto/core');

const api_id = 9777306;
const api_hash = 'c894e7a0d82773cae554a85e32a55620';

// 1. Create instance
const mtproto = new MTProto({
    api_id,
    api_hash,

    storageOptions: {
        path: path.resolve(__dirname, './data/1.json'),
    },
});

// 2. Print the user country code
// mtproto.call('help.getNearestDc').then(result => {
//     console.log('country:', result.country);
// });

