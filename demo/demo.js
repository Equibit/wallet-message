const { messagePow } = require('../dist/wallet-message')
const fixtureNode = require('../test/fixtures/hdnode.build')
const keyPair = fixtureNode.keyPair
const publicKey = fixtureNode.publicKey

const messageData = {
  'type': 'Bid',
  'timestamp': 1508263808,
  'timestamp_nanoseconds': 442996818,
  'sender_public_key': publicKey,
  'payload': '{"quantity": 5000,"price": "0.333","fill_or_kill": "no","duration": 86400}'
}

const message = messagePow(messageData, keyPair, 4)
console.log(`message = ${message.toString('hex')}`, messageData)
