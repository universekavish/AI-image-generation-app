import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect';

dotenv.config();

const app = express();
// Adding middlewares
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.get('/', async (req, res) => {
    res.send("Hello From AI!");
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log("Server is running on 8080"))
    } catch (error) {
        console.log(error);
    }

    
}

startServer();