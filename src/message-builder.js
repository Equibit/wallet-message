/**
 * Bitmessage Builder
 *
 * Bitmessage structure:
 * - type, ENUM ["Bid", "Ask"], varlength string
 * - timestamp, uint64
 * - timestamp_nanoseconds, uint32
 * - sender_public_key, varlength string
 * - payload, varlength string
 * - signature, varlength string
 */

const Buffer = require('safe-buffer').Buffer
const typeforce = require('typeforce')

const {
  bufferUInt32,
  bufferUInt64,
  bufferVarSlice
} = require('tx-builder/src/buffer-build')
const {
  compose,
  prop
} = require('tx-builder/src/compose-build')

const EMPTY_BUFFER = Buffer.allocUnsafe(0)

/**
 * Main function to build Equibit transaction.
 * @param {Object} tx
 * @return {Buffer}
 */
// buildTx :: Tx -> Buffer
const buildMessage = message => {
  typeforce({
    type: 'String',
    timestamp: 'Number',
    timestamp_nanoseconds: 'Number',
    sender_public_key: 'String',
    payload: 'String'
  }, message)
  return compose([
    prop('type', bufferVarSlice('ascii')),
    prop('timestamp', bufferUInt64),
    prop('timestamp_nanoseconds', bufferUInt32),
    prop('sender_public_key', bufferVarSlice('hex')),
    prop('payload', bufferVarSlice('ascii'))
  ])(message, EMPTY_BUFFER)
}

module.exports = {
  buildMessage
}
