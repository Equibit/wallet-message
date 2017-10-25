const decoder = require('./src/message-decoder')
const builder = require('./src/message-builder')
const messagePow = require('./src/message-pow')

const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

module.exports = {
  decoder,
  builder,
  messagePow,
  bip39,
  bitcoin
}
