import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

import postRouter from './routes/post.mjs'


const app = express();
app.use(express.json());
app.use(cors())


app.use("/api/v1", postRouter)


app.use(express.static(path.join(__dirname, './Web/build')))

const PORT = process.env.PORT || 5501;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})