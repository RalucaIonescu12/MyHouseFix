import React from "react";
import { Scissors } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";

const TailoringService = ({ showLabel = true, onClick }) => (
  <button className="nav-button" onClick={onClick}>
    <Scissors className="icon" />
    {showLabel && "Tailoring services"}
  </button>
);

export default TailoringService;
