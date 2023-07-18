My Redux and React Project
This is a small project that demonstrates how to use Redux and React to manage state in a React application. The project includes a shopping cart function that allows users to add products to a shopping cart.

Installation
To install the project, run the following command:

npm install // to install dependencies/

npm start  // to run the react app

The project will be served at http://localhost:3000.

Starting the JSON server

To start the JSON server, run the following command:
json-server db.json -p 8080  // // this is necessary to fetch the product data from server.

features:

The project uses createAsyncthunk and crud operations to perform asynchronous operations.
The project uses createSlice to create a Redux slice for both cart and Product.
The project fetches products  and updates cart information from a JSON file that is running on a local server. 
