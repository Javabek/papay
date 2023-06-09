const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const mongoose = require("mongoose");
const { log } = require("console");

let db;
const connectionString = process.env.MONGO_URL

mongoose.set('strictQuery', false);
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (err, goose) => {
        if (err) {
            console.log("Error on connection to MongoDb");
        } else {
            console.log("Database ga muvaffa1iyatli ulandi");
            module.exports = goose;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = process.env.PORT || 3003;
            server.listen(PORT, function () {
                console.log(`The server is running successfully on port ${PORT}, http://localhost:${PORT}`);
            })
        }
    });

    