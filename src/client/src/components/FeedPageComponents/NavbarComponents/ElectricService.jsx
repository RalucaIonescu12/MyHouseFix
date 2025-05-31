import React from "react";
import { Zap } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";

const ElectricService = ({ showLabel = true, onClick, disabled = false  }) => (
  <button className="nav-button" onClick={onClick} disabled={disabled}>
    <Zap className="icon" />
    {showLabel && "Electrician services"}
  </button>
);

export default ElectricService;
