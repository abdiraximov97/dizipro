require("dotenv").config();
const express = require("express");
const app = express();


const port = process.env.port || 5000;

async function server() {
    try {
        app.listen(port, () => {
            console.log(`server ${port} - portda ishga tushdi`);
        });
        app.use(express.json());
        app.use(express.urlencoded({
            extended: true,
        }));
        
    } catch (error) {
        console.log("SERVER ERROR:", error);
    }
}

