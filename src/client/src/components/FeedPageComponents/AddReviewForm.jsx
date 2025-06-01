import React, { useState } from "react";
import "../../FeedPage/FeedPageStyle.css";

const AddReviewForm = ({ onCancel, onAddReview, currentUser }) => {
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [hoveredStar, setHoveredStar] = useState(0);

    const handleAddReview = () => {
        if (!description || rating === 0) {
            alert("Please enter a description and select a rating!");
            return;
        }
        const newReview = {
            name: currentUser.name,
            avatar: currentUser.profileImg,
            stars: rating,
            text: description,
            time: "Just now",
        };
        onAddReview(newReview);
    };

    return (
        <div className="add-form-display">
            <div className="add-post-form">
                <div
                    onClick={onCancel}
                    className="close-form"
                >
                    <img
                        src={hovered ? "/cancel-hover.svg" : "/cancel.svg"}
                        height="30px"
                        width="30px"
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "-24px",
                    }}
                >
                    <h2>Add Review</h2>
                </div>

                <div className="add-form-elements">
                    <label>Description</label>
                    <textarea
                        rows="3"
                        style={{ resize: "vertical", width: "100%", maxHeight: "200px" }}
                        placeholder="Write your review..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="add-form-elements">
                    <label>Rating</label>
                    <div style={{ display: "flex", gap: "4px" }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                style={{
                                    fontSize: "24px",
                                    color:
                                        star <= (hoveredStar || rating) ? "#fbbf24" : "#ccc",
                                    cursor: "pointer",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={() => setHoveredStar(star)}
                                onMouseLeave={() => setHoveredStar(0)}
                                onClick={() => setRating(star)}
                            >
                ★
              </span>
                        ))}
                    </div>
                </div>

                <div className="add-post-button">
                    <button
                        onClick={handleAddReview}
                        style={{
                            width: "20%",
                            backgroundColor: "#2c3e50",
                            color: "white",
                            borderRadius: "5px",
                        }}
                        id="addButton"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddReviewForm;
