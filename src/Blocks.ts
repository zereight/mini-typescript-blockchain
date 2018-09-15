import * as CryptoJs from 'crypto-js';

export class BlockChain {
    /*variables*/
    public blocks : Block[];
    
    /*constructor*/
    constructor(){
        this.blocks = new Array(new Block(0,"","a",0));
        //this.blocks[ this.getLength() ] = (  ); //first block
    }
    
    /*getter*/
    const getBlockChain = ():Block[] => {return this.blocks;} 
    const getLength = ():number => {return (this.blocks).length;}
    const getLastBlock = ():Block => {
        return this.blocks[ this.getLength() - 1 ];
    }
    /*setter*/
    
    static createNewBlock = (i:number , ph:string, d:string, t:number):Block => {
        return new Block(i,ph,d,t);
    }
    const addBlock = ( aBlock:Block ):void => {
        aBlock.setPreHash( this.getLastBlock().getHash() );
        this.blocks[ this.getLength() ]= aBlock ;
        
    }
    
    
    /*other function*/
    const printAll = ():void => {
        for(let i=0; i< this.getLength(); i++)
        {
            this.blocks[i].printBlock() ;
        }
    }
};

export class Block {
    /*variables*/
    private index : number;
    private hash : string;
    private preHash : string;
    private data :string;
    private timestamp : number;
    
    /*constructor*/
    constructor(i:number , ph:string, d:string, t:number) {
        this.index = i;
        this.hash = this.caculate_hash(i,ph,d,t);
        this.preHash = ph;
        this.data = d;
        this.timestamp = t;
    }
    
    /*getter*/
    const getIndex = ():number => { return this.index; }
    const getHash = ():string => {return this.hash;}
    const getPreHash = ():string => {return this.preHash;}
    const getData = ():string => {return this.data;}
    const getTimeStamp = ():number => {return this.timestamp;}
    /*setter*/
    const setIndex = (param:number):void => {this.index = param;}
    const setHash = (param:string):void => {this.hash = param;}
    const setPreHash = (param:string):void => {this.preHash = param;}
    const setData = (param:string):void => {this.data = param;}
    const setTimeStamp = (param:number):void => {this.timestamp = param;}
    
    /*other function*/
    
    
    const caculate_hash = ( i:number, ph:string, d:string, t:number ):string => {
        return CryptoJs.SHA256( i+ph+d+t ).toString();
    }
    
    const printBlock = ():void => {
        console.log("-------Block-------");
        console.log("index : "+this.index);
        console.log("hash : "+this.hash);
        console.log("previousHash : "+this.preHash);
        console.log("data : "+this.data);
        console.log("timestamp : "+this.timestamp);
    }
    
};