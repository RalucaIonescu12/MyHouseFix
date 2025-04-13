import React from "react";
import { Home } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const DashboardButton = ({ showLabel = true  }) => (
  <button className="nav-button">
    <Home className="icon" />
     {showLabel && "Dashboard"}
  </button>
);

export default DashboardButton;