import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Protected, { ProtectedRouteProps } from "./components/Protected";
import HomeScreen from "./pages/HomeScreen";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase_app";
import InitialScreen from "./pages/InitialScreen";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import UserModel from "./models/user_model";
import { updateUser, logOut, selectAuth } from "./features/authSlice";
import ProfileScreen from "./pages/ProfileScreen";
function App() {
  const dispatch = useAppDispatch();
  const [user, loading, error] = useAuthState(auth);
  const authState = useAppSelector(selectAuth);
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: authState.user !== null,
    authenticationPath: "/",
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user !== null) {
        const newUser: UserModel = {
          email: user.email,
          dipslayName: user.displayName,
          uid: user.uid,
        };
        dispatch(updateUser(newUser));
      } else {
        dispatch(logOut());
      }
      return unsubscribe;
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<InitialScreen />}></Route>
        <Route
          path="/home"
          element={
            <Protected
              {...defaultProtectedRouteProps}
              outlet={<HomeScreen />}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Protected
              {...defaultProtectedRouteProps}
              outlet={<ProfileScreen />}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
