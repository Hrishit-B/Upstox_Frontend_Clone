const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB)
    .then(() => {
        console.log('DB successfully connected');
    });

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});