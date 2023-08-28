const mongoose = require('mongoose');


const dbURI = 'mongodb://127.0.0.1:27017/codeial_developer'; // Replace with your MongoDB connection URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
