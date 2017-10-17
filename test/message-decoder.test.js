'use strict'
const Buffer = require('safe-buffer').Buffer
const assert = require('assert')
const { decodeMessage } = require('../src/message-decoder')
const fixtures = require('./fixtures/message-hex-decoded')
const fixture = fixtures[0]

describe('message-decoder', function () {
  const messageHex = fixture.hex
  const buffer = Buffer.from(messageHex, 'hex')

  describe('decodeMessage', function () {
    it('should decode a message', function () {
      let decoded
      try {
        decoded = decodeMessage(buffer)
      } catch (e) {
        console.log(e)
      }
      assert.equal(decoded[0].type, fixture.decoded.type)
    })
  })
})
