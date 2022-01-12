import express from "express";
import mongoose from "mongoose";
import articleRoute from "./routes/article.js";
import commentRoute from "./routes/comment.js";
import cors from "cors";

const app = express();
const port = 3000;
// cluster mongodb
const conn_str = "mongodb://db_api:User1234@cluster0-shard-00-00.0rzg1.mongodb.net:27017,cluster0-shard-00-01.0rzg1.mongodb.net:27017,cluster0-shard-00-02.0rzg1.mongodb.net:27017/db-api?replicaSet=atlas-kgpib2-shard-0&ssl=true&authSource=admin";

// connect to mongodb
mongoose.connect(
    conn_str,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("error connection");
        }else{
            console.log("mongodb is connected");
        }
    }
)

// middleware
app.use(cors());
app.use(express.json());
app.use('/article', articleRoute);
app.use('/comment', commentRoute);

app.listen(port, () => console.log(`Server running at port : ${port}`));