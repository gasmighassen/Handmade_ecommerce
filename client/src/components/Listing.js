import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Accordion from "react-bootstrap/Accordion";
import "./style/listing.css";
import Carousel from "./Carousel";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { addComment } from "../redux/slices/commentSlice";
const Listing = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  console.log(comment);
  return (
    <div>
      <Navbar />
      <div className="aregato">
        <div className="yamate">
          <Carousel />
          <div
            style={{
              display: "flex",
              margin: "5% 0 2% 5%",
              gap: "5%",
              alignItems: "center",
            }}
          >
            <h1>89 shop reviews</h1>
            <ReactStars count={5} size={24} activeColor="#ffd700" />
          </div>
          <div className="comment">
            <ReactStars count={5} size={24} activeColor="#ffd700" />

            <input
              type="text"
              className="formTextItem"
              placeholder="text"
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              style={{
                backgroundColor: "black",
                width: "20%",
                borderRadius: "30px",
                color: "white",
                marginLeft: "3%",
              }}
              onClick={() => {
                dispatch(addComment(comment));
              }}
            >
              Comment
            </button>
            <h6>Purchased item:adzapjdazodazd</h6>
          </div>
        </div>
        <div className="details-list">
          <h5>RidgelineCeramics</h5>
          <p>
            Made to Order Cotton Candy Mug | Handmade Mugs | Handmade Pottery |
            Handmade Ceramic Mug | Handmade Coffee Mug Tea Cup | Pottery Gift
          </p>
          <h1>€46.39</h1>
          <button
            style={{
              borderRadius: "30px",
              backgroundColor: "transparent",
              padding: "6px",
            }}
          >
            Buy it now | Only 7 available
          </button>
          <button
            style={{
              borderRadius: "30px",
              backgroundColor: "black",
              color: "white",
              padding: "6px",
            }}
          >
            Add to cart
          </button>

          <button className="add">Add to collection</button>

          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Listing;
