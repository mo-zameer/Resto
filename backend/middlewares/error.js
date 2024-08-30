class ErrorHandler extends Error {  //Error is an exisiting class in javascript which will get extended to ErrorHandler class
    constructor(message, statusCode) { 
      super(message); //Message already exists in Error super class
      this.statusCode = statusCode; //statusCode is not there in Error class
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    /*if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    
    
    if (err.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        return next(new ErrorHandler(validationErrors.join(', '), 400));
    }*/
    
    
    return res.status(err.statusCode).json({
        success: false, //Error is false
        message: err.message, //error message will be displayed for the status code
    });
}

export default ErrorHandler