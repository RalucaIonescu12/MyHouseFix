import React from "react";
import { Scissors } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const TailoringService = ({showLabel = true }) => (
  <button className="nav-button">
    <Scissors className="icon" />
     {showLabel && "Tailoring services"}
  </button>
);

export default TailoringService;
