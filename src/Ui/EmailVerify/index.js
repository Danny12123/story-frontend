// import axios from "axios";
// import { Button } from "bootstrap";
// import React, {useState, useEffect} from "react";
// import { Link, useParams } from "react-router-dom";
// import "./style.css";

// const index = () => {
//   const [validUrl, setValidUrl] = useState(false);
//   const params = useParams();

//     useEffect(() => {
//         const verifyEmail = async () => {
//             try {
//                 const url = `/users/${params.id}/verify/${params.token}`;
//                 const {data} = await axios.get(url)
//                 console.log(data)
//                 setValidUrl(true)
//             } catch (err) {
//                 console.log(err);
//                 setValidUrl(false)
//             }
//         }
//         verifyEmail();
//     }, [params]);
//   return (
//     <div>
//       {validUrl ? (
//         <div className="verify_container">
//             {/* <img src="" alt="" /> */}
//             <h1>Email has been verified Successfully</h1>
//             <Link to="/signin">
//                 <button>Login</button>
//             </Link>
//         </div>
//       ) : (
//         <h4>404 Not Found</h4>
//       )}
//     </div>
//   );
// };

// export default index;
