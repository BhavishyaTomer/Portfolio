const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const sendEmail = require("./controller/sendEmail");
const cors = require('cors');
require('dotenv').config();

// Enable CORS for all routes
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    try {
        res.send("I am a good server");
    } catch (error) {
        console.error("Error handling request:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/sendEmail", sendEmail);

app.listen(process.env.PORT, () => {
    try {
        console.log("Server started on ", process.env.PORT);
    } catch (error) {
        console.error("Error starting server:", error);
    }
});
