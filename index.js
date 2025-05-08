const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

// middleware    KRlF61SaQmApbi1b     basic_card
app.use(cors());




const uri = "mongodb+srv://basic_card:KRlF61SaQmApbi1b@cluster0.guep9xh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const database = client.db('Basic');
        const userCollection = database.collection("Users");

        app.get('/users', async (req, res) => {
            const query = {};
            const users = await userCollection.find(query).toArray();
            res.send(users)
        })

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Home Route Working');
})


app.listen(port, () => {
    console.log(`Our server is working on: ${port}`);
})