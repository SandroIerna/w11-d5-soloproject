import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToPlayBar } from "../redux/actions";

const MusicCard = ({ album }) => {
  const dispatch = useDispatch();

  return (
    <Card className="card">
      <div className="play-on-hover">
        <img
          src="./icons/Menu/PlayOnHover.svg"
          alt=""
          onClick={() => {
            dispatch(addToPlayBar(album.album.id, album.id));
            console.log(album.album.id, album.id);
          }}
        />
      </div>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <h6 className="card-title">{album.album.title}</h6>
        <p className="card-text">{album.artist.name}</p>
        <p className="card-tex4t">{album.title}</p>
      </Card.Body>
    </Card>
  );
};
export default MusicCard;
