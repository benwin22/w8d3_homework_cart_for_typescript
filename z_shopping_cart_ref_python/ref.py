from IPython.display import clear_output

shopping_cart = {}

while True:
    clear_output()  # Clear the output for a cleaner display
    
    # Ask the user for input
    response = input("Do you want to 'Add' an item, 'Delete' an item, 'Show' your cart, or 'Quit'?: ").lower()

    # Check the user's response and perform the corresponding action
    if response == 'add':
        item_name = input("What do you want to add? ")
        quantity = int(input("How many? "))
        shopping_cart[item_name] = shopping_cart.get(item_name, 0) + quantity
    elif response == 'delete':
        item_name = input("What do you want to delete? ")
        if item_name in shopping_cart:
            quantity = int(input("How many? "))
            if quantity >= shopping_cart[item_name]:
                del shopping_cart[item_name]
            else:
                shopping_cart[item_name] -= quantity
        else:
            print("Item not found in the cart.")
    elif response == 'show':
        print("Your shopping cart:")
        for item, quantity in shopping_cart.items():
            print(f"{item}: {quantity}")
    elif response == 'quit':
        print("Exiting the program. Your final shopping cart:")
        for item, quantity in shopping_cart.items():
            print(f"{item}: {quantity}")
        break
    else:
        print("Invalid input. Please enter 'Add', 'Delete', 'Show', or 'Quit'.")

# The program will keep running until the user chooses to quit.

