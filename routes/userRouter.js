import express from 'express';

const userRouter = express.Router();


// Add custom middleware JUST for the user routes
userRouter.use((req, res, next) => {
    console.log(" [UserRouter] " + req.method + " " + req.url);
    next();
})

// the /users/ in front can be ignored
userRouter.get("/", (req, res) => res.send("User root path GET"));
userRouter.post("/", (req, res) => res.send("User root path PATH"));
userRouter.get("/about", (req, res) => res.send("User about path GET"));
// put in details as un undefined variable to reproduce an error for our globalErrorHandler function
userRouter.get("/details", (req, res, next) => {
    // Local error handler
    try {
        res.send(details)
    } catch(err) {
        // this will get printed, before the "throw err" returns to the globalErrorHandler
        console.log("Attempted to print details");
        // next 2 lines make it really local, without it going to the globalErrorHandler
        // res.status(500)
        // res.send("No. No details")
        // or to get back to the Global error handler
        // throw err;
        // or: (gets to GlobalErrorHandler next)
        next(err);
    }
});

export default userRouter;