require("dotenv").config();
const express = require("express");
const Routes = require("./routes");
const { customErrorMiddliware } = require("./middlewares/customErrorMiddleware");
const app = express();
const pg = require("./modules/pg/pg");
const { errorHandlerMiddleware } = require("./helpers/customError");
const port = process.env.port || 8080;

async function server() {
    try {
        const db = await pg();
        app.listen(port, () => {
            console.log(`server ${port} - portda ishga tushdi`);
        });
        app.use(express.json());
        app.use(express.urlencoded({
            extended: true,
        }));
        app.use((req, res, next) => {
            req.db = db;
            next();
        });
        app.use(customErrorMiddliware);
        app.use("/v1", Routes);
        app.use(errorHandlerMiddleware)
    } catch (error) {
        console.log("SERVER ERROR:", error);
    }
}

server();

