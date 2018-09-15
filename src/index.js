"use strict";
exports.__esModule = true;
var Blocks_1 = require("./Blocks");
var blockchain = new Blocks_1.BlockChain;
var lastBlock = blockchain.getLastBlock();
blockchain.addBlock(Blocks_1.BlockChain.createNewBlock(lastBlock.getIndex() + 1, lastBlock.getPreHash(), "kim", Math.round(new Date().getTime() / 1000)));
blockchain.printAll();
