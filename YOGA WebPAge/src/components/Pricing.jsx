import React, { useState } from 'react';

const Pricing = () => {
    const [isMembership, setIsMembership] = useState(false);

    // Dynamic price calculation
    const tier2Price = isMembership ? 9 : 49;
    const tier2Period = isMembership ? "/ month" : "one-time";

    const tier3Price = isMembership ? 19 : 99;
    const tier3Period = isMembership ? "/ month" : "one-time";

    return (
        <section className="pricing-section" id="pricing">
            <div className="section-header">
                <h2>Invest In Your Well-being</h2>
                <p>Choose the level of access that works best for your schedule and dedication.</p>
                
                {/* Billing Toggle Switch */}
                <div className="billing-toggle-container">
                    <span className={`toggle-lbl ${!isMembership ? 'active' : ''}`}>One-Time</span>
                    <button 
                        className={`toggle-switch-btn ${isMembership ? 'active' : ''}`}
                        onClick={() => setIsMembership(!isMembership)}
                        aria-label="Toggle billing duration"
                    >
                        <span className="toggle-switch-handle"></span>
                    </button>
                    <span className={`toggle-lbl ${isMembership ? 'active' : ''}`}>Membership</span>
                </div>
            </div>

            <div className="grid-container pricing-grid">
                {/* Tier 1 */}
                <div className="pricing-card">
                    <h3>Week 1 Pass</h3>
                    <div className="price-row">
                        <span className="currency">$</span>
                        <span className="price-num">0</span>
                    </div>
                    <p className="pricing-description">Perfect to try it out. Sample our grounding sessions and start your habit today.</p>
                    <ul className="pricing-features">
                        <li>✅ Days 1–7 Full Access</li>
                        <li>✅ Basic Pose Library</li>
                        <li>❌ Lifetime Access</li>
                        <li>❌ Instructor Q&A Comments</li>
                        <li>❌ Downloadable Guidebook</li>
                    </ul>
                    <button className="btn btn-secondary w-full" onClick={() => alert("Welcome to the Week 1 Free Pass! Start practicing today.")}>
                        Get Free Access
                    </button>
                </div>

                {/* Tier 2 (Recommended) */}
                <div className="pricing-card premium-pricing-card">
                    <div className="card-ribbon">Most Popular</div>
                    <h3>Full Challenge Pass</h3>
                    <div className="price-row">
                        <span className="currency">$</span>
                        <span className="price-num">{tier2Price}</span>
                        <span className="price-period">{tier2Period}</span>
                    </div>
                    <p className="pricing-description">The complete 28-day course. Everything you need to build a life-long yoga habit.</p>
                    <ul className="pricing-features">
                        <li>✅ Full 28-Day Curriculum</li>
                        <li>✅ Lifetime Unlimited Access</li>
                        <li>✅ Direct Comment Q&A Support</li>
                        <li>✅ Downloadable Habit Calendar</li>
                        <li>✅ Safe Pose Reference Library</li>
                    </ul>
                    <button className="btn btn-primary w-full btn-pulse" onClick={() => alert(`Enrolling in the Full Challenge Pass for $${tier2Price}! Namaste.`)}>
                        Enroll In Challenge
                    </button>
                </div>

                {/* Tier 3 */}
                <div className="pricing-card">
                    <h3>Yogi Membership</h3>
                    <div className="price-row">
                        <span className="currency">$</span>
                        <span className="price-num">{tier3Price}</span>
                        <span className="price-period">{tier3Period}</span>
                    </div>
                    <p className="pricing-description">For dedicated practitioners. Get all courses, challenges, and live coaching check-ins.</p>
                    <ul className="pricing-features">
                        <li>✅ Full 28-Day Challenge Access</li>
                        <li>✅ Access to 50+ Other Courses</li>
                        <li>✅ Weekly Live Stream Classes</li>
                        <li>✅ 1-on-1 Monthly Coach Call</li>
                        <li>✅ Exclusive Member Slack Hub</li>
                    </ul>
                    <button className="btn btn-secondary w-full" onClick={() => alert(`Subscribing to Yogi Membership for $${tier3Price}! Welcome.`)}>
                        Become Member
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
