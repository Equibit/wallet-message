const Buffer = require('safe-buffer').Buffer
const { bufferUInt64, bufferVarSliceBuffer } = require('tx-builder/src/buffer-build')
const { pow, signBuffer } = require('tx-builder')

const { buildMessage } = require('./message-builder')

const messagePow = (messageData, keyPair, difficulty) => {
  const message = buildMessage(messageData)

  const signature = signBuffer(keyPair)(message)
  const messageSigned = Buffer.concat([message, bufferVarSliceBuffer(signature)])

  const nonce = pow(difficulty)(messageSigned)
  const messageWithNonce = Buffer.concat([messageSigned, bufferUInt64(nonce)])

  return messageWithNonce
}

module.exports = messagePow
