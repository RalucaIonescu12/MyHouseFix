import React from "react";
import { Home } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const DashboardButton = ({ showLabel = true, onClick }) => (
  <button className="nav-button" onClick={onClick}>
    <Home className="icon" />
    {showLabel && "All posts"}
  </button>
);


export default DashboardButton;