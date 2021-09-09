import express from 'express';
import { requestlogger } from './middlewares/requestlogger.js';
import { globalErrorHandler } from './middlewares/globalErrorHandler.js';
import userRouter from './routes/userRouter.js';
// import postsRouter from './routes/postsRouter.js';
import { postsGet, postsPost, postsPut, postsDelete } from './controllers/postsController.js';
import { wildCardEndpoint } from './controllers/errorController.js';

const app = express();
app.use(requestlogger); // this always happens with every endpoint first
app.use(express.json()); // for JSON support

// "Users" endpoints
app.use('/users', userRouter);

// "Posts" endpoints
// do the same for /posts
// app.use('/posts', postsRouter);

// or keep it the old way (if your project is small)
app.get("/posts", postsGet);
app.post("/posts", postsPost);
app.put("/posts/:id", postsPut);
app.put("/posts/:id", postsDelete);

// Wildcard endpoint, runs for everything... except errors!
app.use(wildCardEndpoint);

// This middleware handles all uncaught errors
app.use(globalErrorHandler);

const port = 3012;
app.listen(port, () => {
    console.log("Application started on http://localhost:" + port);
})