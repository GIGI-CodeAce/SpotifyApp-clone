import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

let token = null;
let tokenExpiresAt = 0;
const randMarket = ['GB', 'US', 'DE'];

const getRandomItemFromArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

async function getAccessToken() {
  const now = Date.now();

  // If we already have a valid token, reuse it
  if (token && now < tokenExpiresAt) return token;

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
    tokenExpiresAt = now + res.data.expires_in * 1000 - 5000; // 5 second buffer
    console.log("🔁 Access token refreshed.");
    return token;
  } catch (err) {
    console.error("Failed to get access token:", err.response?.data || err.message);
    throw err;
  }
}

export async function getRandomAlbum() {
  try {
    const token = await getAccessToken();

    const res = await axios.get(
      `https://api.spotify.com/v1/browse/new-releases?limit=34&market=${getRandomItemFromArray(randMarket)}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const albums = res.data.albums.items;
    const shuffled = albums.sort(() => 0.5 - Math.random());

    for (const album of shuffled) {
      const tracksRes = await axios.get(
        `https://api.spotify.com/v1/albums/${album.id}/tracks`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const tracks = tracksRes.data.items;

      if (tracks.length >= 9) {
        const artistRes = await axios.get(
          `https://api.spotify.com/v1/artists/${album.artists[0].id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        return {
          id: album.id,
          name: album.name,
          image: album.images[0].url,
          year_date: album.release_date.split('-')[0],
          date: album.release_date,
          track_count: tracks.length,
          artist: artistRes.data.name,
          spotify_url: album.external_urls.spotify,
          tracks: tracks.map((track) => ({
            name: track.name,
            duration_min: (track.duration_ms / 60000).toFixed(2).replace('.', ':'),
          })),
        };
      }
    }

    throw new Error("No album with at least 9 tracks found.");
  } catch (err) {
    console.error("Failed to fetch album:", err.response?.data || err.message);
    throw err;
  }
}
