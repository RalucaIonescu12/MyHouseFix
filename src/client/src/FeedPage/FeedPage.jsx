import React, { useState } from 'react';
import { Box } from '../components/FeedPageComponents/FeedBox';
import UiZingAdminsNav from '../components/FeedPageComponents/FeedNavigationBar';
import { Posts } from '../components/FeedPageComponents/FeedPagePosts';
import ProfileBox from '../components/FeedPageComponents/FeedProfile';
import ReviewBox from '../components/FeedPageComponents/ReviewBox';
import './FeedPageStyle.css';
import profileImage from "../images/profile.jpeg";
import reviewsData from "../components/FeedPageComponents/FeedReviewsData";
import BookingForm from "../components/FeedPageComponents/BookingForm";
import AddReviewForm from "../components/FeedPageComponents/AddReviewForm";
import AddForm from "../components/FeedPageComponents/AddForm";


const currentUser = {
  name: "Alex Ionescu",
  location: "București, Sector 4",
  role: localStorage.getItem("role"),
  pendingRequests: 3,
  upcomingAppointments: 2,
  profileImg: profileImage
};


export const FeedPage = () => {
    const [showProfile, setShowProfile] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
    const [showAddReview, setShowAddReview] = useState(false);
    const [currentPostForReview, setCurrentPostForReview] = useState(null);

    const handlePostClick = (title) => {
        setShowProfile(false);
        setSelectedPost(title);
    };

    const handleBookClick = (post) => {
        setShowProfile(false);
        console.log("Clicked booking for:", post.title);
        setSelectedPost({ booking: post });
    };

    const handleAddReviewClick = (postTitle) => {
        setCurrentPostForReview(postTitle);
        setShowAddReview(true);
    };

    const handleAddReview = (newReview) => {
        if (!reviewsData[currentPostForReview]) {
            reviewsData[currentPostForReview] = [];
        }
        reviewsData[currentPostForReview] = [newReview, ...reviewsData[currentPostForReview]];

        setShowAddReview(false);
        setShowProfile(false);
        setSelectedPost(currentPostForReview);
    };

  return (
    <div className="feedpage-container">
      <div className="sidebar">
        <UiZingAdminsNav setCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      </div>

      <div className="main-content">
        <div className="center-content">
            <Posts onPostClick={handlePostClick} onBookClick={handleBookClick} category={selectedCategory} onAddReviewClick={handleAddReviewClick}/>
        </div>
      </div>

        <div className="right-panel">
            {showProfile ? (
                <ProfileBox user={currentUser} />
            ) : selectedPost?.booking ? (
                <BookingForm
                    post={selectedPost.booking}
                    onBack={() => setShowProfile(true)}
                />
            ) : (
                <ReviewBox
                    selectedPost={selectedPost}
                    onBack={() => setShowProfile(true)}
                />
            )}
        </div>
        {showAddReview && (
            <>
            <div
                className="grey-screen"
            ></div>
            <AddReviewForm
                onCancel={() => setShowAddReview(false)}
                onAddReview={handleAddReview}
                currentUser={currentUser}
            />
            </>
        )}

    </div>
  );
};

export default FeedPage;
