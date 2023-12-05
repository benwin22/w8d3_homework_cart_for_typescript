import { v4 as uuidv4 } from 'uuid';


class Item implements Item {
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
   
    

  constructor(name: string, price: number, description: string, quantity: number) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
    
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
  removeCount(item: Item, quantity:number):void{
      item.quantity -= quantity
      if (item.quantity <= 0){
          this.removeItemFromCart(item)
      }
      console.log(this.cart)
  }

}
const milk = new Item('Milk', 3.99, 'Whole Milk',200);
const apples = new Item('Apples', 5.99, '3lbs of Pink Lady Apples', 1);
const eggs = new Item('Eggs', 7.99, 'Free Range Farm Eggs', 1);
const bread = new Item('Bread', 4.99, 'Sourdough', 1);


const user1 = new User('Beth Ross', 25);
// const user2 = new User('Jack Black', 55);

user1.addToCart(milk);
user1.addToCart(bread);
user1.addToCart(apples)
user1.addToCart(eggs);

user1.printCart();

user1.removeCount(milk, 2);