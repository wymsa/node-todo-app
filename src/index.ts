import 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen('3001', () => {
  console.log('[Application] Server is running at http://localhost:3001');
});
