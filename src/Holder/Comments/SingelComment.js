import React, {useState, useEffect} from "react";
import Comment from "./Comment";
import Image from "../../Img/44.jpeg";
import { deleteComment } from "./Api";
import CommentForm from "./CommetnForm";
import ProfilePic from "../../Img/profile.jpg"
import { format } from "timeago.js";
import { FaHeart } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import axios from "axios";
import { CommentCheck } from "../../Util/StoryIcon";
const SingelComment = ({
  comment,
  replies,
  currentUserId,
  deleteComments,
  activeComment,
  setActiveComment,
  useaddComment,
  updateComments,
  parentId = "",
}) => {
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const canDelete = currentUserId === comment.userId && !timePassed;
  // const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const [like, setLike] = useState(comment.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  //likes
  useEffect(() => {
    setIsLiked(comment.likes.includes(currentUserId));
  }, [currentUserId, comment.likes]);

  const handleLike = async () => {
    try {
      axios.put("/comment/acomment/" + comment._id + "/like", {
        userId: currentUserId,
      });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;

  const replyId = parentId ? parentId : comment.id;
  // console.log(activeComment);
  return (
    <div className="comment">
      <div className="comment-image-container">
        <img src={comment.profilePicture || ProfilePic} alt="image" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="comment-time">
              <h6>{comment.username}</h6>
            </div>
            <div className="comment-check">
              <CommentCheck />{" "}
            </div>
          </div>
          <div className="comment-time">{format(comment.createdAt)}</div>
        </div>
        <div className="comment-text">{comment.desc}</div>
        <div className="comment-actions">
          <div className="comment-action">
            <FaHeart
              onClick={handleLike}
              style={{
                color: "#FF00D6",
                marginRight: "5px",
              }}
            />
            <span style={{ color: "#181D34" }}>{like}</span>
          </div>
          {/* {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment._id, type: "replying" })
              }
            >
              <BsChat />
            </div>
          )} */}
        </div>
        {/* {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => useaddComment(text, replyId)}
          />
         )}  */}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <SingelComment
                comment={reply}
                key={reply._id}
                replies={[]}
                currentUserId={currentUserId}
                deleteComments={deleteComments}
                useaddComment={useaddComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                updateComments={updateComments}
                parentId={comment._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingelComment;
