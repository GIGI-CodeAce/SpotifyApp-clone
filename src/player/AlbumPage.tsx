import useAlbumData from "./albumData";
import Album from "./album";
import TrackList from "./songsTrack";
import Info from "./infoTab";
import LoadingPlaceholder from "../loadingPlaceholder";
import Footer from "./footerTrack";

const AlbumPage = () => {
  const album = useAlbumData();

  return (
    <div>
      {album ? (
        <>
          <Album album={album} />
          <Info />
          <TrackList album={album} />
          <Footer album={album} />
        </>
      ) : (
        <LoadingPlaceholder/>
      )}
    </div>
  );
};

export default AlbumPage
