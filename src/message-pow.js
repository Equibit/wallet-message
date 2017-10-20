const Buffer = require('safe-buffer').Buffer
const { pow, signBuffer } = require('tx-builder')
const { bufferUInt64 } = require('tx-builder/src/buffer-build')
const { buildMessage } = require('../src/message-builder')

const messagePow = (data, keyPair) => {
  const dataBuffer = buildMessage(data)

  const signature = signBuffer(keyPair)(dataBuffer)
  const messageBuffer = Buffer.concat([dataBuffer, signature])

  const nonce = pow(3)(messageBuffer)
  const messageWithNonce = Buffer.concat([signature, bufferUInt64(nonce)])

  return messageWithNonce
}

module.exports = messagePow
