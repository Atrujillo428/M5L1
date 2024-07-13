function loggerMiddleware(req, res, next) {
    console.log('Middleware executed');
    next(); //Proceed to the next middleware
}