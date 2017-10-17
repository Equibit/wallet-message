/**
 * Bitmessage Builder
 *
 * Bitmessage structure:
 * - type, ENUM ["bid", "ask"], varlength string
 * - seconds, uint64
 * - nanoseconds, uint32
 * - sender_public_key, varlength string
 * - data, varlength string
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
const buildMessage = tx => {
  typeforce({
    type: 'String',
    seconds: 'Number',
    nanoseconds: 'Number',
    sender_public_key: 'String',
    vout: 'Array',
    locktime: 'Number'
  }, tx)
  return compose([
    prop('type', bufferVarSlice),
    prop('seconds', bufferUInt64),
    prop('nanoseconds', bufferUInt32),
    prop('sender_public_key', bufferVarSlice),
    prop('data', bufferVarSlice),
    prop('signature', bufferVarSlice)
  ])(tx, EMPTY_BUFFER)
}

module.exports = {
  buildMessage
}
