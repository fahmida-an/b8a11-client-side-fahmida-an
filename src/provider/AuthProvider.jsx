import {  createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from "../firebase/firebase.config";
import PropTypes from "prop-types"
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUserAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateProfile = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        })
    }

    const createAccountwithGoogle =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    
      }

    const logOut = ()=> {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('user', currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    })



    const authInfo = {
        user,
        loading,
        createUserAccount,
        createAccountwithGoogle,
        handleUpdateProfile,
        logInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children:PropTypes.node
}