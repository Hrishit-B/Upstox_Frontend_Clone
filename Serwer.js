const app = require('./app');
const mongoose = require('mongoose');

const DB = 'mongodb+srv://hrishitb0506:bHyty9Xdf7uvN3fj@cluster0.gqxxnd5.mongodb.net/test';

mongoose
    .connect(DB)
    .then(()=> {
        console.log('DB successfully connected');
    });

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});