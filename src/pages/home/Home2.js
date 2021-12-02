import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import loginImg from "../../images/login.png";
import { Modal } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Home() {
  const [show, setShow] = useState(false);
  const [likeState, setLikeState] = useState(false);
  function handleClick() {
    setLikeState((x) => !x);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDetails, setShowDetails] = useState(false);
  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = () => setShowDetails(true);

  const MoreDetails = () => {
    return (
      <Card
        style={{
          // width: "35rem",
          background: "transparent",
          margin: "20px",
          border: "none",
        }}
      >
        <Card.Body>
          <h2 style={{ display: "flex", textDecoration: "underline" }}>
            Title - Fabulous JO
          </h2>
          <Card.Img variant="top" src={loginImg} />
          <Card.Text>
            <div className="form-group">
              <div className="grid-container">Posted on 2021.10.28 by User</div>
            </div>
          </Card.Text>
          Caption: Went out for a stroll today and planted some money trees.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Caption: Went out for a stroll
          today and planted some money trees. Lorem Ipsum is simply dummy text
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Caption: Went out for a stroll today and planted some money
          trees. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Comments: Ipsum.
          Caption: Went out for a stroll today and planted some money trees.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <p>
            Comments: not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Comments: Ipsum.
            Caption: Went out for a stroll today and planted some money trees.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Card.Body>
      </Card>
    );
  };
  const AddCommentForm = () => {
    return (
      <form style={{ padding: "5%" }}>
        <span>
          <h1>New Comment </h1>{" "}
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

        <input
          type="textarea"
          style={{ height: "20vh", display: "block" }}
          name="comment"
          maxlength="100"
        />
      </form>
    );
  };

  return (
    <>
      <Navbar />
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
            <AddCommentForm />

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
            <MoreDetails />
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

        <Card
          style={{
            width: "35rem",
            background: "transparent",
            margin: "20px",
            borderRadius: "25px",
            border: "2px dotted",
            height: "30rem",
            overflow: "hidden",
          }}
        >
          <Card.Body>
            <h2 style={{ display: "flex", textDecoration: "underline" }}>
              Title - Fabulous JO{" "}
              <span style={{ fontSize: "1rem", marginLeft: "auto" }}>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  style={likeState ? { color: "red" } : {}}
                  className="icons fas fa-heart"
                  onClick={handleClick}
                >
                  LIKE
                </motion.i>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  className=" icons fas fa-comments"
                  onClick={handleShow}
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
                  onClick={setShowDetails}
                >
                  VIEW MORE
                </motion.i>
              </span>
            </h2>
            <Card.Img variant="top" src={loginImg} />
            <Card.Text>
              <div className="form-group">
                <div className="grid-container">
                  Posted on 2021.10.28 by User
                </div>
              </div>
            </Card.Text>
            Caption: Went out for a stroll today and planted some money trees.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Caption: Went out for a
            stroll today and planted some money trees. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Caption: Went out for a stroll today and
            planted some money trees. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "35rem",
            background: "transparent",
            margin: "20px",
            borderRadius: "25px",
            border: "2px dotted",
            height: "30rem",
            overflow: "hidden",
          }}
        >
          <Card.Body>
            <h2 style={{ display: "flex" }}>
              Title - Fabulous JO{" "}
              <span style={{ marginLeft: "auto" }}>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  style={likeState ? { color: "red" } : {}}
                  className="icons fas fa-heart"
                  onClick={handleClick}
                >
                  LIKE
                </motion.i>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  className=" icons fas fa-comments"
                  onClick={handleShow}
                >
                  COMMENT
                </motion.i>
              </span>
            </h2>
            <Card.Img variant="top" src={loginImg} />
            <Card.Text>
              <div className="form-group">
                <div className="grid-container">
                  Posted on 2021.10.28 by User
                </div>
              </div>
            </Card.Text>
            Caption: Went out for a stroll today and planted some money trees.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Caption: Went out for a
            stroll today and planted some money trees. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Caption: Went out for a stroll today and
            planted some money trees. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "35rem",
            background: "transparent",
            margin: "20px",
            borderRadius: "25px",
            border: "2px dotted",
            height: "30rem",
            overflow: "hidden",
          }}
        >
          <Card.Body>
            <h2 style={{ display: "flex" }}>
              Title - Fabulous JO{" "}
              <span style={{ marginLeft: "auto" }}>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  style={likeState ? { color: "red" } : {}}
                  className="icons fas fa-heart"
                  onClick={handleClick}
                >
                  LIKE
                </motion.i>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  className=" icons fas fa-comments"
                  onClick={handleShow}
                >
                  COMMENT
                </motion.i>
              </span>
            </h2>
            <Card.Img variant="top" src={loginImg} />
            <Card.Text>
              <div className="form-group">
                <div className="grid-container">
                  Posted on 2021.10.28 by User
                </div>
              </div>
            </Card.Text>
            Caption: Went out for a stroll today and planted some money trees.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Caption: Went out for a
            stroll today and planted some money trees. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Caption: Went out for a stroll today and
            planted some money trees. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "35rem",
            background: "transparent",
            margin: "20px",
            borderRadius: "25px",
            border: "2px dotted",
            height: "30rem",
            overflow: "hidden",
          }}
        >
          <Card.Body>
            <h2 style={{ display: "flex" }}>
              Title - Fabulous JO{" "}
              <span style={{ marginLeft: "auto" }}>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  style={likeState ? { color: "red" } : {}}
                  className="icons fas fa-heart"
                  onClick={handleClick}
                >
                  LIKE
                </motion.i>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  className=" icons fas fa-comments"
                  onClick={handleShow}
                >
                  COMMENT
                </motion.i>
              </span>
            </h2>
            <Card.Img variant="top" src={loginImg} />
            <Card.Text>
              <div className="form-group">
                <div className="grid-container">
                  Posted on 2021.10.28 by User
                </div>
              </div>
            </Card.Text>
            Caption: Went out for a stroll today and planted some money trees.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Caption: Went out for a
            stroll today and planted some money trees. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Caption: Went out for a stroll today and
            planted some money trees. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "35rem",
            background: "transparent",
            margin: "20px",
            borderRadius: "25px",
            border: "2px dotted",
            height: "30rem",
            overflow: "hidden",
          }}
        >
          <Card.Body>
            <h2 style={{ display: "flex" }}>
              Title - Fabulous JO{" "}
              <span style={{ marginLeft: "auto" }}>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  style={likeState ? { color: "red" } : {}}
                  className="icons fas fa-heart"
                  onClick={handleClick}
                >
                  LIKE
                </motion.i>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  className=" icons fas fa-comments"
                  onClick={handleShow}
                >
                  COMMENT
                </motion.i>
              </span>
            </h2>
            <Card.Img variant="top" src={loginImg} />
            <Card.Text>
              <div className="form-group">
                <div className="grid-container">
                  Posted on 2021.10.28 by User
                </div>
              </div>
            </Card.Text>
            Caption: Went out for a stroll today and planted some money trees.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Caption: Went out for a
            stroll today and planted some money trees. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Caption: Went out for a stroll today and
            planted some money trees. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "35rem",
            background: "transparent",
            margin: "20px",
            borderRadius: "25px",
            border: "2px dotted",
            height: "30rem",
            overflow: "hidden",
          }}
        >
          <Card.Body>
            <h2 style={{ display: "flex" }}>
              Title - Fabulous JO{" "}
              <span style={{ marginLeft: "auto" }}>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  style={likeState ? { color: "red" } : {}}
                  className="icons fas fa-heart"
                  onClick={handleClick}
                >
                  LIKE
                </motion.i>
                <motion.i
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.6,
                  }}
                  className=" icons fas fa-comments"
                  onClick={handleShow}
                >
                  COMMENT
                </motion.i>
              </span>
            </h2>
            <Card.Img variant="top" src={loginImg} />
            <Card.Text>
              <div className="form-group">
                <div className="grid-container">
                  Posted on 2021.10.28 by User
                </div>
              </div>
            </Card.Text>
            Caption: Went out for a stroll today and planted some money trees.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Caption: Went out for a
            stroll today and planted some money trees. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Caption: Went out for a stroll today and
            planted some money trees. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

{
  /* <div className="grid-item right">RIGHT</div>
   */
}
