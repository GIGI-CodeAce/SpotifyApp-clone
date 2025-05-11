import { AlbumProps } from './albumData';
import { useEffect, useState } from 'react';

interface Song {
  name: string;
  duration: string;
  plays: number;
}

const TrackList = ({ album }: { album: AlbumProps }) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
<ol className="marker:text-green-500 pr-1 ml-2 hover:cursor-pointer border-4 border-black bg-black">
  {songs.length > 0 ? (
    songs.map((song, index) => (
      <li
        onTouchStart={() => setActiveIndex(index)}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
        title={song.name}
        key={index}
        className="group rounded-md bg-[#1f2937] mb-2 text-white py-2 pr-2 pl-4 active:bg-gray-700 hover:bg-green-950 h-11 relative flex items-center"
      >
        <span
            className={`text-gray-400 select-none ${index > 8 ? 'mr-3' : 'mr-4 ml-1'} ${
            activeIndex === index ? 'hidden' : 'group-hover:hidden'}`}>
            {index + 1}</span>

        <span
          className={`mr-4 text-green-500 font-mono select-none ${
            activeIndex === index ? 'inline' : 'hidden group-hover:inline'}`}>
            ▶</span>


        <span className={`sm:ml-1 inline-block max-w-[155px] md:max-w-[500px] sm:max-w-[330px] truncate`}>
          {song.name}
        </span>

        <span className="absolute right-[35.4%] text-sm text-gray-300">
          {song.plays}
        </span>

        <span className="absolute right-[9.5%] text-sm text-gray-400">
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
