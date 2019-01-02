class Block {
  constructor(data) {
    this.height = '';
    this.timeStamp = '';
    this.data = data;
    this.previousHash = '0x';
    this.hash = '';
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
  }

  addBlock(newBlock) {
    this.chain.push(newBlock);
  }
}

const wow = new Block('Seriously Fucking Stupid');
console.log(wow);
const bc = new Blockchain();
bc.addBlock(wow);
console.log(bc.chain);
