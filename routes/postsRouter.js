import express from 'express';
import { postsGet, postsPost, postsPut, postsDelete } from './controllers/postsController.js';

const postsRouter = express.Router();

postsRouter.use((req, res, next) => {
    console.log(" [PostsRouter] " + req.method + " " + req.url);
    next();
})

postsRouter.get("/", postsGet);
postsRouter.post("/", postsPost);
postsRouter.put("/:id", postsPut);
postsRouter.put("/:id", postsDelete);

export default postsRouter;