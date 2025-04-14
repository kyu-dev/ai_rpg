import express from 'express';
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('holla');
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur 👉 http://localhost:${PORT}`);
});
