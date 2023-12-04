"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(name, price, description) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
class User {
    constructor(name, age) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
    printCart() {
        console.log(this.name, this.cart);
    }
    //                            removed: quantity in below arguement bc need counter for cart
    removeItemFromCart(item) {
        this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
    }
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
