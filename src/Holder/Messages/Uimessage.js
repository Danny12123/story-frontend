// import React, {useState} from 'react';
// import { SendMessage } from '../../Util/StoryIcon';
// import Message from './Message';


// const Uimessage = () => {
//   // const [message, setMessage] = useState("");
//   const [currentChat, setCurrentChat] = useState(null);
//   const [message, setMessage] = useState([]);
  
//   const messageHandler = (e) => {
//     e.preventDefault();
//     setMessage("");
//   };
//   return (
//     <div>
//       <div>
//         {currentChat ? (
//           <Message  />
//         ) : (
//           <span>Open a conversation to start a chat.</span>
//         )}
//       </div>
//       <div className="inbox_inputs">
//         <input
//           type="text"
//           placeholder="Type Message"
//           onChange={(e) => setMessage(e.target.value)}
//           id="inbox_text"
//         />
//         <div className="sendMessage" onClick={messageHandler}>
//           <SendMessage />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Uimessage
