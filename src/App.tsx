
import Footer from './player/footerTrack';
import AlbumPage from './player/AlbumPage.tsx';
import NavigationBar from './navBar/nav.tsx';
import './index.css'

function App() {
  return (
    <>
    <NavigationBar/>
      <AlbumPage/>
      <Footer />
    </>
  );
}

export default App;
