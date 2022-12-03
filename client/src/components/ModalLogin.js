import React, { useState } from "react";
import "./style/modal.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../redux/slices/userSlice";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

function ModalLogin({ show, setShow }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const [register, setRegister] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [showlog, setshowlog] = useState(true);
  const [showreg, setshowReg] = useState(false);

  const handleClosee = () => {
    setshowReg(!showreg);
    setshowlog(false);
  };

  return (
    <div className="modal-container">
      <Modal closeButton className="modalx" show={show} onHide={handleClose}>
        <Modal.Header style={{ width: "100%" }}>
          <Modal.Title className="header-modal">
            <h1>Sign In</h1>
            {showlog && (
              <button onClick={handleClosee} className="loginBtn">
                Register
              </button>
            )}
          </Modal.Title>
        </Modal.Header>
        {showlog && (
          <Modal.Body>
            <div className="formInputs">
              <p>Email:</p>
              <input
                type="text"
                className="formTextItem"
                placeholder="email@exmaple.com"
                onChange={(e) => setlogin({ ...login, email: e.target.value })}
              />
              <p>Mot de passe:</p>
              <input
                type="password"
                className="formTextItem"
                placeholder="**************"
                onChange={(e) =>
                  setlogin({ ...login, password: e.target.value })
                }
              />
              <p>Mot de passe oublié ?</p>
            </div>
            <button
              className="loginBtnn"
              onClick={() => {
                dispatch(userLogin(login));
                handleClose();
              }}
            >
              Connecter
            </button>
            <div>
              <span
                style={{
                  width: "98%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "2%",
                }}
              >
                OR
              </span>{" "}
              <Dropdown.Divider />
              <button
                style={{
                  borderRadius: "20px",
                  backgroundColor: "transparent",
                  padding: "2%",
                  width: "100%",
                  margin: "3% 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "5%",
                  justifyContent: "center",
                }}
              >
                {" "}
                <FcGoogle />
                Continue with Google
              </button>
            </div>

            <button
              style={{
                borderRadius: "20px",
                backgroundColor: "transparent",
                padding: "2%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "4%",
                justifyContent: "center",
              }}
            >
              <AiFillFacebook />
              Continue with Facebook
            </button>
            <button
              style={{
                borderRadius: "20px",
                backgroundColor: "transparent",
                padding: "2%",
                width: "100%",
                margin: "3% 0",
                display: "flex",
                alignItems: "center",
                gap: "4%",
                justifyContent: "center",
              }}
            >
              <AiFillApple />
              Continue with Apple
            </button>
            <p style={{ fontSize: "13px", marginTop: "5%" }}>
              By clicking Sign in or Continue with Google, Facebook, or Apple,
              you agree to Etsy's Terms of Use and Privacy Policy. Etsy may send
              you communications; you may change your preferences in your
              account settings. We'll never post without your permission.
            </p>
          </Modal.Body>
        )}
        {showreg && (
          <Modal.Body>
            <div className="formInputs">
              <p>Email:</p>
              <input
                type="text"
                className="formTextItem"
                placeholder="email@exmaple.com"
                onChange={(e) =>
                  setRegister({ ...register, email: e.target.value })
                }
              />

              <p>Confirm Name :</p>
              <input
                type="text"
                className="formTextItem"
                placeholder="confirm name"
                onChange={(e) =>
                  setRegister({ ...register, name: e.target.value })
                }
              />

              <p>Mot de passe:</p>
              <input
                type="password"
                className="formTextItem"
                placeholder="**************"
                onChange={(e) =>
                  setRegister({ ...register, password: e.target.value })
                }
              />
              <p>Mot de passe oublié ?</p>
            </div>

            <button
              className="loginBtnn"
              onClick={() => {
                dispatch(userRegister(register));

                setTimeout(() => {
                  navigate("/");
                }, 1000);
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }}
            >
              Connecter
            </button>
            <div>
              <span
                style={{
                  width: "98%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "2%",
                }}
              >
                OR
              </span>{" "}
              <Dropdown.Divider />
              <button
                style={{
                  borderRadius: "20px",
                  backgroundColor: "transparent",
                  padding: "2%",
                  width: "100%",
                  margin: "3% 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "5%",
                  justifyContent: "center",
                }}
              >
                {" "}
                <FcGoogle />
                Continue with Google
              </button>
            </div>

            <button
              style={{
                borderRadius: "20px",
                backgroundColor: "transparent",
                padding: "2%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "4%",
                justifyContent: "center",
              }}
            >
              <AiFillFacebook />
              Continue with Facebook
            </button>
            <button
              style={{
                borderRadius: "20px",
                backgroundColor: "transparent",
                padding: "2%",
                width: "100%",
                margin: "3% 0",
                display: "flex",
                alignItems: "center",
                gap: "4%",
                justifyContent: "center",
              }}
            >
              <AiFillApple />
              Continue with Apple
            </button>
            <p style={{ fontSize: "13px", marginTop: "5%" }}>
              By clicking Sign in or Continue with Google, Facebook, or Apple,
              you agree to Etsy's Terms of Use and Privacy Policy. Etsy may send
              you communications; you may change your preferences in your
              account settings. We'll never post without your permission.
            </p>
          </Modal.Body>
        )}
      </Modal>
    </div>
  );
}

export default ModalLogin;
