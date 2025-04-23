import { AlbumProps } from './albumData';
import { useState } from 'react';

interface Props {
  album: AlbumProps;
}

const Album = ({ album }: Props) => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  const [shuffle, setShuffle] = useState(false)

  const handlePlay = () => setPlay(prev => !prev);
  const toggleLike = () => setLike(prev => !prev);

  const handleNewAlbum = () => {
    localStorage.removeItem("album");
    window.location.reload();
  };
  

  return (
    <div className="relative bg-gradient-to-b pt-2 from-slate-700 via-black to-black h-80 overflow-hidden">
      <div className="inline-flex">
        <div
          className="h-52 sm:h-56 sm:w-56 w-48 border-2 ml-4 rounded-lg shadow-md shadow-white"
          style={{
            backgroundImage: `url(${album.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="absolute font-semibold ml-60 sm:ml-72 mt-10 w-6 h-6 text-white">Album</div>
        <div className="absolute font-semibold ml-60 mt-[89px] sm:mt-20 xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl sm:ml-72 text-white max-w-[250px] sm:max-w-[400px] md:max-w-[669px] overflow-hidden whitespace-nowrap truncate uppercase">
          {album.name}
        </div>
        <div className="absolute ml-60 sm:ml-72 mt-36 text-xs text-white md:text-2xl sm:text-xl">
          {album.artist} • {album.release_date} • {album.track_count} songs
        </div>
      </div>

      <main className="relative">
        <div className="inline-flex h-16 border-4 rounded-full border-green-500 bg-green-500 w-16 m-4">
          <abbr title="Play">
            <span onClick={handlePlay} className="text-black hover:cursor-pointer select-none">
              <span className="material-symbols-outlined !text-[58px]">{play ? 'pause' : 'play_arrow'}</span>
            </span>
          </abbr>
        </div>

        <abbr title="Shuffle">
          <span onClick={()=> setShuffle((old)=> !old)} className={`absolute mt-6 left-12 hover:cursor-pointer select-none ${shuffle ? 'text-green-500' : 'text-white'}`}>
            <span className="material-symbols-outlined !text-[50px] absolute left-11">shuffle</span>
          </span>
        </abbr>

        <abbr title={like ? 'Unsave' : 'Save'}>
          <span onClick={toggleLike} className="text-white absolute mt-6 left-40 hover:cursor-pointer select-none">
            <span className="material-symbols-outlined !text-[50px]">
              {like ? 'check_circle' : 'add_circle'}
            </span>
          </span>
        </abbr>

        <span title="Get new album" onClick={handleNewAlbum}
        className="text-white absolute mt-6 left-57 cursor-pointer select-none">
        <span className="material-symbols-outlined !text-[50px] text-green-500 hover:animate-spin">
        autorenew
          </span>
        </span>


        <span className="text-white absolute right-2 mt-11 mr-2 hover:cursor-pointer select-none">
          <span className="material-symbols-outlined text-3xl">list</span>
        </span>
      </main>
    </div>
  );
};

export default Album;
