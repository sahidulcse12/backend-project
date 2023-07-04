require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const product_routes = require('./routers/products');


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello, I am working");
})

app.use('/api/products', product_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} is connected`);
        })

    } catch (error) {
        console.log(error);
    }
}

start();

