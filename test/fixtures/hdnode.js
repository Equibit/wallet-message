const bip39 = require('bip39')
const bip32 = require('bip32')
const bitcoin = require('bitcoinjs-lib')
const { getAddress } = require('tx-builder/src/utils')

const mnemonic = 'talent destroy radar dinosaur punch muscle swear diary mango unit gallery bus'
const seed = bip39.mnemonicToSeed(mnemonic, '')
const root = bip32.fromSeed(seed, bitcoin.networks.testnet)
const hdNode = root.derivePath(`m/44'/0'/0'`)

const xpub = hdNode.neutered().toBase58()

const addrHdNode = hdNode.derive(0).derive(0)
const { address } = getAddress(addrHdNode.publicKey, bitcoin.networks.testnet)
const publicKey = addrHdNode.publicKey.toString('hex')
const keyPair = bitcoin.ECPair.fromPrivateKey(addrHdNode.privateKey)

// tpubDCFRCuNqtJHd3htCkN1rtHmQiSsjxNBFcPjqByuQZwqn9yqmNrWNfB4Y72uNFujtmajddf29LwTMDLVfpPXz1LRDXPPo75imk8WNe1ZfbvC
// publicKey: 03a6afa2211fc96a4130e767da4a9e802f5e922a151c5cd6d4bffa80358dd1f9a3

module.exports = {
  hdNode,
  xpub,
  addrHdNode,
  keyPair,
  address,
  publicKey
}
