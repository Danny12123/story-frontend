import React, { useContext, useEffect, useState } from "react";
import {
  getComments,
  createComment,
  deleteComment,
  updateComment,
} from "./Api";
import SingelComment from "./SingelComment";
import "../../Styles/comment.css";
import CommentForm from "./CommetnForm";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import {CommentAction} from '../../Redax/Action'

const Comment = ({ currentUserId, postId }) => {
  const [backComments, setBackComment] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backComments.filter(
    (backComments) => backComments.parentId === ""
  );
  // console.log(backComments);

   const dispatch = useDispatch();
  const getReplies = (commentId) => {
    return backComments
      .filter((backComments) => backComments.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  const {user} = useContext(AuthContext)

  const useaddComment = async (text, parentId="") => {
    if (text) {
      try {
         const res = await axios.post("/comment", {
           desc: text,
           parentId,
           postId: postId,
           userId: currentUserId,
           username: user.username,
           profilePicture: user.profilePicture,
         });
        console.log(res)
        // .then((comment))
        setBackComment([res.data, ...backComments]);
        } catch (err) {
        console.log(err);
      }
    }

  };
  const deleteComments = async (commentId) => {
    // if (window.confirm("Are you sure that you want to remove comment?")) {
    //   backComments.filter(
    //       (backComments) => {
    //         if(backComments._id !== currentUserId)
    //       }
    //     );
    //   try {
    //     await axios.delete(`/comment/${backComments._id}`);
    //   } catch (err) {
        
    //   }
      // deleteComment(commentId).then(() => {
      //   const updateBankendComment = backComments.filter(
      //     (backComments) => backComments._id !== commentId
      //   );
      //   setBackComment(updateBankendComment);
      // });
    
  };
  
  const updateComments = (text, commentId) => {
    // updateComment(text, commentId).then(() => {
      
    // });
    const updateBackendComments = backComments.map((backComments) => {
      if (backComments._id === commentId) {
        return { ...backComments, desc: text };
      }
      return backComments;
    });
    setBackComment(updateBackendComments);
    setActiveComment(null);
  };
  // const [comments, setComments] = useState([]);
  // console.log(comments)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comment//${postId}`);
        // setBackComment(res.data);
        // dispatch(
        //   CommentAction(
        //     res.data.sort((p1, p2) => {
        //       return new Date(p2.createdAt) - new Date(p1.createdAt);
        //     })
        //   )
        // );
        setBackComment(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, [postId]);


  return (
    <div className="comments">
      <div className="header_com">
      <div className="comment-form-title">Write Comment</div>
      <CommentForm submitLabel="Write" handleSubmit={useaddComment} />
      </div>
      <div className="comments-container">
        {rootComments.map((rootComments) => (
          <SingelComment
            key={rootComments._id}
            // channel={channel}
            comment={rootComments}
            replies={getReplies(rootComments._id)}
            currentUserId={currentUserId}
            deleteComments={deleteComments}
            updateComments={updateComments}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            useaddComment={useaddComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
