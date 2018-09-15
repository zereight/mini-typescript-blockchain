"use strict";
exports.__esModule = true;
var CryptoJs = require("crypto-js");
var BlockChain = /** @class */ (function () {
    /*constructor*/
    function BlockChain() {
        var _this = this;
        /*getter*/
        this.getBlockChain = function () { return _this.blocks; };
        this.getLength = function () { return (_this.blocks).length; };
        this.getLastBlock = function () {
            return _this.blocks[_this.getLength() - 1];
        };
        this.addBlock = function (aBlock) {
            aBlock.setPreHash(_this.getLastBlock().getHash());
            _this.blocks[_this.getLength()] = aBlock;
        };
        /*other function*/
        this.printAll = function () {
            for (var i = 0; i < _this.getLength(); i++) {
                _this.blocks[i].printBlock();
            }
        };
        this.blocks = new Array(new Block(0, "", "a", 0));
        //this.blocks[ this.getLength() ] = (  ); //first block
    }
    /*setter*/
    BlockChain.createNewBlock = function (i, ph, d, t) {
        return new Block(i, ph, d, t);
    };
    return BlockChain;
}());
exports.BlockChain = BlockChain;
;
var Block = /** @class */ (function () {
    /*constructor*/
    function Block(i, ph, d, t) {
        var _this = this;
        /*getter*/
        this.getIndex = function () { return _this.index; };
        this.getHash = function () { return _this.hash; };
        this.getPreHash = function () { return _this.preHash; };
        this.getData = function () { return _this.data; };
        this.getTimeStamp = function () { return _this.timestamp; };
        /*setter*/
        this.setIndex = function (param) { _this.index = param; };
        this.setHash = function (param) { _this.hash = param; };
        this.setPreHash = function (param) { _this.preHash = param; };
        this.setData = function (param) { _this.data = param; };
        this.setTimeStamp = function (param) { _this.timestamp = param; };
        /*other function*/
        this.caculate_hash = function (i, ph, d, t) {
            return CryptoJs.SHA256(i + ph + d + t).toString();
        };
        this.printBlock = function () {
            console.log("-------Block-------");
            console.log("index : " + _this.index);
            console.log("hash : " + _this.hash);
            console.log("previousHash : " + _this.preHash);
            console.log("data : " + _this.data);
            console.log("timestamp : " + _this.timestamp);
        };
        this.index = i;
        this.hash = this.caculate_hash(i, ph, d, t);
        this.preHash = ph;
        this.data = d;
        this.timestamp = t;
    }
    return Block;
}());
exports.Block = Block;
;
