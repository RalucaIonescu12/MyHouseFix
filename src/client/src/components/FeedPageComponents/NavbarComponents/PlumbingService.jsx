import React from "react";
import { Wrench } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";

const PlumbingService = ({ showLabel = true, onClick, disabled = false  }) => (
  <button className="nav-button" onClick={onClick} disabled={disabled}>
    <Wrench className="icon" />
    {showLabel && "Plumbing services"}
  </button>
);

export default PlumbingService;
