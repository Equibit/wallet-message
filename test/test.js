require('./message-builder.test')
require('./message-decoder.test')

const assert = require('assert')
const messagePow = require('../src/message-pow')
const fixtureNode = require('./fixtures/hdnode')

describe('messagePow', function () {
  const keyPair = fixtureNode.keyPair

  it('should build signed message with a nonce', function () {
    const messageData = {
      'type': 'Bid',
      'timestamp': 1508263808,
      'timestamp_nanoseconds': 442996818,
      'sender_public_key': '',
      'payload': '{"quantity": 5000,"price": "0.333","fill_or_kill": "no","duration": 86400}'
    }
    const message = messagePow(messageData, keyPair, 3)
    console.log(`message = ${message.toString('hex')}`)
    assert.ok(message)
  })
})