import React from 'react';
import Track from './songsTrack';
import getTrackList from './trackList';
import Info from './infoTab';
import Album from './album';
import Footer from './footerTrack';

function App() {
  const trackList = getTrackList();

  return (
    <>
    <Album/>
    <Info/>
    <main>
    {trackList.map((item) => (
  <Track
    key={item.id}
    {...item}
  />
))}
    </main>
    <Footer/>
    </>
  );
}

export default App;