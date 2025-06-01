import React from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../../FeedPage/FeedPageStyle.css";

const SignOut = ({ showLabel = true  }) => {

    const navigate = useNavigate();

    const handeSignOut = () => {
        navigate("/");
    }

    return (
        <button className="nav-button text-red-500" onClick={handeSignOut}>
            <LogOut className="icon" />
            {showLabel && "Sign out"}
        </button>
    );

};


export default SignOut;
