import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'

import routes from './routes.js';


const app = express();

//Setup Database
try {
    await mongoose.connect('mongodb://localhost:27017',{
    dbName: 'VectorFabric',
});
console.log('connect to database successfully');    
} catch (err) {
    console.error('Can not connect to DATA-BASE', err.message);
}

// Add CORS
app.use(cors());

// Add json parser
app.use(express.json());

// Add routes
app.use(routes);

app.listen(3030, () => { console.log('Server is listening on http://localhost:3030...');});
