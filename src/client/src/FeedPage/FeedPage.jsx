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

    const handlePostClick = (title) => {
        setShowProfile(false);
        setSelectedPost(title);
    };

    const handleBookClick = (post) => {
        setShowProfile(false);
        console.log("Clicked booking for:", post.title);
        setSelectedPost({ booking: post });
    };

  return (
    <div className="feedpage-container">
      <div className="sidebar">
        <UiZingAdminsNav setCategory={setSelectedCategory} />
      </div>

      <div className="main-content">
        <div className="center-content">
            <Posts onPostClick={handlePostClick} onBookClick={handleBookClick} category={selectedCategory} />
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
                    reviews={reviewsData[selectedPost] || []}
                    onBack={() => setShowProfile(true)}
                />
            )}
        </div>
    </div>
  );
};

export default FeedPage;

// issues: totul trebuie facut mai mare
// sa nu se schimbe dimensiunea lui right panel
// daca apas pe o zi indisponibila sa nu se schimbe culoarea in gri dar sa dispara meniul dropdown si sa scrie undeva indisponibil