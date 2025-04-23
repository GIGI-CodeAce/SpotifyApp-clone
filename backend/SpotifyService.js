import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

let token = null;
const randMarket = ['GB', 'US']

const getRandomItemFromArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};


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
          release_date: album.release_date.split('-')[0],
          track_count: tracks.length,
          artist: artistRes.data.name,
          label: album.label, 
          spotify_url: album.external_urls.spotify,
          label: album.label,
          tracks: tracks.map((track) => ({
            name: track.name,
            duration_min: (track.duration_ms / 60000).toFixed(2),
          })),
        };
      }
    }

    throw new Error("No album with at least 7 tracks found.");
  } catch (err) {
    console.error("Failed to fetch album:", err.response?.data || err.message);
    throw err;
  }
}
