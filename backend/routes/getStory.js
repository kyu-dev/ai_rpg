import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
  res.json({ message: 'Voici ton aventure ! 🧙‍♂️' });
});
export default router;
