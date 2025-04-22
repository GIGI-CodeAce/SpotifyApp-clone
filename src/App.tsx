
import Footer from './player/footerTrack';
import SongOverview from './playingStatus/songOverview.tsx'
import AlbumPage from './player/AlbumPage.tsx';
import NavigationBar from './navBar/nav.tsx';
import './index.css'

function App() {
  return (
    <>
    <NavigationBar/>
      <SongOverview/>
      <AlbumPage/>
      <Footer />
    </>
  );
}

export default App;
