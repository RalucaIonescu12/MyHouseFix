import React from "react";
import { LogOut } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const SignOut = ({ showLabel = true  }) => (
  <button className="nav-button text-red-500">
    <LogOut className="icon" />
      {showLabel && "Sign out"}
  </button>
);

export default SignOut;
