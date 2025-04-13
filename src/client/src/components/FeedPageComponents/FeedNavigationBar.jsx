// ✅ CLEANED & RESPONSIVE SIDEBAR NAV
import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

import DashboardButton from "./NavbarComponents/DashboardButton";
import MapButton from "./NavbarComponents/Map";
import CarService from "./NavbarComponents/CarService";
import TailoringService from "./NavbarComponents/TailoringService";
import PlumbingService from "./NavbarComponents/PlumbingService";
import ElectricService from "./NavbarComponents/ElectricService";
import CurrentIssues from "./NavbarComponents/CurrentIssues";
import CustomerSupport from "./NavbarComponents/CustomerSupport";
import PermissionsButton from "./NavbarComponents/PermissionsButton";

import "../../FeedPage/FeedPageStyle.css";

const UiZingAdminsNav = ({ property1 = "variant-3" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1,
  });

  const isOpen = state.property1 === "open";

  return (
    <nav className={`UI-zing-admins-nav ${isOpen ? "open" : "collapsed"}`}>
      <div className="nav-header">
        <button className="icon-line-chevron" onClick={() => dispatch("click")}>
          {isOpen ? <ChevronLeft size={24} color="#fff" /> : <ChevronRight size={24} color="#fff" />}
        </button>
      </div>

      <div className="nav-body">
        <div className="nav-section">
          {isOpen && <span className="nav-label">GENERAL SETTINGS</span>}
          <DashboardButton showLabel={isOpen} />
          <MapButton showLabel={isOpen} />
          <CarService showLabel={isOpen} />
          <TailoringService showLabel={isOpen} />
          <PlumbingService showLabel={isOpen} />
          <ElectricService showLabel={isOpen} />
        </div>

        <div className="nav-section">
          {isOpen && <span className="nav-label">OPERATIONS</span>}
          <CurrentIssues showLabel={isOpen} />
          <CustomerSupport showLabel={isOpen} />
        </div>

        <div className="nav-section">
          {isOpen && <span className="nav-label">UTILITIES</span>}
          <PermissionsButton showLabel={isOpen} />
        </div>
      </div>

      <div className="frame-7">
        <div className="frame-8">
          <div className="icon-line-user">
            <div className="group-8">
              <User size={20} color="#2c3e50" />
            </div>
          </div>
          {isOpen && <div className="label-4">Ion Popescu</div>}
        </div>

        <div className="frame-9">
          {isOpen && <div className="text-wrapper-6">Sign out</div>}
        </div>
      </div>
    </nav>
  );
};

function reducer(state, action) {
  return {
    property1: state.property1 === "open" ? "variant-3" : "open",
  };
}

UiZingAdminsNav.propTypes = {
  property1: PropTypes.oneOf(["variant-3", "open"]),
};

export default UiZingAdminsNav;
