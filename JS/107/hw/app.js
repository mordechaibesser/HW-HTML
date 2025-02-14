import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

import authRouter from './routes/auth.js';

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', authRouter);

// Catch 404 errors
app.use((req, res) => {
    res.status(404).send('<h1>Not Found</h1><h2>404</h2><p>The page you are looking for does not exist.</p>');
});

export default app;
