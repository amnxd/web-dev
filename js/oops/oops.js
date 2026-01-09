
// eficiently creating many objects using using one function as blueprint (to save memory) 
function Toffee(color, company, quantity){
   this.color= color
   this.company= company
   this.quantity= quantity
}

let t1 = new Toffee('red','parle',20);
let t2 = new Toffee('orange','britania',10);
let t3 = new Toffee('blue','quadbury',15);

class Biscuit{
   constructor(color,quantity,price){
      this.color = color
      this.quantity = quantity
      this.price = price
   }
}

let b1 = new Biscuit('red', 100, 10);
let b2 = new Biscuit('orange',200, 15);
let b3 = new Biscuit('green', 900, 5);