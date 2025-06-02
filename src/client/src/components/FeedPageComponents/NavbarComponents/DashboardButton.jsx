import React from "react";
import { Home } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const DashboardButton = ({ showLabel = true, onClick, selected=false }) => (
   <button className={`nav-button${selected ? ' selected' : ''}`} onClick={onClick}>
    <Home className="icon" />
    {showLabel && "All posts"}
  </button>
);


export default DashboardButton;