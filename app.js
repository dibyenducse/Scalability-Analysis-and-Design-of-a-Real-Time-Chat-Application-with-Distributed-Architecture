//External Imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');

//Internal imports
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');
const {
    notFoundHandler,
    errorHandler,
} = require('./middlewares/common/errorHandler');
const app = express();
dotenv.config();

//database connections
mongoose
    .connect(process.env.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connection successful!'))
    .catch((err) => console.log(err));
//mongoose.connection object to register event listeners.

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

//request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs');

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);
//404 not found handler
app.use(notFoundHandler);

//common error handler
app.use(errorHandler);

//server
app.listen(process.env.PORT, () => {
    console.log(`App listening on ${process.env.PORT}`);
});
