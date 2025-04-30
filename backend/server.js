import express from 'express';
import { getRandomAlbum } from './SpotifyService.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/random-album", async (req, res) => {
  try {
    const album = await getRandomAlbum();
    res.json(album);
  } catch (err) {
    console.error("API error:", err.response?.data || err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});


console.log("CLIENT_ID:", process.env.SPOTIFY_CLIENT_ID);
console.log("CLIENT_SECRET:", process.env.SPOTIFY_CLIENT_SECRET);


app.listen(PORT, () => console.log(`🟩 Server running on http://localhost:${PORT}`));
