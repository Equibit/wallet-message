const {
  buildMessage
} = require('../src/message-builder')
const fixtures = require('./fixtures/message-hex-decoded')
const fixture = fixtures[1]

const buffer = buildMessage(fixture.message)

console.log(`${buffer.toString('hex')}`)
console.log(`length = ${buffer.toString('hex').length}`)

console.log(fixture.hex.slice(0, 266))

// timestamp:
// 8047e65900000000

// timestamp_nanoseconds:
// 5298671a

// sender_public_key:
// 210200c925fb73bfe5e5a9633aae1f25733b3a2ccd13c506bcc7ca7ada1f84968927

// payload:
// 4a7b227175616e74697479223a20353030302c227072696365223a2022302e333333222c2266696c6c5f6f725f6b696c6c223a20226e6f222c226475726174696f6e223a2038363430307d
// 4a7b227175616e74697479223a20353030302c227072696365223a2022302e333333222c2266696c6c5f6f725f6b696c6c223a20226e6f222c226475726174696f6e22
