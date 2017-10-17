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
    let decoded
    try {
      decoded = decodeMessage(buffer)
    } catch (e) {
      console.log(e)
    }
    const decodedMessage = decoded[0]
    Object.keys(decodedMessage).forEach(key => {
      it(`should decode "${key}" from message`, function () {
        const value = ['sender_public_key', 'signature'].indexOf(key) !== -1 ? decodedMessage[key].toString('hex') : decodedMessage[key]
        // console.log(`decodedMessage[${key}] = ${decodedMessage[key]}`)
        assert.equal(value, fixture.decoded[key])
      })
    })
    console.log(`Buffer left = ${decoded[1]}`)
  })
})
