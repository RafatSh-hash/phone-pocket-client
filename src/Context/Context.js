import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
export const AuthContext = createContext();

const auth = getAuth(app);

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  //01.Create User With Email And Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //02.Creating Google User
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //03.Login with registered credentials
  const loginWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //04.User LogOUt Funtionality
  const logOut = () => {
    return signOut(auth);
  };

  //05.Update User Profile
  const updateUserProfile = (profile) => {
    console.log(profile);
    return updateProfile(auth.currentUser, profile);
  };

  //06.Check user if the user changes route
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  const authProvider = {
    createUser,
    googleLogin,
    loginWithEmailPass,
    logOut,
    updateUserProfile,
    loading,
    user,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  );
};

export default Context;
