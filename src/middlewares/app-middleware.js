import express from 'express';
import session from 'express-session';
import fileUpload from 'express-fileupload';

export default express.Router()
    .use(express.json())
    .use(session({
        secret: 'edo',
        resave: true,
        rolling: true,
        saveUninitialized: false,
        cookie: {maxAge: 15000}
    })).use(fileUpload({
        abortOnLimit: true,
        safeFileNames: true,
        preserveExtension: true,
        limits: {
            fileSize: Number(process.env.FILE_SIZE_LIMIT) * 1024 * 1024,
            files: Number(process.env.FILE_UPLOAD_COUNT),
        }
    }))