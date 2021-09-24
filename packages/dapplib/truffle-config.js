require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note random unaware gesture glimpse equal gaze'; 
let testAccounts = [
"0xdfcd64b0ae2183f550762c3e8e68c7a2ba9da6aabc35efba2c6a79ca78890f9d",
"0x67e81633c5af4b504ed84cad7d35b6113f93c892b9af4f53781ec558f5fece2f",
"0x08eb82ed012736d33429e07aa893da1f12c7851b89edeab46233062a69f81e07",
"0xaaf6917f842dc9acf175668e7343fdd50f2da6a8970034dfe47f8188a0c350ab",
"0xadbbe9b0201e4b85d5b1dd3125cbd7717aba2cbfabc594009c213451463e6064",
"0xa8e59e9ff5b3ee7ac38d907c1e0c5cc6e4397c9e24c1556a518274563b9ba8ba",
"0x76a1a23e6153eb3a8b5239dd06c20e345cbe9ad245bbd4b32d14b9140241e43a",
"0x9d9047ed8e4cb68bd49c2d121182f64f538372d4daf08e5cc9fe203572b45bc3",
"0x7b61ded820c3cf5739d5302b3768bff16277a08252db244b67a49781dafa24a8",
"0xd258666f8643f9ed8144bec9774b3c18f251d8b43a5dcd1f13995007c89ffd80"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


