import React, { useContext,useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Comment from '../Holder/Comments/Comment'
import {Link} from 'react-router-dom'
const Completed = ({ postId, poetUser }) => {
  // console.log({ postId, poetUser });
  //currentUser
  const {user} = useContext(AuthContext);
  // const createNewCommet = () => [useEffect(() => {}, [

  // ])];
  return (
    <div>
      <p
        style={{
          color: "#A8A8A8",
          fontSize: "14",
          padding: "10px 30px",
          margin: "0"
        }}
      >
        You must{" "}
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            color: "#000",
          }}
        >
          Log in
        </Link>{" "}
        or
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            color: "#000",
          }}
        >
          sign up
        </Link>{" "}
        . to join the discussion.
      </p>
      <Comment currentUserId={user._id} postId={postId} />
    </div>
  );
};

export default Completed
