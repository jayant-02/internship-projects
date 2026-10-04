import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Thank you for subscribing with ${email}! Namaste.`);
            setEmail('');
        }
    };

    return (
        <footer className="site-footer">
            <div className="footer-grid">
                <div className="footer-about">
                    <h3>Sadhana Yoga</h3>
                    <p>Empowering individuals to find peace, physical longevity, and mindfulness through daily, structured yoga practices.</p>
                </div>
                <div className="footer-links">
                    <h4>Explore</h4>
                    <a href="#overview">Overview</a>
                    <a href="#curriculum">Curriculum</a>
                    <a href="#guides">Guides</a>
                    <a href="#pricing">Pricing</a>
                </div>
                <div className="footer-newsletter">
                    <h4>Stay Connected</h4>
                    <p>Join our newsletter for free weekly sequences, alignment adjustments, and mental mindfulness worksheets.</p>
                    <form className="newsletter-form" onSubmit={handleSubscribe}>
                        <input 
                            type="email" 
                            placeholder="Your Email Address" 
                            required 
                            className="newsletter-input" 
                            aria-label="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" className="btn btn-sm btn-accent">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Sadhana Yoga. All rights reserved. Designed for wellbeing.</p>
            </div>
        </footer>
    );
};

export default Footer;
