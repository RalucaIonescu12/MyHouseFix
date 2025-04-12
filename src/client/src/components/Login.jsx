import React from "react";
import xdefault from "../images/Quick tips for saving money on home repairs_.jpeg";
import off from "../images/Quick tips for saving money on home repairs_.jpeg";
import icon from "../images/pngegg.png";
import rectangle11 from "../images/House Painting Mistakes Everyone Makes (and How to Avoid Them).jpeg";
import rectangle8 from "../images/13 Things Your Electrician Wants You to Know.jpeg";
import rectangle7 from "../images/Here’s Why You Should Close Your Bedroom Door at Night.jpeg";
import rectangle9 from "../images/Home Ownership 101_ 5 Repair Jobs You Should Leave to the Professionals – Follow The Yellow Brick Home.jpeg";
import rectangle6 from "../images/How to Become a Mechanic Apprentice.jpeg";
import rectangle10 from "../images/Quick tips for saving money on home repairs_.jpeg";
import rectangle12 from "../images/_Female Tailor Using Manual Sewing Machine__ by Stocksy Contributor _Alina Hvostikova_.jpeg";
import rectangle13 from "../images/Quick tips for saving money on home repairs_.jpeg";
import rectangle14 from "../images/ZWILLING Superfection Classic Schneiderschere, Stoffschere, Länge_ 21 cm, Rostfreier Spezialstahl_Kunststoff, Schwarz [Made in Germany].jpeg";
import "../styleLogin.css";
const Login = () => {
  return (
    <div className="archint-desktop">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="image" />

          <div className="rectangle" />

          <div className="frame">
            <div className="text-wrapper">Login</div>

            <div className="login-form">
              <div className="div">
                <div className="text-wrapper-2">Email</div>

                <div className="frame-2">
                  <div className="text-wrapper-3">robert.popescu@gmail.com</div>
                </div>
              </div>

              <div className="div">
                <div className="text-wrapper-2">Password</div>

                <div className="frame-2">
                  <div className="frame-3">
                    
                  </div>

                  <img className="eye-off" alt="Eye off" src={off} />
                </div>
              </div>

              <div className="extra">
                <div className="remember">
                  <img
                    className="check-box-default"
                    alt="Check box default"
                    src={xdefault}
                  />

                  <div className="text-wrapper-4">Remember me</div>
                </div>

                <div className="text-wrapper-5">Forgot password?</div>
              </div>

              <div className="frame-4">
                <button className="button-login">
                  <div className="text-wrapper-6">Login</div>
                </button>

                <button className="div-wrapper">
                  <div className="text-wrapper-7">Sign Up</div>
                </button>
              </div>
            </div>

            <div className="frame-5">
              <div className="text-wrapper-8">Or, login with</div>

              <div className="frame-6">
                <div className="frame-7">
                  <div className="text-wrapper-9">Facebook</div>
                </div>

                <div className="frame-7">
                  <div className="text-wrapper-9">Linked In</div>
                </div>

                <div className="frame-7">
                  <div className="text-wrapper-9">Google</div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-8">
            <img className="img" alt="Rectangle" src={icon} />

            <div className="text-wrapper-10">MyHouseFix</div>
          </div>

          <p className="p">A new way to save your house using virtual space.</p>

          
        </div>
      </div>
    </div>
  );
};
export default Login;