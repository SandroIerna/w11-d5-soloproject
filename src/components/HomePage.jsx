import { useEffect, useState } from "react";
import { addToSearchArtist } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import MusicCard from "./MusicCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const artistAlbums = useSelector(
    (state) => state.searchArtist.artistAlbumArray
  );
  const [artistAlbumsArray, setArtistAlbumsArray] = useState([]);

  useEffect(() => {
    dispatch(addToSearchArtist("Katy Perry"));
  }, []);

  useEffect(() => {
    setArtistAlbumsArray(artistAlbums);
    console.log("array =", artistAlbumsArray);
  }, [artistAlbums]);

  return (
    <div className="sidebar-margin">
      <Row>
        {artistAlbumsArray.slice(0, 6).map((album) => (
          <MusicCard album={album} key={album.id} />
        ))}
      </Row>
    </div>
  );
};
export default HomePage;
