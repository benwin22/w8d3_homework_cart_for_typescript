function testMe(name:string):void{
    console.log(name)
}

testMe("Here's Johnny")

type Items = {
    id: string,
    name: string,
    price: number,
    description: string
}

let item:[id:string, name:string, price:number, description:string]

class Items {
    id: string
    name: string
    price: number
    description: string
    
    constructor(id:string,name:string,price:number,description:string){
        this.id = id
        this.name = name
        this.price = price
        this.description = description
    }
}
let item1={
    id:"8976-0",
    name:"apples",
    price:5.99,
    description: "3lbs pink lady apples"
}
console.log(item1)
let item2={
    id:"8432-0",
    name:"bread",
    price:3.99,
    description: "scratch-made sourdough"
}
console.log(item2)
let item3={
    id:"4321-0",
    name:"milk",
    price:2.99,
    description: "1/2 gallon Whole Milk"
}
console.log(item3)
type User = {
    id: string,
    name: string,
    age: number,
    cart: string[];
}
let cart: [item:string, quantity:string, total:number]
// enum?
let user1 ={
    id:"shopper-001",
    name:"Beth",
    age:30,
    cart:[item1, item2, item3]
}
type Cart = {
    cartId:string,
    cartItems:string [],
    cartQuantity:number,
    cartTotal: string[]
}
let cart1 = {
    cartId:"cart-01",
    cartItems:["milk", "apples"],
    cartQuantity:2,
    cartTotal: ["item3"+"item1"]
}

type newUser ={
    name:string,
    age:number
}

class newUser{
    name(){console.log("name")}
    age(){console.log("age")}
}
function createUser(newuser:unknown){
    if (newuser instanceof newUser){
        newuser.name()
        newuser.age()
    }else{
        console.log("please enter name and age")
    }
}

type newItem ={
    name:string,
    price:number,
    description:string
}

class newItem{
    name(){console.log("name")}
    price(){console.log()}
    description(){console.log("description")} 
}

function createItem(newitem:unknown){
    if (newitem instanceof newItem){
        newitem.name()
        newitem.price()
        newitem.description()
    }else{
        console.log("please add new item")
    }
}

type addTo={
    //     object of item type 
    //     object of User
}

// need a way to count & add(+)
function addToCart(addto:unknown){
    if (addto instanceof addTo){
//     object of item type 
//     object of User        
    }else{
        console.log("add something to cart")
    }
}

type removeFrom={
    //     object of item type 
    //     object of User       
}
class removeFrom{
    //     object of item type 
    //     object of User       
}
// need a way to count & subtract(-)
function removeFromCart(removefrom:unknown){
    if (removefrom instanceof removeFrom){
//     object of item type 
//     object of User   
    }else{
        console.log("do you want to remove item?")
    }
}

// Step 4: Create Driver Code to emulate a front end user
// Create 3 Items to Sell. For this example we will call them Item A Item B and Item C (you can name them anything that make sense)
// Add Item A to the users Cart
// print the contents of the user's cart
// print the Total of the user's cart
// Add 3 Items to the users Cart
// print the contents of the user's cart
// print the Total of the user's cart
// Use your remove (not remove by Quantity function) to remove all of Items from your cart
// print the contents of the user's cart
// print the Total of the user's cart