const { buildMessage } = require('./message-builder')

const message = buildMessage({
  'type': 'Bid',
  'timestamp': 1508263808,
  'timestamp_nanoseconds': 442996818,
  'sender_public_key': '0200c925fb73bfe5e5a9633aae1f25733b3a2ccd13c506bcc7ca7ada1f84968927',
  'nonce': 8851,
  'payload': '{"quantity": 5000,"price": "0.333","fill_or_kill": "no","duration": 86400}'
})

