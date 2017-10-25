
const { bip39, bitcoin } = require('../../dist/wallet-message')

const mnemonic = 'talent destroy radar dinosaur punch muscle swear diary mango unit gallery bus'
const seed = bip39.mnemonicToSeed(mnemonic, '')
const root = bitcoin.HDNode.fromSeedBuffer(seed, bitcoin.networks.testnet)
const hdNode = root.derivePath(`m/44'/0'/0'`)

const xpub = hdNode.neutered().toBase58()

const addrHdNode = hdNode.derive(0).derive(0)
const address = addrHdNode.getAddress()
const publicKey = addrHdNode.getPublicKeyBuffer().toString('hex')

// tpubDCFRCuNqtJHd3htCkN1rtHmQiSsjxNBFcPjqByuQZwqn9yqmNrWNfB4Y72uNFujtmajddf29LwTMDLVfpPXz1LRDXPPo75imk8WNe1ZfbvC
// publicKey: 03a6afa2211fc96a4130e767da4a9e802f5e922a151c5cd6d4bffa80358dd1f9a3

module.exports = {
  hdNode,
  xpub,
  addrHdNode,
  keyPair: addrHdNode.keyPair,
  address,
  publicKey
}
