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
        plays: Math.floor(Math.random() * 99999 + 100000),
      }));
      console.log(album);
      setSongs(trackList);
    }
  }, [album]);


  return (
<div>
  <ol className="list-decimal list-inside marker:text-green-500 hover:cursor-pointer border-4 border-black bg-black">
    {songs.length > 0 ? (
      songs.map((song, index) => (
        <li
          key={index}
          className="rounded-md bg-[#1f2937] text-white py-2 px-2 active:bg-gray-700 h-11 relative"
        >
          <span className="ml-2 select-none inline-block max-w-[200px] sm:max-w-[500px] truncate">{song.name}</span>
          <span className="absolute right-[35.1%]">{song.plays}</span>
          <span className="absolute right-[10%]">{song.duration}</span>
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
