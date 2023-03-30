import React from 'react'

const PostDesc = ({ channel }) => {
  return (
    <div style={{ padding: "20px", color: "#818181" }}>
      <h6 style={{ color: "#A8A8A8", margin: "10px 20px" }}>Short summary</h6>
      <p>{channel.desc}</p>
    </div>
  );
};

export default PostDesc
