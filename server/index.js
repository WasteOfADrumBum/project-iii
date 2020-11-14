const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const globalErrHandler = require("./controllers/errorController");
// const AppError = require('./server/utils/appError');
const index = express();

// Allow Cross-Origin requests
index.use(cors());

// Set security HTTP headers
index.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
  max: 150,
  windowMs: 60 * 60 * 1000,
  message: 'Too Many Request from this IP, please try again in an hour'
});
index.use('/api', limiter);

// Body parser, reading data from body into req.body
index.use(express.json({
  limit: '15kb'
}));

// Data sanitization against Nosql query injection
index.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
index.use(xss());

// Prevent parameter pollution
index.use(hpp());


// Routes
index.use("/api", require("./routes/apiRoutes"));

// handle undefined Routes
index.use('*', (req, res, next) => {
  const err = new AppError(404, 'fail', 'undefined route');
  next(err, req, res, next);
});

index.use(globalErrHandler);

module.exports = index;