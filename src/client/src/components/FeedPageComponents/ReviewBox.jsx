// FeedPageComponents/ReviewBox.jsx
import React from "react";
import "../../FeedPage/FeedPageStyle.css";
import "./ReviewBoxStyle.css"
import reviewsData from "./FeedReviewsData";

const ReviewBox = ({ selectedPost, onBack }) => {
    return (
        <div className="profilebox">
            <div className="rectangle">
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", height: "100%"}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px"
                    }}>
                        <h3>Reviews</h3>
                        <button onClick={onBack} style={{
                            padding: "8px 12px",
                            backgroundColor: "#2c3e50",
                            color: "#fff",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontSize: "12px"
                        }}>
                            Back to Profile
                        </button>
                    </div>

                    <div style={{
                        flex: 1,
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        paddingBottom: "70px"
                    }}>
                        {(reviewsData[selectedPost] || []).map((r, i) => (
                            <div key={i} style={{
                                background: "#fff",
                                padding: "6px",
                                borderRadius: "12px",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                display: "flex",
                                gap: "10px",
                            }}>
                                <img
                                    src={r.avatar}
                                    alt={r.name}
                                    style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }}
                                />
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <strong style={{ fontSize: "15px", color: "#111" }}>{r.name}</strong>
                                        <span style={{ fontSize: "13px", color: "#888" }}>{r.time}</span>
                                    </div>
                                    <div style={{ color: "#f59e0b", margin: "4px 0" }}>
                                        {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
                                    </div>
                                    <p style={{ fontSize: "14px", color: "#333" }}>{r.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewBox;
