'use strict'
const Buffer = require('safe-buffer').Buffer
const assert = require('assert')
const { decodeMessage } = require('../src/message-decoder')
const fixtures = require('./fixtures/message-hex-decoded')
const { hashFromBuffer } = require('tx-builder')

describe('message-decoder', function () {
  for (let i = 0; i < fixtures.length; i++) {
    if (!fixtures[i].hex) {
      continue
    }
    const fixture = fixtures[i]
    const messageHex = fixture.hex
    const buffer = Buffer.from(messageHex, 'hex')

    describe(`decodeMessage ${i}, type=${fixture.decoded.type}` + (fixture.comment ? `. ${fixture.comment}` : ''), function () {
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

describe('hashFromBuffer', function () {
  it('should calc hash', function () {
    const fixture = fixtures[1]
    const messageHex = fixture.hex
    const buffer = Buffer.from(messageHex, 'hex')
    const hash = hashFromBuffer(buffer)
    assert.equal(hash, fixture.decoded.hash)
  })
})
