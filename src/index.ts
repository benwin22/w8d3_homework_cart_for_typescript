import { v4 as uuidv4 } from 'uuid';


class Item implements Item {
    id: string;
    name: string;
    price: number;
    description: string;
   
    

  constructor(name: string, price: number, description: string) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.description = description;
    
  }
}

class User implements User {
    id: string;
    name: string;
    age: number;
    cart: Item[];

  constructor(name: string, age: number) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.cart = [];
  }

  addToCart(item: Item): void {
    this.cart.push(item);
  }

  printCart(): void {
    console.log(this.name , this.cart);
  }
//                            removed: quantity in below arguement bc need counter for cart
  removeItemFromCart(item: Item): void {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
  }
// need some sort of counter....
}
const milk = new Item('Milk', 3.99, 'Whole Milk');
const apples = new Item('Apples', 5.99, '3lbs of Pink Lady Apples');
const eggs = new Item('Eggs', 7.99, 'Free Range Farm Eggs');
const bread = new Item('Bread', 4.99, 'Sourdough');


const user1 = new User('Beth Ross', 25);
const user2 = new User('Jack Black', 55);


// need to add quantity counter in cell above, then add extra argument to below
user1.addToCart(milk);
user1.addToCart(bread);
// user1.addToCart(apples);
user1.addToCart(eggs);

user1.printCart();
user2.addToCart(milk);
user2.addToCart(apples);
user2.addToCart(bread);

user2.printCart();

user1.removeItemFromCart(eggs);
user1.printCart();

// need a way to have quantity
// user1.removeQuantityFromCart(eggs);
// user1.printCart();
