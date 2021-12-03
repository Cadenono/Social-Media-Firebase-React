import { useState } from "react";
import { Card } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./NewPost.css";
import { serverTimestamp } from "@firebase/firestore";
import { storage } from "../../firebase/config";
import { useHistory } from "react-router";
import {
  getStorage,
  ref,
  uploadString,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
//firebase imports
import { db } from "../../firebase/config";
import { collection, addDoc } from "@firebase/firestore";

export default function NewPost() {
  const [caption, setCaption] = useState("");
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);
  const [imgError, setImgError] = useState(null);
  const { user } = useAuthContext();
  // console.log(user);
  const history = useHistory();
  const handleFileChange = (e) => {
    setImage(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setImgError("Please select a file.");
      return;
    }

    if (!selected.type.includes("image")) {
      setImgError("Selected file must be an image.");
      return;
    }
    if (!selected.size > 100000) {
      setImgError("Image file size must be less than 100kb.");
      return;
    }

    setImgError(null);
    setImage(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let time = new Date().valueOf();
    console.log(image.name, post, caption);
    const file = `images/${user.uid}/${time}/${image.name}`;
    const storageRef = ref(storage, file);
    console.log(storageRef);
    // await uploadBytes(storageRef, file).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => console.log(url));
    // });
    await uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) =>
        addDoc(collection(db, "posts"), {
          uid: user.uid,
          caption: caption,
          post: post,
          timestamp: serverTimestamp(),
          displayName: user.displayName,
          imgURL: url,
          comments: [],
          likes: [],
        })
      );
    });
    setCaption("");
    setPost("");
    history.push("/home");
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "red" }}>
        <Card
          style={{
            background: "#C1E1C1",
            height: "75vh",
            border: "none",
            width: "50vw",
            opacity: 0.9,
            borderRadius: "20px",
            position: "absolute",
            left: "50%",
            right: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img src="https://firebasestorage.googleapis.com/v0/b/socialmediaapp-ed072.appspot.com/o/images%2FP40isQZ6b7djmb0Rbf7WpzWGQan1%2F1638357323617%2Flogin.png?alt=media&token=92c1ea11-1d08-40c7-abf2-d7639e4e6b3e" />
          <form style={{ padding: "2% 5% 10%" }}>
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
                onClick={handleSubmit}
              >
                Submit
              </button>
            </span>
            <label>Caption: </label>
            <input
              className="input-box"
              type="text"
              name="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxlength="80"
              style={{ height: "4vh", display: "block", marginBottom: "2%" }}
            />

            <label>
              Image:{" "}
              <span>
                {" "}
                {imgError && (
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.7rem",
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    {imgError}
                  </p>
                )}
              </span>
            </label>

            <input
              type="file"
              required
              style={{ height: "4vh", display: "block", marginBottom: "2%" }}
              onChange={handleFileChange}
            />

            <label>Post: </label>
            <input
              className="input-box"
              type="textarea"
              value={post}
              maxlength="200"
              onChange={(e) => setPost(e.target.value)}
              style={{ height: "20vh", display: "block" }}
              name="post"
            />
          </form>
        </Card>
      </div>
    </>
  );
}
