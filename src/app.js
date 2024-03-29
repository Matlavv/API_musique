const express = require('express');
const app = express();
const port = 3000;

const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/apinode')

app.use(express.urlencoded());
app.use(express.json());

const postRoute = require('./routes/musicRoute');
app.use('/music', musicRoute)

const comsRoute = require('./routes/votesRoute');
app.use('/votes', voteRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})