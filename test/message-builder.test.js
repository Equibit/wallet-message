const assert = require('assert')
const {
  buildMessage
} = require('../src/message-builder')
const fixtures = require('./fixtures/message-hex-decoded')
const fixture = fixtures[1]
const fixtureNode = require('./fixtures/hdnode')

describe('message-builder', function () {
  const keyPair = fixtureNode.keyPair
  fixture.message.keyPair = keyPair

  describe('buildMessage', function () {
    it('should build a message hex (w/o signature)', function () {
      const buffer = buildMessage(fixture.message)
      // TODO: ignore signature part for now:
      assert.equal(buffer.toString('hex'), fixture.hex.slice(0, 266))
    })
  })
})
