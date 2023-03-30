import React, { useState } from "react";

const CommentForm = ({
  submitLabel,
  handleSubmit,
  hasCancelButton = false,
  initialText = "",
  handelCancel,
}) => {
  const [text, setText] = useState(initialText);
  const isTextAreaDisable = text.length === 0;
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
    //  window.location.reload();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          // cols="30"
          // rows="10"
          className="comment-form-textarea"
          value={text}
          placeholder="Write a comment"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="comment-form-button" disabled={isTextAreaDisable}>
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button
            type="button"
            className="comment-form-buttom comment-form-cancel-button"
            onClick={handelCancel}
          >Cancel</button>
        )}
      </form>
    </div>
  );
};

export default CommentForm;
