import React, { useState } from 'react';

interface AlbumProps {
  name: string;
  artist: string;
  album: boolean;
  date: string; // Changed from String to string
  year: number;
  label: string;
  songs: number;
}

function Album(props: AlbumProps) {
  const [image, setImage] = useState('');
  const [like, setLike] = useState(false);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFilePicker = () => {
    const imageInput = document.getElementById('imageInput') as HTMLInputElement;
    imageInput.click();
  };

  const Add = (): void => {
    setLike((oldVal) => !oldVal);
  };

  return (
    <div className="relative bg-gradient-to-b from-slate-700 via-black to-black h-80 overflow-hidden">
      <div className="inline-flex">
        {/* Photo */}
        <div
          className="hover:cursor-pointer h-52 sm:h-56 sm:w-56 w-48 border-2 ml-4 rounded-lg shadow-md shadow-white"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={openFilePicker}
        >
          {!image && <p className="text-center text-white">Select an image</p>}
        </div>

        {/* Song title */}
        <div className="absolute font-semibold ml-60 sm:ml-72 mt-10 w-6 h-6 text-white">
          {props.album ? 'Album' : 'Single'}
        </div>
        <div
          className="absolute font-semibold ml-60 mt-[89px] sm:mt-20 xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl sm:ml-72 text-white
          max-w-[400px] overflow-hidden whitespace-nowrap uppercase"
          contentEditable
          spellCheck="false"
        >
          {props.name}
        </div>
        <div className="absolute ml-60 sm:ml-72 mt-36 text-xs text-white md:text-2xl sm:text-xl">
          {props.artist} • {props.year} • {props.songs} songs
        </div>
      </div>

      <main className="relative">
        <div className="inline-flex h-16 border-4 rounded-full border-green-500 bg-green-500 w-16 m-4">
          <abbr title="Play">
            <span className="text-black hover:cursor-pointer select-none">
              <span className="material-symbols-outlined text-[58px]">play_arrow</span>
            </span>
          </abbr>
        </div>
        <abbr title="Shuffle">
          <span className="text-white absolute mt-6 left-12 hover:cursor-pointer select-none">
            <span className="material-symbols-outlined text-[50px] absolute left-11">shuffle</span>
          </span>
        </abbr>
        <abbr title={like ? 'Unsave' : 'Save'}>
          <span onClick={Add} className="text-white absolute mt-6 left-40 hover:cursor-pointer select-none">
            <span className="material-symbols-outlined text-[50px]">
              {like ? 'check_circle' : 'add_circle'}
            </span>
          </span>
        </abbr>
        <span className="text-white absolute right-2 mt-11 mr-2 hover:cursor-pointer select-none">
          <span className="material-symbols-outlined text-3xl">list</span>
        </span>
      </main>

      <input
        type="file"
        id="imageInput"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleImageSelect}
      />
    </div>
  );
}

export default Album;
