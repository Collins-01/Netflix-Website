import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthService } from "../services/auth_service";
import "./styles/AuthScreen.css";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
  name: string;
};

function AuthScreen() {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const handleSignIn = () => {
    handleSubmit(async (data) => {
      console.log("SignIn method called");
      console.log(data.email, data.password);
    });
  };
  const handleRegister = () => {};
  const toggleAuthScreen = () => {
    setSignIn(!signIn);
  };
  return (
    <div className="authScreen">
      <form
        onSubmit={handleSubmit(async (data) => {
          if (signIn) {
            setLoading(true);
            await AuthService.emailLogin(data.email, data.password)
              .then((user) => {
                console.log(user);
                setLoading(false);
                navigate("/home", {
                  replace: true,
                });
              })
              .catch((e) => {
                setLoading(false);
                console.log(e);
                alert(e);
              });
          } else {
            setLoading(true);
            await AuthService.emailSignUp(data.email, data.password)
              .then(async (userCredentials) => {
                console.log(userCredentials.user);
                await AuthService.updateProfile(userCredentials.user, data.name)
                  .then((profile) => {
                    setLoading(false);
                    navigate("/home", {
                      replace: true,
                    });
                  })
                  .catch((error) => {
                    setLoading(false);
                    alert(error);
                  });
              })
              .catch((e) => {
                setLoading(false);
                console.log(e);
                alert(e);
              });
          }
        })}
      >
        <h1>{signIn ? "Sign In" : "Register"}</h1>
        {!signIn && (
          <input
            {...register("name", { required: "A valid name is required." })}
            type="text"
            placeholder="Name"
            id="name"
            name="name"
          />
        )}
        <input
          {...register("email", { required: "email is required" })}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
        <input
          {...register("password", {
            required: "password is required",
          })}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />

        {loading ? (
          <CircularProgress
            style={{
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "10px",
            }}
          />
        ) : (
          <button
            type="submit"
            onClick={signIn ? handleSignIn : handleRegister}
          >
            {" "}
            {signIn ? "Sign In" : "Register"}
          </button>
        )}

        <h4>
          <span className="authScreen__gray">
            {signIn ? "New to Netflix?" : "Already have an account?"}
          </span>
          <span className="authScreen__link" onClick={toggleAuthScreen}>
            {" "}
            {signIn ? "Sign Up now." : "Login."}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default AuthScreen;
