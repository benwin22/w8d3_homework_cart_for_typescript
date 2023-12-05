"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(name, price, description, quantity) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
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
    removeCount(item, quantity) {
        item.quantity -= quantity;
        if (item.quantity <= 0) {
            this.removeItemFromCart(item);
        }
        console.log(this.cart);
    }
}
const milk = new Item('Milk', 3.99, 'Whole Milk', 200);
const apples = new Item('Apples', 5.99, '3lbs of Pink Lady Apples', 1);
const eggs = new Item('Eggs', 7.99, 'Free Range Farm Eggs', 1);
const bread = new Item('Bread', 4.99, 'Sourdough', 1);
const user1 = new User('Beth Ross', 25);
// const user2 = new User('Jack Black', 55);
user1.addToCart(milk);
user1.addToCart(bread);
user1.addToCart(apples);
user1.addToCart(eggs);
user1.printCart();
user1.removeCount(milk, 2);
