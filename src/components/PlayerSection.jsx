import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PlayerSection = () => {
  const song = useSelector((state) => state.playBar.playBar);
  const [track, setTrack] = useState({
    title: "",
    album: { title: "" },
    duration: null,
  });

  useEffect(() => {
    setTrack(song);
  }, [song]);

  return (
    <div className="bottom-container d-flex">
      <div className="playing d-flex">
        <div className="playing-image">
          <img src="./images/playing.png" alt="" />
        </div>
        <div className="playing-title">
          <div>{track.title}</div>
          <div>{track.album.title}</div>
        </div>
        <div>
          <img src="./icons/green-heart.svg" alt="" />
        </div>
      </div>

      <div className="player d-flex flex-column justify-content-center">
        <div className="player-icons d-flex align-items-center">
          <div>
            <img src="./icons/shurffle.svg" alt="" />
          </div>
          <div>
            <img src="./icons/prev.svg" alt="" />
          </div>
          <div>
            <img src="./icons/play.svg" alt="" />
          </div>
          <div>
            <img src="./icons/next.svg" alt="" />
          </div>
          <div>
            <img src="./icons/playall.svg" alt="" />
          </div>
        </div>
        <div className="player-bar d-flex">
          <span>1:45</span>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          {(track.duration - (track.duration %= 60)) / 60 +
            (9 < track.duration ? ":" : ":0") +
            track.duration}
        </div>
      </div>

      <div className="other-functions d-flex">
        <div className="player-icons d-flex align-items-center justify-content-a">
          <div>
            <img src="./icons/mic.svg" alt="" />
          </div>
          <div>
            <img src="./icons/playlist.svg" alt="" />
          </div>
          <div className="volume d-flex align-items-center">
            <img src="./icons/volume.svg" alt="" />
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSection;
