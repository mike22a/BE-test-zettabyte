import mongoose from "mongoose";
import Article from "./Article.js";

const Comment = mongoose.Schema({
    articleId : {
        type: String,
        ref: Article,
    },
    comment : {
        type: String,
        required: true,        
    }
});

export default mongoose.model('Comment', Comment);