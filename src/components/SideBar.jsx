import { Navbar, Nav } from "react-bootstrap";

const SideBar = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        className="navbar navbar-dark flex-column align-content-start justify-content-start fixed-top"
        id="NavBar"
      >
        <Navbar.Brand href="#home">
          <img
            id="logo"
            className="ml-3 my-3"
            src="./icons/Logo/Green.svg"
            alt="The spotify Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto flex-column">
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected">
              <img
                src="./icons/Menu/Vector.svg"
                alt="Home symbol"
                className="ml-3"
              />
              <p className="my-0 mx-3">Home</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected">
              <img
                src="./icons/Menu/search.svg"
                alt="Search Lens symbol"
                className="ml-3"
              />
              <p className="my-0 mx-3">Search</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected">
              <img
                src="./icons/Menu/library.svg"
                alt="Library symbol"
                className="ml-3"
              />
              <p className="my-0 mx-3">Your Library</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected">
              <div className="navbar-icon-square ml-3 d-flex align-items-center justify-content-center">
                <img src="./icons/Menu/add.svg" alt="" />
              </div>
              <p className="my-0 mx-3">Create PlayList</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected mb-3">
              <div
                id="navbar-liked-songs"
                className="navbar-icon-square ml-3 d-flex align-items-center justify-content-center"
              >
                <img src="./icons/Menu/favorite.svg" alt="" />
              </div>
              <p className="my-0 mx-3">Liked Songs</p>
            </div>
            <div id="album-to-line"></div>
          </Nav.Link>
          <Nav.Link href="#link">
            <div className="album-favorites flex-column bg-test  ">
              <p className="navbar-song-list my-1 ml-3">Funky Heavy Bluesy</p>
              <p className="navbar-song-list my-1 ml-3">Your Top Songs 2020</p>
              <p className="navbar-song-list my-1 ml-3">
                In Love With You - Erykay...
              </p>
              <p className="navbar-song-list my-1 ml-3">This Is Rod Stewart</p>
              <p className="navbar-song-list my-1 ml-3">Funky Heavy Bluesy</p>
              <p className="navbar-song-list my-1 ml-3">Your Top Songs 2020</p>
              <p className="navbar-song-list my-1 ml-3">
                In Love With You - Erykay...
              </p>
              <p className="navbar-song-list my-1 ml-3">This Is Rod Stewart</p>
              <p className="navbar-song-list my-1 ml-3">Funky Heavy Bluesy</p>
              <p className="navbar-song-list my-1 ml-3">Your Top Songs 2020</p>
              <p className="navbar-song-list my-1 ml-3">
                In Love With You - Erykay...
              </p>
              <p className="navbar-song-list my-1 ml-3">This Is Rod Stewart</p>
              <p className="navbar-song-list my-1 ml-3">Funky Heavy Bluesy</p>
              <p className="navbar-song-list my-1 ml-3">Your Top Songs 2020</p>
              <p className="navbar-song-list my-1 ml-3">
                In Love With You - Erykay...
              </p>
              <p className="navbar-song-list my-1 ml-3">This Is Rod Stewart</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="install-container flex-column bg-test navbar-selected">
              <div className="d-flex align-items-center install">
                <img
                  src="./icons/Menu/download app.svg"
                  alt="Install symbol"
                  className="ml-3"
                />
                <p className="my-0 mx-3">Install App</p>
              </div>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar>
      <div className="sidebar-placeholder"></div>
    </div>
  );
};
export default SideBar;
