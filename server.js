const app = require('./app');
const mongoose = require('mongoose');

// const DB = 'mongodb://127.0.0.1:27017/WebTechDA2';

// mongoose
//     .connect(DB);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});