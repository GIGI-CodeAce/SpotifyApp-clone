import { AlbumProps } from './albumData';
import { useEffect, useState } from 'react';

interface Song {
  name: string;
  duration: string;
  plays: number;
}

const TrackList = ({ album }: { album: AlbumProps }) => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    if (album && album.tracks) {
      const trackList = album.tracks.map(track => ({
        name: track.name,
        duration: track.duration_min,
        plays: Math.floor(Math.random() * 999999),
      }));
      setSongs(trackList);
    }
  }, [album]);


  return (
<div>
<ol className="list-decimal list-outside marker:text-green-500 pr-2 pl-5 ml-1 hover:cursor-pointer border-4 border-black bg-black">
  {songs.length > 0 ? (
    songs.map((song, index) => (
      <li
        title={song.name}
        key={index}
        className="rounded-md hover:[&::marker]:content-['▶'] bg-[#1f2937] mb-2 text-white py-2 pr-2 pl-4 active:bg-gray-700 hover:bg-green-950 h-11 relative"
      >

        <span className="ml-1 inline-block max-w-[200px] sm:max-w-[500px] truncate">
          {song.name}
        </span>

        <span className="absolute right-[35%] text-sm text-gray-300">
          {song.plays}
        </span>

        <span className="absolute right-[10%] text-sm text-gray-400">
          {song.duration}
        </span>
      </li>
    ))
  ) : (
    <div className="text-gray-500 flex-col text-center justify-center mt-20">
    <h1 className="text-4xl">˙◠˙</h1>
    <p className="text-xl">No songs available</p>
  </div>
  )}
</ol>

</div>

  );
};

export default TrackList;
