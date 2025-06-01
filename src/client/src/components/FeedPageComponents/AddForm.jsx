import React, { useState } from "react";
import "../../FeedPage/FeedPageStyle.css";

export const AddForm = ({cancelAdd, setSelectedFile, addPost}) => {
  const [hovered, setHovered] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const imageURL = URL.createObjectURL(file);
        setSelectedFile(imageURL);
    }
  };

  return (
          <div className="add-form-display">
            <div className="add-post-form">
              <div onClick={cancelAdd} className="close-form">
                <img src={hovered ? "/cancel-hover.svg" : "/cancel.svg"} 
                  height="30px" width="30px" style={{cursor: "pointer"}}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                ></img>
              </div>
              <div style={{display: "flex", justifyContent: "center", marginTop: "-24px"}}>
                <h2>Add New Post</h2>
              </div>
              <div className="add-form-elements">
                <label htmlFor="name">Title</label>
                <input type="text" id="name" />
              </div>

              <div className="add-form-elements">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" />
              </div>

              <div className="add-form-elements">
                <label htmlFor="price">Price</label>
                <input type="text" id="price" />
              </div>

              <div className="add-form-elements">
                <label htmlFor="category">Category</label>
                <select id="category">
                    <option value="Tailor">Tailoring</option>
                    <option value="Mechanic">Car</option>
                    <option value="Plumber">Plumbing</option>
                    <option value="Electrician">Electric</option>
                    <option value="Cleaner">Home cleaning</option>
                    <option value="Renovator">House renovation</option>
                </select>
            </div>

              <div className="add-form-elements">
                <label htmlFor="photo">Photo</label>
                <input 
                  type="file" 
                  id="photo" 
                  accept="image/*" 
                  onChange={handleFileChange}
                />
              </div>
              <div className="add-post-button">
                <button onClick={addPost} style={{width: "20%", backgroundColor: "#2c3e50", color:"white", borderRadius: "5px"}} id="addButton">
                  Add post
                </button>
              </div>
            </div>
          </div>
  );
};
export default AddForm;