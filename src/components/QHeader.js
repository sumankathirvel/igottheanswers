import React, { useState } from "react";

import Modal from "react-modal";

import "./QHeader.css";
import { Avatar, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import { Link } from "@material-ui/icons";
import firebase from "firebase";

Modal.setAppElement("#root");

function QHeader() {
  const user = useSelector(selectUser);

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;
 const [topic,setTopic]=useState("questions")
  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection(topic).add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    setInputUrl("");
  };

  return (
    <div className="qHeader">
      <h1>Welcome To I Got The Answer...........</h1>
      
     
       
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <h7>Logout</h7>
          <Avatar
            onClick={() => auth.signOut()}
            className="Avatar"
            src={
              user.photo
                ? user.photo
                : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
            }
          />
        </div>
        
        <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
        <div id="but">
        <a href="https://chatglobal19236192.000webhostapp.com/"><button className="btnchat" onClick="dosomething">Chat Global</button></a>
        </div>
        <div id="butn">
          <a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><button className="btnmessage">Message</button></a>
        </div>
         <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
          
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
            <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
           
          </div>
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Ask Your Question Here.............. "
            />
            <div className="modal__fieldLink">
              <Link />
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder=" click to give the image url here......"
              ></input>
               
            </div>
            <h4>click the departments to upload the question in specific fields..........</h4>
            <div id="divup">
              <button onClick={()=>{setTopic("questions")}}>
         general
       </button>
       <button onClick={()=>{setTopic("cse")}}>
         cse
       </button>
       <button onClick={()=>{setTopic("ece")}}>
         ece
       </button>
       <button onClick={()=>{setTopic("eee")}}>
         eee
       </button>
       <button onClick={()=>{setTopic("mech")}}>
         mech
       </button>
       <button onClick={()=>{setTopic("auto")}}>
         auto
       </button>
       <button onClick={()=>{setTopic("aero")}}>
         aero
       </button>
       <button onClick={()=>{setTopic("it")}}>
         It
       </button>
       <button onClick={()=>{setTopic("tex")}}>
         Textile
       </button>
       <button onClick={()=>{setTopic("isc")}}>
         Isc
       </button>
       <button onClick={()=>{setTopic("ft")}}>
         FT
       </button>
         </div>

          </div>
          <div className="upid">
         <a href="https://uplimggeurl.000webhostapp.com/"><button>upload from device</button></a>
         </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default QHeader;
