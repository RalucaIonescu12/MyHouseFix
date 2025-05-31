import React from "react";
import { AlertCircle } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const CurrentIssues = ({ showLabel = true, onClick, disabled = false   }) => (
  <button className="nav-button" onClick={onClick} disabled={disabled}>
    <AlertCircle className="icon" />
    {showLabel && "Profile"}
  </button>
);

export default CurrentIssues;
