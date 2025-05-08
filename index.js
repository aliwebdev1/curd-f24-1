const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

// middleware
app.use(cors());



app.get('/', (req, res) => {
    res.send('Home Route Working');
})


app.listen(port, () => {
    console.log(`Our server is working on: ${port}`);
})