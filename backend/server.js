import express from 'express';
import getStoryRoutes from './routes/getStory.js';
const app = express();
const PORT = 3001;
app.use(express.json());

app.use('/', getStoryRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur 👉 http://localhost:${PORT}`);
});
