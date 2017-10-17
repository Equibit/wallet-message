/**
 * Bitmessage Decoder
 *
 * Bitmessage structure:
 * - type, ENUM ["bid", "ask"], varlength string
 * - timestamp, uint64
 * - timestamp_nanoseconds, uint32
 * - sender_public_key, varlength string
 * - payload, varlength string
 * - nonce, uint64
 * - signature, varlength string
 */

const { compose, addProp } = require('tx-builder/src/compose-read')
const {
  readUInt32,
  readUInt64,
  readVarSlice
} = require('tx-builder/src/buffer-read')

// decodeMessage :: Buffer -> [Message, Buffer]
const decodeMessage = buffer =>
(
  compose([
    addProp('type', readVarSlice),
    addProp('timestamp', readUInt64),
    addProp('timestamp_nanoseconds', readUInt32),
    addProp('sender_public_key', readVarSlice),
    addProp('nonce', readUInt64),
    addProp('payload', readVarSlice),
    addProp('signature', readVarSlice)
  ])({}, buffer)
)

module.exports = {
  decodeMessage
}
