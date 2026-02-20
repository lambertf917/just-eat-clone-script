import React, { useState } from 'react';

const ReviewForm = ({ orderId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            // Assume submitReview is a function that submits the review
            await submitReview(orderId, rating, comment);
            // Handle successful submission (e.g., show a success message)
        } catch (error) {
            // Handle submission error (e.g., show an error message)
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <span>Rating: </span>
                <input 
                    type="number" 
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)} 
                    min="1" 
                    max="5" 
                />
            </div>
            <div>
                <textarea 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    placeholder="Leave a comment" 
                />
            </div>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
        </form>
    );
};

export default ReviewForm;