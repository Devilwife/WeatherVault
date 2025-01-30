// TODO: Serve static files of entire client dist folder

// TODO: Implement middleware for parsing JSON and urlencoded form data

// TODO: Implement middleware to connect the routes
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

// Import the routes
import routes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3001;

// Serve static files from the 'dist' folder
app.use(express.static('../client/dist'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect the routes
app.use(routes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// import dotenv from 'dotenv';
// import express from 'express';
// dotenv.config();

// // Import the routes
// import routes from './routes/index.js';

// const app = express();

// const PORT = process.env.PORT || 3001;


// app.use(routes);

// // Start the server on the port
// app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
