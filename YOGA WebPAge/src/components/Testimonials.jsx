import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            stars: "⭐⭐⭐⭐⭐",
            quote: "I used to think you had to be flexible to start yoga. Day 1 completely changed my mind. This challenge made daily movement a habit.",
            author: "Sarah Jenkins",
            tag: "Verified Graduate"
        },
        {
            stars: "⭐⭐⭐⭐⭐",
            quote: "Aria's cues are amazing. It feels like having a private instructor in your living room. My back pain is completely gone after 4 weeks.",
            author: "David Thorne",
            tag: "Verified Graduate"
        },
        {
            stars: "⭐⭐⭐⭐⭐",
            quote: "Loved the 15-minute format! I did it every morning before starting my remote job. Highly recommend it to anyone with a busy lifestyle.",
            author: "Leila Vance",
            tag: "Verified Graduate"
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="section-header">
                <h2>Loved by Beginners Worldwide</h2>
                <p>Hear from real students who started their yoga journey with this 28-day challenge.</p>
            </div>
            
            <div className="grid-container testimonials-grid">
                {reviews.map((r, i) => (
                    <article key={i} className="testimonial-card">
                        <div className="stars">{r.stars}</div>
                        <blockquote>"{r.quote}"</blockquote>
                        <div className="testimonial-author">
                            <div className="author-details">
                                <span className="author-name">{r.author}</span>
                                <span className="author-tag">{r.tag}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
