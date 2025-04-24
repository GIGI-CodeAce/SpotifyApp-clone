// useAlbumData.ts
import { useEffect, useState } from "react";
import axios from "axios";


export interface Track {
    name: string;
    duration_min: string;
  }
  
  export interface AlbumProps {
    id: string;
    name: string;
    artist: string;
    image: string;
    year_date: string;
    date: string;
    track_count: number;
    spotify_url: string;

    tracks: Track[];
  }

const useAlbumData = (): AlbumProps | null => {
  const [album, setAlbum] = useState<AlbumProps | null>(() => {
    const storedAlbum = localStorage.getItem("album");
    return storedAlbum ? JSON.parse(storedAlbum) : null;
  });

  useEffect(() => {
    if (!album) {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/random-album`)
        .then((res) => {
          setAlbum(res.data);
          localStorage.setItem("album", JSON.stringify(res.data));
        })
        .catch((err) => {
          console.error("Failed to fetch album:", err);
        });
    }
  }, [album]);

  return album;
};

export default useAlbumData;
