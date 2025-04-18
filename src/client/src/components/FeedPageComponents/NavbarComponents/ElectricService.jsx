import React from "react";
import { Zap } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const ElectricService = ({ showLabel = true  }) => (
  <button className="nav-button">
    <Zap className="icon" />
     {showLabel && "Electric service"}
  </button>
);

export default ElectricService;
