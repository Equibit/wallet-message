const assert = require('assert')
const messagePow = require('../src/message-pow')
const fixtures = require('./fixtures/message-hex-decoded')
const fixture = fixtures[3]
const fixtureNode = require('./fixtures/hdnode')

describe('messagePow', function () {
  const keyPair = fixtureNode.keyPair

  it('should build signed message with a nonce', function () {
    const messageData = fixture.message
    const message = messagePow(messageData, keyPair, 4)
    // console.log(`message = ${message.toString('hex')}`)

    assert.equal(message.toString('hex'), fixture.hex)
  })
})
