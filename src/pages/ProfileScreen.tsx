import React from "react";
import "./styles/ProfileScreen.css";
import { useSelector } from "react-redux";
import { logOut, selectAuth } from "../features/authSlice";
import Nav from "../components/Nav";
import { useAppDispatch } from "../app/hooks";
function ProfileScreen() {
  const authState = useSelector(selectAuth);
  const dispatch = useAppDispatch();
  const handleLogOut = async () => {
    dispatch(logOut());
  };
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            className="profileScreen__avatar"
            alt=""
            src="https://imgs.search.brave.com/8oloCEWFSxaYXkovXgKpvCWtbu7BCFKsLgTppzjsmr8/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvcG5nLXNtaWxp/bmctZmFjZS1zbWls/ZXktcG5nLTM4OTYu/cG5n"
          />
          <div className="profileScreen__details">
            <h2>{authState.user?.email}</h2>
            <div className="profileScreen__plans ">
              <h3>Plans </h3>
              <p className="profileScreen__renewalDate">
                Renewal Data : 04/03/2021
              </p>
              {/* 1 */}
              <div className="profileScreen__subscribtions">
                <div className="profileScreen__subscribtionInfo">
                  <div className="profileScreen__subscribtioTitles">
                    <h5>Netflix Standard</h5>
                    <h6>1080p</h6>
                  </div>
                  <button>Subscribe</button>
                </div>

                {/* 2 */}
                <div className="profileScreen__subscribtionInfo">
                  <div className="profileScreen__subscribtioTitles">
                    <h5>Netflix Basic</h5>
                    <h6>480p</h6>
                  </div>
                  <button>Subscribe</button>
                </div>
              </div>
              <button className="profileScreen__signOut" onClick={handleLogOut}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
