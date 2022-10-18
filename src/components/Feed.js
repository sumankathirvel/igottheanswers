import React, { useEffect, useState } from "react";
import QuorBox from "./QuorBox";
import "./Feed.css";
import Post from "./Post";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [mytopic,setMytopic]=useState("questions")
  useEffect(() => {
    
    db.collection(mytopic)
   
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({ 
            id: doc.id,
            questions: doc.data(),
          }))
        )
      );
  }, [mytopic]);

  return (
    <div className="feed">
      <div className="chngesub">
      <button className="btndis" onClick={()=>{ setMytopic("questions")}} >General</button>
      <button  className="btndis" onClick={()=>{ setMytopic("cse")}} >CSE</button>
      <button  className="btndis" onClick={()=>{ setMytopic("ece")}} >ECE</button>
      <button  className="btndis" onClick={()=>{ setMytopic("eee")}} >EEE</button>
      <button  className="btndis" onClick={()=>{ setMytopic("mech")}} >Mech</button>
      <button  className="btndis" onClick={()=>{ setMytopic("aero")}} >Aero</button>
      <button  className="btndis" onClick={()=>{ setMytopic("auto")}} >Auto</button>
      <button  className="btndis" onClick={()=>{ setMytopic("it")}} >It</button>
      <button  className="btndis" onClick={()=>{ setMytopic("isc")}} >Isc</button>
      <button  className="btndis" onClick={()=>{ setMytopic("tex")}} >Tex</button>
      <button  className="btndis" onClick={()=>{ setMytopic("ft")}} >FT</button>
      </div>
      <QuorBox />
      {posts.map(({ id, questions }) => (
        <Post
          key={id}
          Id={id}
          question={questions.question}
          imageUrl={questions.imageUrl}
          timestamp={questions.timestamp}
          users={questions.user}
        />
      ))}
    </div>
  );
}

export default Feed;
