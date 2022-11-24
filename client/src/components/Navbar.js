import React, { useEffect, useState } from "react";
import "./style/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBell } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";
import ModalLogin from "./ModalLogin";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const types = useSelector((state) => state.product?.types);
  console.log(types);
  const [show, setShow] = useState(false);
  const isAuth = localStorage.getItem("token");

  return (
    <div className="navbar">
      <div className="combo">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/2560px-Etsy_logo.svg.png"
            alt=""
          />
        </div>

        <div className="searchP">
          <input
            type="text"
            placeholder="Vous cherchez quel projet..."
            className="search"
          />

          <i>
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </div>
      </div>
      <div className="right">
        {isAuth ? (
          <AiOutlineBell />
        ) : (
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Sign In
          </button>
        )}

        {isAuth ? (
          <div className="imb">
            <CgProfile />
            <BiDownArrow />
          </div>
        ) : (
          <div className="ima">
            <img
              src=" https://cdn-icons-png.flaticon.com/512/197/197560.png"
              alt=""
            />
          </div>
        )}

        <div className="imb">
          {" "}
          <MdOutlineFavoriteBorder />
        </div>
        <div className="imc">
          {" "}
          <BsCart4 />
        </div>
      </div>
      <div className="nav-links">
        {types?.map((type) => (
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              {type.ProdType}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ))}
      </div>
      {show && <ModalLogin setShow={setShow} show={show} />}
    </div>
  );
};

export default Navbar;
