import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, createRef } from "react";
import { Modal } from "react-bootstrap";
import { useLogout } from "../hooks/useLogout";

//firebase imports
import { db } from "../firebase/config";
import { collection, addDoc } from "@firebase/firestore";
export default function Navbar() {
  const list = [...Array(2).keys()];
  const inputRef = useRef([]);
  const handler = (idx) => (e) => {
    const next = inputRef.current[idx + 1];
    if (next) {
      next.focus();
    }
  };

  const [show, setShow] = useState(false);
  const [caption, setCaption] = useState("");
  const [post, setPost] = useState("");
  const { logout } = useLogout();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      caption,
      post,
    });

    setCaption("");
    setPost("");
  };
  const AddPostForm = () => {
    return (
      <form style={{ padding: "5%" }}>
        <span>
          <h1>New Post </h1>{" "}
          <button
            style={{
              margin: 0,
              position: "absolute",
              opacity: 1,
              zIndex: 10,
              cursor: "pointer",
              bottom: "50px",
              right: "50px",
            }}
            className="btn"
          >
            Submit
          </button>
        </span>
        <label>Caption: </label>
        <input
          ref={(el) => (inputRef.current["caption"] = el)}
          type="text"
          name="caption"
          onChange={(e) => setCaption(e.target.value)}
          maxlength="80"
          style={{ height: "4vh", display: "block", marginBottom: "2%" }}
        />
        <label>Post: </label>
        <input
          ref={(el) => (inputRef.current["post"] = el)}
          type="textarea"
          maxlength="200"
          onChange={(e) => setPost(e.target.value)}
          style={{ height: "20vh", display: "block" }}
          name="comment"
        />
      </form>
    );
  };

  return (
    <div className="navbar">
      <Modal
        autoFocus={false}
        className="modal"
        style={{
          background: "#C1E1C1",
          height: "65vh",
          border: "none",
          width: "50vw",
          opacity: 0.9,
          borderRadius: "20px",
          position: "absolute",
          left: "50%",
          right: "50%",
          top: "40%",
          transform: "translate(-50%, -50%)",
          justifyContent: "center",
          display: "flex",
          // overflowY: "auto",
        }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          <AddPostForm />

          {/* <LoginForm onSubmit={onLoginFormSubmit} /> */}
        </Modal.Body>

        <i
          style={{
            margin: 0,
            position: "absolute",
            opacity: 1,
            zIndex: 10,
            cursor: "pointer",
            top: "20px",
            right: "20px",
          }}
          onClick={handleClose}
          className="far fa-window-close fa-2x"
        ></i>
      </Modal>

      <ul>
        <li
          className="new-post-li"
          style={{ cursor: "grab" }}
          onClick={handleShow}
        >
          New Post
        </li>
        <li>
          <Link to="/home">Feed</Link>
        </li>

        <li
          className="new-post-li"
          style={{ cursor: "grab" }}
          onClick={handleShow}
          onClick={logout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
