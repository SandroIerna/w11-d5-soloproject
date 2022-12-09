import { Col, Row } from "react-bootstrap";

const Greetings = () => {
  return (
    <div className="home-page-container-react">
      {" "}
      <h2>Good Morning</h2>
      <Row>
        <Col sm={6} md={4} lg={3} className="top ">
          <div className="top-cards d-flex">
            <div className="top-card-image-icon">
              <img src="./icons/heart.svg" alt="" />
            </div>
            <div className="top-card-title">
              <h5>Liked Songs</h5>
            </div>
          </div>
        </Col>
        <Col sm={6} md={4} lg={3} className="top ">
          <div className="top-cards d-flex">
            <div className="top-card-image">
              <img src="./icons/1.png" alt="" />
            </div>
            <div className="top-card-title">
              <h5>Neffex Playlist</h5>
            </div>
          </div>
        </Col>
        <Col sm={6} md={4} lg={3} className="top ">
          <div className="top-cards d-flex">
            <div className="top-card-image">
              <img src="./icons/2.png" alt="" />
            </div>
            <div className="top-card-title">
              <h5>K/ DA</h5>
            </div>
          </div>
        </Col>
        <Col sm={6} md={4} lg={3} className=" top ">
          <div className="top-cards d-flex">
            <div className="top-card-image">
              <img src="./icons/4.png" alt="" />
            </div>
            <div className="top-card-title">
              <h5>Dance / Electronic Mix</h5>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Greetings;
