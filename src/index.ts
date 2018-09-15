import { BlockChain, Block } from './Blocks';

let blockchain = new BlockChain;


const lastBlock = blockchain.getLastBlock();
blockchain.addBlock( BlockChain.createNewBlock( 
   lastBlock.getIndex() + 1 ,
   lastBlock.getPreHash(),
   "kim",
   Math.round( new Date().getTime() / 1000 )
);

blockchain.printAll();

