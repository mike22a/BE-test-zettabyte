import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
});

const CommentSchema = mongoose.Schema({
    articleId : {
        type: String,
        // ref: ArticleSchema,
        required: true,        
    },
    comment : {
        type: String,
        required: true,        
    }
});

// export default mongoose.model('Article', Article);

export const Article = mongoose.model('Article', ArticleSchema);
export const Comment = mongoose.model('Comment', CommentSchema);

// module.export = Article;
// module.export = Comment;