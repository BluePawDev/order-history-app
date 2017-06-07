# Order History App (Peer)

## Customer List

[X] List all customers from DB on the left-hand side of the screen on page load [ ] Each customer listing should have a button next to it that will, when clicked, retrieve all of the order information for that customer.

## Order History

The order information will be displayed on the right-hand side of the screen whenever a customer order button is clicked. The order information should be grouped by order and listed with the oldest order first.

Include the order number and all line items and product details (name, unit price, quantity ordered) on the listing. The line items should be totaled to show a total dollar amount for the order. The orders.total field isn't quite right so don't rely on it! You'll have to total it some other way.

The address tied to the order should also be a part of the listing, formatted properly of course.

## HARD MODE

If a customer does not have any orders, do not display a button, instead show a line that let's the user know there are no orders on file for this customer.
