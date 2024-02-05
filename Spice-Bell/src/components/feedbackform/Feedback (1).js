import React, { useState } from 'react';
import './Feedback.css';


const Feedback = () => {
    const [reviews, setReviews] = useState([]);

    const addReview = () => {
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;

        alert("Your Review Submitted SuccessFully")

        if (reviews.length >= 4) {
            alert('Maximum 4 reviews allowed.');
            return;
        }

        const newReview = { name, rating, comment };

        setReviews([...reviews, newReview]);

        document.getElementById('addReviewForm').reset();
    };

    const handleSubmit = () => {
        const form = document.getElementById('addReviewForm');

        if (form.checkValidity()) {
            addReview();
        } else {
            alert('Please fill in all required fields.');
        }
    };

    const Feedback = () => {
        return reviews.map((review, index) => (
            <div key={index} className="review">
                <strong> Name: {review.name}</strong> <br />
                <strong> Rating: {review.rating}/5 </strong>  <br />
                <p>Feedback: {review.comment}</p>
            </div>
        ));
    };

    return (
        <div>
            <div className='review_body'>

                <div id="review-Form" className='m-auto mb-4' >
                    <h2 className='riv'> Feedback Here!!!</h2>
                    <form id="addReviewForm">
                        <label className='review_label' htmlFor="name">Name:</label>
                        <input className='review_input' type="text" id="name" placeholder='Enter Your Name' required /><br />

                        <label className='review_label' htmlFor="rating">Rating:</label>
                        <select className='review_select' id="rating" required>
                            <option value="">--Select Rating--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select><br />

                        <label className='review_label' htmlFor="comment">Feedback:</label><br />
                        <textarea className='review_textarea' id="comment" rows="4" placeholder='Enter Your Valuable Feedback Here' required></textarea><br />

                        <button className='review_button' type="button" onClick={handleSubmit}>Submit Review</button>
                    </form>
                </div>

                <div id="reviews" className='m-auto' >
                    <h2>Customer Reviews</h2>
                    <div id="reviewList">{Feedback()}</div>
                </div>

            </div>
            <div >       
            </div>
        </div>
    );
};
export default Feedback;