// useAlbumData.ts
import { useEffect, useState } from "react";
import axios from "axios";

export interface Track {
    name: string;
    duration_min: number;
  }
  
  export interface AlbumProps {
    id: string;
    name: string;
    artist: string;
    image: string;
    release_date: string;
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
      axios.get("http://localhost:3000/api/random-album")
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
