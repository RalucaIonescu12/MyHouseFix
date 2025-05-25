// FeedPageComponents/ReviewBox.jsx
import React from "react";
import "../../FeedPage/FeedPageStyle.css";

const ReviewBox = ({ reviews, onBack }) => {
    return (
        <div className="profilebox">
            <div className="rectangle">
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", height: "100%" }}>
                    <h3 style={{ fontSize: "30px", fontWeight: "600", marginBottom: "20px", color: "#2c3e50" }}>Reviews</h3>

                    <div style={{
                        flex: 1,
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}>
                        {reviews.map((r, i) => (
                            <div key={i} style={{
                                background: "#fff",
                                padding: "12px",
                                borderRadius: "12px",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                display: "flex",
                                gap: "12px",
                            }}>
                                <img
                                    src={r.avatar}
                                    alt={r.name}
                                    style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
                                />
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <strong style={{ fontSize: "18px", color: "#111" }}>{r.name}</strong>
                                        <span style={{ fontSize: "16px", color: "#888" }}>{r.time}</span>
                                    </div>
                                    <div style={{ color: "#f59e0b", margin: "4px 0" }}>
                                        {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
                                    </div>
                                    <p style={{ fontSize: "17px", color: "#333" }}>{r.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={onBack} style={{
                        marginTop: "12px",
                        padding: "8px",
                        backgroundColor: "#2c3e50",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}>Back to Profile</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewBox;
