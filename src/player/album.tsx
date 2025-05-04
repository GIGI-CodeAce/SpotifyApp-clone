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
    <div className="relative mb-6 bg-gradient-to-b pt-2 from-slate-700 via-black to-black h-80 overflow-hidden">
      <div className="inline-flex">
        <a href={album.spotify_url} target='_blank'>
        <div
          className="h-52 cursor-pointer sm:h-56 sm:w-56 w-48 border-2 ml-4 rounded-lg shadow-md shadow-slate-700"
          style={{
            backgroundImage: `url(${album.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        </a>

        <div className="absolute font-semibold ml-56 sm:ml-72 mt-10 w-6 h-6 text-white">Album</div>
        <a href={album.spotify_url} target='_blank' className='absolute'>
        <div className="absolute font-semibold ml-55 mt-[89px] hover:underline sm:mt-20 xl:text5xl lg:text-4xl md:text-3xl sm:text-3xl sm:ml-72 text-lg text-white max-w-[250px] sm:max-w-[400px] md:max-w-[669px] overflow-hidden whitespace-nowrap truncate uppercase">
          {album.name}
        </div></a>
        <div className="absolute ml-55 sm:ml-72 opacity-70 mt-36 text-xs text-white md:text-2xl sm:text-xl">
          {album.artist} • {album.year_date} • {album.track_count} songs
        </div>
      </div>

      <main className="relative">
        <div className="inline-flex border-4 rounded-full border-green-500 bg-green-500 w-16 h-16 m-4">
            <span title='Play' onClick={handlePlay} className="text-black hover:cursor-pointer select-none">
              <span className="material-symbols-outlined !text-[58px]">{play ? 'pause' : 'play_arrow'}</span>
            </span>
        </div>

          <span title='Shuffle' onClick={()=> setShuffle((old)=> !old)} className={`absolute mt-6 left-12 hover:cursor-pointer select-none ${shuffle ? 'text-green-500' : 'text-white'}`}>
            <span className="material-symbols-outlined !text-[50px] absolute left-11">shuffle</span>
          </span>

          <span title={like ? 'Unsave' : 'Save'} onClick={toggleLike} className="text-white absolute mt-6 left-40 hover:cursor-pointer select-none">
            <span className="material-symbols-outlined !text-[50px]">
              {like ? 'check_circle' : 'add_circle'}
            </span>
          </span>

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
