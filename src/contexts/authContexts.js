import { createContext, useContext, useEffects, useState } from "react";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

export const AuthContext  = createContext({
    currentUser: null,
    register: () => Promise,
})

export const useAuth = () => useContext(AuthContext);
