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

```javascript
const Buffer = require("safe-buffer").Buffer
const { readInt32, readUInt32 } = require("tx-builder/src/buffer-read")
const { compose, addProp } = require("tx-builder/src/compose-read")
const { readInputs, readInput, readOutput } = require("tx-builder/src/tx-decoder")

const decodeTx = buffer =>
(
  compose([
    addProp('version', readInt32),            // 4 bytes
    addProp('vin', readInputs(readInput)),    // 1-9 bytes (VarInt), Input counter; Variable, Inputs
    addProp('vout', readInputs(readOutput)),  // 1-9 bytes (VarInt), Output counter; Variable, Outputs
    addProp('locktime', readUInt32)           // 4 bytes
  ])({}, buffer)
)
```

## API

### Decoder

### Builder

## Release Notes:
