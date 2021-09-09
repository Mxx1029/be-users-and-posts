// Global error handling middleware
// you can also add local error handlers with try and catch directly in UserRouter but this is recommended
export const globalErrorHandler = (err, req, res, next) => {
    console.error("Global Error Handler intercepted an error! " + err.stack);
    res.status(500);
    res.send({ message: err.message })
};