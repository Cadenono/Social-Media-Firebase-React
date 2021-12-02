import { useState, useRef, useEffect } from "react";
import { Card } from "react-bootstrap";
import { db } from "../firebase/config";
import {
  doc,
  deleteDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Modal } from "react-bootstrap";
import loginImg from "../images/login.png";
import { motion } from "framer-motion";
import { useAuthContext } from "../hooks/useAuthContext";
import ModalComponent from "./ModalComponent";
import CommentModal from "./CommentModal";

export default function Post({ posts }) {
  const { user } = useAuthContext();
  const innerRef = useRef();
  useEffect(() => innerRef.current && innerRef.current.focus());
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);
  const [likeState, setLikeState] = useState(false);
  const [postDetails, setPostDetails] = useState("");
  const [postDetails2, setPostDetails2] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (post) => {
    setShow(true);
    setPostDetails2(post);

    // console.log(post.id);
  };

  const handlePostDetailsForComments = (post) => {
    handleShow(post);
  };

  // const handleCommentSubmit = (e) => {
  //   e.preventDefault();
  //   const timeNow = serverTimestamp();
  //   const commentToAdd = {
  //     displayName: user.displayName,
  //     content: comment,
  //     createdAt: timeNow,
  //     id: Math.random(),
  //   };

  //   console.log(commentToAdd);
  //   setComment("");
  // };
  const [showDetails, setShowDetails] = useState(false);
  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = (post) => {
    setShowDetails(true);
    setPostDetails(post);
    // console.log(post);
  };
  const handleViewMoreDetails = (post) => {
    handleShowDetails(post);
  };
  // const AddCommentForm = () => {
  //   return (
  //     <form style={{ padding: "5%" }}>
  //       <span>
  //         <h1>New Comment </h1>{" "}
  //         <button
  //           style={{
  //             margin: 0,
  //             position: "absolute",
  //             opacity: 1,
  //             zIndex: 10,
  //             cursor: "pointer",
  //             bottom: "50px",
  //             right: "50px",
  //           }}
  //           className="btn"
  //           onClick={handleCommentSubmit}
  //         >
  //           Submit
  //         </button>
  //       </span>

  //       <input
  //         type="textarea"
  //         ref={innerRef}
  //         onChange={(e) => setComment(e.target.value)}
  //         value={comment}
  //         style={{ height: "20vh", display: "block" }}
  //         name="comment"
  //         maxlength="100"
  //       />
  //     </form>
  //   );
  // };

  const handleClick = async (post) => {
    console.log(post.id);
    await setDoc(doc(db, "posts", post.id), {
      uid: post.uid,
      caption: post.caption,
      displayName: post.displayName,
      imgURL: post.imgURL,
      timestamp: post.timestamp,
      post: post.post,
      likeStatus: true,
    });
  };

  const handleDelete = async (id) => {
    const ref = doc(db, "posts", id);
    await deleteDoc(ref);
  };

  return (
    <div className="home-grid-container">
      <Modal
        className="modal"
        style={{
          background: "#C1E1C1",
          height: "50vh",
          border: "none",
          width: "50vw",
          opacity: 0.9,
          borderRadius: "20px",
          position: "absolute",
          left: "50%",
          right: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          justifyContent: "center",
          display: "flex",
        }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          {/* <AddCommentForm autoFocus /> */}
          <CommentModal postDetails2={postDetails2} handleClose={handleClose} />
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

      {/*For details*/}

      <Modal
        className="modal"
        style={{
          background: "#C1E1C1",
          height: "50vh",
          border: "none",
          width: "50vw",
          opacity: 0.9,
          borderRadius: "20px",
          position: "absolute",
          left: "50%",
          right: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          justifyContent: "center",
          display: "flex",
          overflowY: "auto",
        }}
        show={showDetails}
        onHide={handleCloseDetails}
      >
        <Modal.Body>
          <ModalComponent postDetails={postDetails} />
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
          onClick={handleCloseDetails}
          className="far fa-window-close fa-2x"
        ></i>
      </Modal>

      {posts &&
        posts.map((post) => (
          <Card
            style={{
              width: "35rem",
              background: "transparent",
              margin: "20px",
              borderRadius: "25px",
              border: "2px dotted",
              height: "20rem",
              overflow: "hidden",
            }}
          >
            <Card.Body>
              <h4 style={{ display: "flex", textDecoration: "underline" }}>
                {post.caption}
                <span style={{ fontSize: "1rem", marginLeft: "auto" }}>
                  <motion.i
                    whileHover={{
                      scale: 1.1,
                      opacity: 0.6,
                    }}
                    style={post.likeStatus ? { color: "red" } : {}}
                    className="icons fas fa-heart"
                    onClick={() => handleClick(post)}
                  >
                    LIKE
                  </motion.i>
                  <motion.i
                    whileHover={{
                      scale: 1.1,
                      opacity: 0.6,
                    }}
                    className=" icons fas fa-comments"
                    onClick={() => {
                      handlePostDetailsForComments(post);
                    }}
                  >
                    COMMENT
                  </motion.i>
                  <motion.i
                    whileHover={{
                      scale: 1.1,
                      opacity: 0.6,
                    }}
                    i
                    class="icons fas fa-plus-square"
                    onClick={() => {
                      handleViewMoreDetails(post);
                    }}
                  >
                    VIEW MORE
                  </motion.i>
                  {user.uid === post.uid && (
                    <motion.i
                      style={{ color: "red" }}
                      whileHover={{
                        scale: 1.1,
                        opacity: 0.6,
                      }}
                      i
                      class="icons fas fa-trash-alt"
                      onClick={() => handleDelete(post.id)}
                    ></motion.i>
                  )}
                </span>
              </h4>
              <Card.Text>
                <div className="form-group">
                  <Card.Img variant="top" src={loginImg} />
                  <div className="grid-container">
                    Posted on{" "}
                    {post &&
                      post.timestamp &&
                      post.timestamp.toDate() &&
                      post.timestamp.toDate().toDateString()}{" "}
                    by {post.displayName}
                  </div>
                </div>
              </Card.Text>
              Post: {post.post}
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}
