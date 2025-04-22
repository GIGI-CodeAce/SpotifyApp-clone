// AlbumPage.tsx
import useAlbumData from "./albumData";
import Album from "./album";
import TrackList from "./songsTrack";
import Info from "./infoTab";

const AlbumPage = () => {
  const album = useAlbumData();

  return (
    <div>
      {album ? (
        <>
          <Album album={album} />
          <Info />
          <TrackList album={album} />
        </>
      ) : (
        <p className="text-white">Loading album...</p>
      )}
    </div>
  );
};

export default AlbumPage;
