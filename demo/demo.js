const messagePow= require('../src/message-pow')
const fixtureNode = require('../test/fixtures/hdnode')
const keyPair = fixtureNode.keyPair

const messageData = {
  'type': 'Bid',
  'timestamp': 1508263808,
  'timestamp_nanoseconds': 442996818,
  'sender_public_key': '',
  'payload': '{"quantity": 5000,"price": "0.333","fill_or_kill": "no","duration": 86400}'
}

const message = messagePow(messageData, keyPair, 3)
console.log(`message = ${message.toString('hex')}`)
