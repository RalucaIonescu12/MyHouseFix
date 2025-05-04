import React from "react";
import { Lock } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const PermissionsButton = ({showLabel = true }) => (
  <button className="nav-button">
    <Lock className="icon" />
     {showLabel && "Permissions"}
  </button>
);

export default PermissionsButton;
