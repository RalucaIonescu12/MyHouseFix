import React from "react";
import { Home } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const DashboardButton = ({ showLabel = true, onClick , disabled = false }) => (
  <button className="nav-button" onClick={onClick} disabled={disabled}>
    <Home className="icon" />
    {showLabel && "All posts"}
  </button>
);


export default DashboardButton;