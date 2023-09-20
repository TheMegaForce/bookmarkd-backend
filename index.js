require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080
const bookmarksController = require('./controllers/bookmarksController');
const morgan = require('morgan');
const cors = require('cors');

app.use(cors())
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get("/", (req, res) => {
    res.send("go to /bookmarks")
})


app.use('/bookmarks', bookmarksController);

app.listen(PORT, () => console.log("Connected to port", PORT));