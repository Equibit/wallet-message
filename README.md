# wallet-message
BitMessage message builder and decoder for Web Wallet

[![Build Status](https://travis-ci.com/Equibit/wallet-message.png?branch=master)](https://travis-ci.com/Equibit/wallet-message)

### Table of Contents

- [Intro](#intro)
  - [Install](#install)
  - [Usage](#usage)
- [API](#api)
  - [Decoder](#decoder)
  - [Builder](#builder)
- [Release Notes](#release-notes)

## Intro

This library implements a message builder and decoder to be used for [Bitmessage communication protocol](https://bitmessage.org)

Also see Equibit docs: [Web Wallet wiki page](https://github.com/Equibit/wallet-ui/wiki/BitMessage).

### Install

npm install wallet-message

### Usage

#### Decoding a hex message

```javascript
const Buffer = require("safe-buffer").Buffer

const messageHex = "034269648047e659000000005298671a210200c925fb73bfe5e5a9633aae1f25733b3a2ccd13c506bcc7ca7ada1f8496892793220000000000004a7b227175616e74697479223a20353030302c227072696365223a2022302e333333222c2266696c6c5f6f725f6b696c6c223a20226e6f222c226475726174696f6e223a2038363430307d46304402205dd2cf23a07efc9ffbd2a5907d49fd8fa59dd011118262afdba6ea0fafddc53c02205bdaa594160d4216d7b994378b7ca7ed49869870a9c259cd6f21907c812415c9"
const buffer = Buffer.from(messageHex, "hex")

const [decoded, bufferLeft] = decodeMessage(buffer)

console.log(`message.type = ${decoded.type.toString()}`)
// >>> Bid
```

#### Building a hex message

## API

### Decoder

### Builder

## Release Notes:
