# Foodie

## Overview

This Food Ordering Web App is an Angular-based application that allows users to browse a selection of food items, add them to their cart, and place orders. It provides features for user authentication, cart management, order placement, and food item browsing.

## Table of Contents
- [Live Website](#live-website)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Features

- User Authentication: Users can create accounts, log in, and stay authenticated throughout their session using JSON Web Tokens (JWTs). Unauthorized users are redirected to the login page.

- Browsing Food Items: The home page displays a list of food items fetched from the server. Users can filter and search for specific items by tags or keywords.

- Adding to Cart: Users can add food items to their cart from the food details page. The cart stores information about selected items, including quantity and price.

- Placing Orders: Users can place orders from the cart page. Orders include user information, selected items, total price, and payment details.

- Order Tracking: Users can track the status of their orders using the order tracking feature. They can see details such as order date, status, and payment information.

## Getting Started

Follow these steps to set up and run the project locally:

- Clone the Repository:

git clone https://github.com/lironamy/Foodie.git
cd Foodie

- Install Dependencies:

npm install

- Environment Configuration:

Create a .env file at the root of the project and configure the following environment variables:

MONGO_URL=http://localhost:3000/api
JWT_SECRET=your-secret-key
Replace your-secret-key with your JWT secret key.

- Run the Application:

ng serve
The application should now be running locally.

## Usage

### User Registration:

- Access the web app at http://localhost:4200.
- Click on "Register" to create a new account. Fill in your details.

### Browsing Food Items:

- Explore food items on the home page.
- Use the search bar to search for specific items.
- Filter items by tags.

### Adding to Cart:

- Click on a food item to view details.
- Click the "Add to Cart" button to add the item to your cart.

### Viewing Cart:

- Click on the cart icon view your cart.
- Adjust item quantities or remove items as needed.

### Placing Orders:

- From the cart page, click the "Proceed to Checkout" button.
- select a location on the map.
- Click "Go To Payment" to place the order.

### Order Tracking:

- Navigate to the "Order Tracking" page to view your order history.
- Click on an order to see its details.

## Dependencies

- Angular for frontend
- Toastr for notifications
- ngx-pagination for pagination
- MongoDB for the database
- Node.js for the backend server
- leaflet for the map

## Screenshots

## Acknowledgments
This project was built using Angular, a powerful web framework.
Thanks to the developers of the libraries and packages used in this project.
