import React, { useState } from 'react';

function Album(props) {
  const [image, setImage] = useState('');

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFilePicker = () => {
    document.getElementById('imageInput').click();
  };

  return (
    <div className="bg-stone-950 h-80">
      <div className="inline-flex">
        {/* Photo */}
        <div
          className="hover:cursor-pointer h-56 w-60 border-2 ml-4 rounded-lg shadow-md shadow-white"
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
        <div className="absolute ml-72 mt-10 w-6 h-6 text-white">{props.album ? 'Album' : 'Single'}</div>
        <div className="absolute ml-72 mt-20 text-3xl sm:text-5xl text-white">{props.name}</div>
        <div className="absolute ml-72 mt-36 text-md text-white">{props.artist} • {props.year} • {props.songs} songs</div>
      </div>

      <br />
      <main className="relative">
        <div className="inline-flex h-16 border-4 rounded-[50%] border-green-500 bg-green-500 w-16 m-4">
          <span className="text-black hover:cursor-pointer select-none">
            <span className="material-symbols-outlined text-[58px]">play_arrow</span>
          </span>
        </div>
        <span className="text-white absolute mt-6 left-12 hover:cursor-pointer select-none">
          <span className="material-symbols-outlined text-[50px] absolute left-11">shuffle</span>
        </span>
        <span className="text-white absolute mt-6 left-40 hover:cursor-pointer select-none">
          <span className="material-symbols-outlined text-[50px]">add_circle</span>
        </span>
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