import express from 'express';
import session from 'express-session';

export default express.Router()
    .use(express.json())
    .use(session({
        secret: 'edo',
        resave: true,
        rolling: true,
        saveUninitialized: false,
        cookie: {maxAge: 15000}
    }))