import { useState } from "react";
import { Nav, Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToSearchArtist } from "../redux/actions";

const TopNavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch;

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToSearchArtist(searchValue));
  };

  return (
    <Nav
      id="react-top-navbar"
      className="navbar navbar-expand-lg navbar-light flex-grow-1"
    >
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarTogglerDemo02"
      >
        <div className="d-flex">
          <ul className="navbar-nav back-forward-icon mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link back-icon" href="#">
                <img src="./icons/back.svg" alt="" />
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link forward-icon" href="#">
                <img src="./icons/forward gray.svg" alt="" />
              </a>
            </li>
          </ul>
          <Form
            className="form-inline my-2 my-lg-0 hide"
            onSubmit={handleSubmit}
          >
            <FormControl
              id="search-form"
              type="text"
              placeholder="Search"
              className="ml-2"
              onChange={handleChange}
            />
          </Form>
        </div>
        <div id="profile-avatar" className="form-inline my-2 my-lg-0">
          <div id="profile-image">
            <img src="./icons/profile.png" alt="" />
          </div>
          <div id="profile-name">Angel</div>
          <div id="profile-icon">
            <img src="./icons/drop-down.svg" alt="" />
          </div>
        </div>
      </div>
    </Nav>
  );
};
export default TopNavBar;
