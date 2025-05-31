import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import DashboardButton from "./NavbarComponents/DashboardButton";
import MapButton from "./NavbarComponents/Map";
import CarService from "./NavbarComponents/CarService";
import TailoringService from "./NavbarComponents/TailoringService";
import PlumbingService from "./NavbarComponents/PlumbingService";
import ElectricService from "./NavbarComponents/ElectricService";
import HouseCleaningService from "./NavbarComponents/HouseCleaningService";
import HomeRenovationServices from "./NavbarComponents/HomeRenovationServices";
import CurrentIssues from "./NavbarComponents/CurrentIssues";
import "../../FeedPage/FeedPageStyle.css";
import icon from "../../images/pngegg.png";

const UiZingAdminsNav = ({ property1 = "variant-3", setCategory }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1,
  });
  const navigate = useNavigate();
  const isOpen = state.property1 === "open";
  const role = localStorage.getItem("role")

  return (
    <nav className={`UI-zing-admins-nav ${isOpen ? "open" : "collapsed"}`}>
      <div className="nav-header">
        <button className="icon-line-chevron" onClick={() => dispatch("click")}>
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
        {isOpen && <img alt="Logo" src={icon} style={styles.logo} />}
        {isOpen && <span className="app-title">MyHouseFix</span>}
      </div>

      <div className="nav-body">
        <div className="nav-section">
          {isOpen && <span className="nav-label">SERVICES</span>}
          <DashboardButton showLabel={isOpen} onClick={() => setCategory("All")} />
          <CarService showLabel={isOpen} onClick={() => setCategory("Mechanic")} />
          <TailoringService showLabel={isOpen} onClick={() => setCategory("Tailor")} />
          <PlumbingService showLabel={isOpen} onClick={() => setCategory("Plumber")} />
          <ElectricService showLabel={isOpen} onClick={() => setCategory("Electrician")} />
          <HouseCleaningService showLabel={isOpen} onClick={() => setCategory("Cleaner")} />
          <HomeRenovationServices showLabel={isOpen} onClick={() => setCategory("Renovator")} />
        </div>

        <div className="nav-section">
          {isOpen && <span className="nav-label">OPERATIONS</span>}
          <CurrentIssues
        showLabel={isOpen}
        onClick={() => role === 'master' ? navigate("/profileClient"): navigate("/profile")} 
      />
        </div>
      </div>

      <div className="frame-7">
        <div className="frame-9">
          {isOpen && <div className="text-wrapper-6">Sign out</div>}
        </div>
      </div>

      
    </nav>
  );
};

function reducer(state) {
  return {
    property1: state.property1 === "open" ? "variant-3" : "open",
  };
}

UiZingAdminsNav.propTypes = {
  property1: PropTypes.oneOf(["variant-3", "open"]),
  onCategorySelect: PropTypes.func.isRequired,
};

const styles = {
  logo: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    marginTop: "50px",
    filter: "invert(1) brightness(2)",
  },
};

export default UiZingAdminsNav;
