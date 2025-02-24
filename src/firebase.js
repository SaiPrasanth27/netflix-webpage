import { initializeApp } from "firebase/app";
import {
        createUserWithEmailAndPassword,
        getAuth,
        signInWithEmailAndPassword, 
        signOut} from "firebase/auth/web-extension";
import {
        addDoc, 
        collection,
        getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDIE3Xuyp_UoIrf_EGvrKkqdcuRN9VrjmA",
  authDomain: "netflix-clone-658f2.firebaseapp.com",
  projectId: "netflix-clone-658f2",
  storageBucket: "netflix-clone-658f2.firebasestorage.app",
  messagingSenderId: "458762502890",
  appId: "1:458762502890:web:2c1752c613fdffb6890d93"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,'user'),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error during sign out:", error);
      alert("Failed to sign out. Please try again.");
    }
  };
  
export {auth,db,login,signup,logout};