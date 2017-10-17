/**
 * Bitmessage Decoder
 *
 * Bitmessage structure:
 * - type, ENUM ["bid", "ask"], varlength string
 * - seconds, uint64
 * - nanoseconds, uint32
 * - sender_public_key, varlength string
 * - data, varlength string
 * - signature, varlength string
 */

const { compose, addProp } = require('tx-builder/src/compose-read')
const {
  readUInt32,
  readUInt64,
  readVarSlice
} = require('tx-builder/src/buffer-read')

// decodeMessage :: Buffer -> [MessageBuffer, Buffer]
const decodeMessage = buffer =>
(
  compose([
    addProp('type', readVarSlice),
    addProp('seconds', readUInt64),
    addProp('nanoseconds', readUInt32),
    addProp('sender_public_key', readVarSlice),
    addProp('data', readVarSlice),
    addProp('signature', readVarSlice)
  ])({}, buffer)
)

module.exports = {
  decodeMessage
}
