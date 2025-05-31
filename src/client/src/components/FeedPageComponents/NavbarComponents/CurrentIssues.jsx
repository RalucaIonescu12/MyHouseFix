import React from "react";
import { AlertCircle } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const CurrentIssues = ({ showLabel = true, onClick  }) => (
  <button className="nav-button" onClick={onClick}>
    <AlertCircle className="icon" />
    {showLabel && "Profile"}
  </button>
);

export default CurrentIssues;
