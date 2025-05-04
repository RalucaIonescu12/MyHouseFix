import React from "react";
import { AlertCircle } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const CurrentIssues = ({ showLabel = true  }) => (
  <button className="nav-button">
    <AlertCircle className="icon" />
    {showLabel && "Current issues"}
  </button>
);

export default CurrentIssues;
