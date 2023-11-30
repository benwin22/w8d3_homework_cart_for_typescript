# object oriented oop

class Cart:
    def __init__(self):
        self.shopping_cart = {}

    def add_item(self):
        item = input("What do you want to add to your cart? ")
        amount = input(f"How much or how many {item} would you like? ")

        if item not in self.shopping_cart:
            self.shopping_cart[item] = int(amount)
        else:
            self.shopping_cart[item] += int(amount)

    def remove_item(self):
        item = input("What do you want to remove? ")
        if item in self.shopping_cart:
            del self.shopping_cart[item]
        else:
            print(f"{item} not found in the cart.")

    def show_cart(self):
        print("Your shopping cart:")
        for item, quantity in self.shopping_cart.items():
            print(f"{item}: {quantity}")

    def quit(self):
        print("Exiting the program. Your final shopping cart:")
        self.show_cart()
        # You can also return the shopping cart if needed

# Create an instance of the Cart class
shopping_cart_instance = Cart()

while True:
    response = input("What would you like to do? Add, Remove, Show, or Quit? ")

    if response.lower() == 'add':
        shopping_cart_instance.add_item()
    elif response.lower() == 'remove':
        shopping_cart_instance.remove_item()
    elif response.lower() == "show":
        shopping_cart_instance.show_cart()
    elif response.lower() == "quit":
        shopping_cart_instance.quit()
        break
    else:
        print("Invalid input. Please enter Add, Remove, Show, or Quit.")