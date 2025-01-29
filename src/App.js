import React, { useState } from 'react';
import Track from './player/songsTrack';
import albumData from './player/albumData';
import Info from './player/infoTab';
import Album from './player/album';
import Footer from './player/footerTrack';
import SongOverview from './playingStatus/songOverview';

function App() {
  const { trackList, AlbumInfo } = albumData();
  const selectedAlbum = AlbumInfo[0];

  const [selectedSong, setSelectedSong] = useState(trackList[0]); 

  function handleTrackClick(song) {
    setSelectedSong(song);
  }

  return (
    <>
      <SongOverview 
        artist={selectedAlbum.artist} 
        name={selectedSong.name}
      />
      <Album {...selectedAlbum} />
      <Info />
      <main>
        {trackList.map((item) => (
          <Track
            onClick={() => handleTrackClick(item)}
            key={item.id}
            {...item}
          />
        ))}
      </main>
      <Footer {...selectedAlbum} />
    </>
  );
}

export default App;