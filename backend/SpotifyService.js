import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

let token = null;

async function getAccessToken() {
  try {
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
            ).toString("base64"),
        },
      }
    );
    token = res.data.access_token;
    return token;
  } catch (err) {
    console.error("Failed to get access token:", err.response?.data || err.message);
    throw err;
  }
}

export async function getRandomAlbum() {
  try {
    if (!token) await getAccessToken();

    const res = await axios.get(
      `https://api.spotify.com/v1/browse/new-releases?limit=34`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const albums = res.data.albums.items;
    const random = albums[Math.floor(Math.random() * albums.length)];

    // Fetch album details (including artist, release date, and tracks)
    const tracksRes = await axios.get(
      `https://api.spotify.com/v1/albums/${random.id}/tracks`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    // Fetch the artist's details
    const artistRes = await axios.get(
      `https://api.spotify.com/v1/artists/${random.artists[0].id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return {
      id: random.id,
      name: random.name,
      image: random.images[0].url,
      release_date: random.release_date.split('-')[0], // Extract year from release date
      track_count: tracksRes.data.items.length, // Count the number of tracks in the album
      artist: artistRes.data.name, // Artist's name
      tracks: tracksRes.data.items.map((track) => ({
        name: track.name,
        duration_min: (track.duration_ms / 60000).toFixed(2), // Duration in minutes
        popularity: track.popularity, // Popularity score (0-100)
      })),
    };
  } catch (err) {
    console.error("Failed to fetch album:", err.response?.data || err.message);
    throw err;
  }
}
