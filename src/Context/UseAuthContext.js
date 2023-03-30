// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"
// import { auth } from "../fireBase";

// const userAuthContext = createContext();

// export function UserAuthContextProvider({children}) {
//     const [user, setUser] = useState("");
//     const signUp = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password)
//     }
//     const signIn = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const logOut = () => {
//         return signOut(auth)
//     }
//     useEffect(()=>{
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//         });
//         return () => {
//             unsubscribe();
//         }
//     }, []);

//     return (
//       <userAuthContext.Provider value={{user, signUp, signIn, logOut }}>
//         {children}
//       </userAuthContext.Provider>
//     );
// }


// export function useUserAuth() {
//     return useContext(userAuthContext);
// }