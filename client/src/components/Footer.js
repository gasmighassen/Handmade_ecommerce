import React from "react";
import "./style/footer.css";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineYoutube,
} from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { ImPinterest2 } from "react-icons/im";

const footer = () => {
  return (
    <div className="footer-container">
      <h1>What is Etsy?</h1>
      <button
        style={{
          background: "transparent",
          border: "none",
          textDecoration: " underline black",
          textUnderlineOffset: "2px",
        }}
      >
        Read our wonderfully weird story
      </button>
      <div className="footer-body">
        <div className="body-a">
          <h1>A community doing good</h1>
          <p>
            Etsy is a global online marketplace, where people come together to
            make, sell, buy, and collect unique items. We’re also a community
            pushing for positive change for small businesses, people, and the
            planet. Here are some of the ways we’re making a positive impact,
            together.
          </p>
        </div>
        <div className="body-a">
          <h1>Support independent creators</h1>
          <p>
            There’s no Etsy warehouse – just millions of people selling the
            things they love. We make the whole process easy, helping you
            connect directly with makers to find something extraordinary.
          </p>
        </div>
        <div className="body-b">
          <h1>Peace of mind</h1>
          <p>
            Your privacy is the highest priority of our dedicated team. And if
            you ever need assistance, we are always ready to step in for
            support.
          </p>
        </div>
      </div>
      <div className="ffffff">
        <h2>Have a question? Well, we’ve got some answers.</h2>
        <button
          style={{
            background: "transparent",
            border: "2px solid black",
            borderRadius: "30px",
            padding: "0.5%",
            width: "12%",
            marginTop: "1%",
          }}
        >
          Go to Help Center
        </button>
        <div style={{ width: "100%", height: "100%" }}>
          <div className="under-footer">
            <h4>
              Yes! Send me exclusive offers, unique gift ideas, and personalized
              tips for shopping and selling on Etsy.
            </h4>
            <form className="subscription">
              <input
                className="add-email"
                type="email"
                placeholder="subscribe@me.now"
              ></input>
              <button className="submit-email" type="button">
                <span className="before-submit">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="under-footer-body">
        <div className="mini-footer">
          <h3>Shop</h3>
          <button>Gift cards</button>
          <button>Sitemap</button>
          <button>Etsy blog</button>
          <button>Etsy United Kingdom</button>
          <button>Etsy Germany</button>
          <button>Etsy Canada</button>
        </div>
        <div className="mini-footer">
          {" "}
          <h3>Sell</h3>
          <button>Sell on Etsy</button>
          <button>Teams</button>
          <button>Forums</button>
          <button>Affiliates</button>
        </div>
        <div className="mini-footer">
          {" "}
          <h3>About</h3>
          <button>Etsy, Inc.</button>
          <button>Policies</button>
          <button>Investors</button>
          <button>Careers</button>
          <button>Press</button>
          <button>Impact</button>
          <button>Legal imprint</button>
        </div>
        <div className="mini-footer">
          <h3>Help</h3>
          <button>Help Center</button>
          <button>Privacy settings</button>
          <button style={{ border: "3px solid white", borderRadius: "20px" }}>
            {" "}
            Download the Etsy App
          </button>
          <div className="mini-right-footer">
            <AiFillFacebook />
            <GrInstagram />
            <ImPinterest2 />
            <AiFillTwitterCircle />
            <AiOutlineYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
