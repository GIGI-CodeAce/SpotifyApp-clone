import { AlbumProps } from './albumData';
import { useEffect, useState } from 'react';

interface Song {
  name: string;
  duration: number;
  plays: number;
}

const TrackList = ({ album }: { album: AlbumProps }) => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    if (album && album.tracks) {
      const trackList = album.tracks.map(track => ({
        name: track.name,
        duration: track.duration_min,
        plays: Math.floor(Math.random() * 10000),
      }));
      console.log(album);
      setSongs(trackList);
    }
  }, [album]);

  

  return (
    <div>
      <ol className="hover:cursor-pointer border-4 border-black bg-black">
        {songs.length > 0 ? (
          songs.map((song, index) => (
            <li key={index} className="rounded-md odd:bg-gray-800 text-white even:bg-gray-700 py-2 px-2 active:bg-gray-700 relative h-11">
              <span className="mr-5 ml-2 select-none">{song.name}</span>
              <span>{song.duration} min</span>
              <span className="absolute right-[35%]">{song.plays} plays</span>
            </li>
          ))
        ) : (
          <p className="text-white">No songs available</p>
        )}
      </ol>
    </div>
  );
};

export default TrackList;
