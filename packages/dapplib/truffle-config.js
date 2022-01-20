require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy recipe sister punch hunt crew equal genuine'; 
let testAccounts = [
"0x3bb550ec62fd99ff59f7927ed207f499955e6927c1caf368bfb3e90c2e0c3eae",
"0x8e19e97ec1e8165eed7d388c2f78502068adc5b66f31f4b17321ffe231d0f377",
"0x7320ddbef8f8c92087bf5bc67ce80b5c000ce73b961f890f2b8c324d96a670cf",
"0x78dd197ff5d7b466767a925e8e7d6770ff47f5de1f9a14b11654bc328f5e4341",
"0x25326859f86ded302efc5d7444adbad0e25cf59de9929cb7ff4bbee0597439e3",
"0xd87a7bd1ef454701012befcf581d5ec01ab197aae82c8ce66ee34836fa7e3b79",
"0x6ecf0bfd9013645c26f8605c987d465ea096a773e1fa2dcf064b080ab8f71a3e",
"0xb4926800261e8f3257f2cc69309a7beedc5644cdbf5aefd77a06e1c6cece2358",
"0x7d3b26345da853c52ea6087a6b9d9197040d6e430a53c72de5d6165f79aeb75d",
"0x5c25bd0788c7ba243f0fd82343592448d53e186f448f4ec69cb2f707961883cf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

