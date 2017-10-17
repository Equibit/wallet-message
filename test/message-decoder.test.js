'use strict'
const Buffer = require('safe-buffer').Buffer
const assert = require('assert')
const { decodeMessage } = require('../src/message-decoder')
const fixtures = require('./fixtures/message-hex-decoded')
// const fixture = fixtures[0]

describe('message-decoder', function () {
  for (let i = 0; i < fixtures.length; i++) {
    const fixture = fixtures[i]
    const messageHex = fixture.hex
    const buffer = Buffer.from(messageHex, 'hex')

    describe(`decodeMessage ${i}, type=${fixture.decoded.type}`, function () {
      const [decodedMessage, bufferLeft] = decodeMessage(buffer)
      // console.log(`decodedMessage = ${JSON.stringify(decodedMessage)}`)

      Object.keys(decodedMessage).forEach(key => {
        it(`should decode "${key}" from message`, function () {
          const value = ['sender_public_key', 'signature'].indexOf(key) !== -1 ? decodedMessage[key].toString('hex') : decodedMessage[key]
          // console.log(`decodedMessage[${key}] = ${value}`)
          assert.equal(value, fixture.decoded[key])
        })
      })
      assert.equal(bufferLeft.length, 0)
    })
  }
})
