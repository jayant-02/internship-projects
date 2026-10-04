import React from 'react';

const Overview = () => {
    return (
        <section className="benefits-section" id="benefits">
            <div className="section-header">
                <h2>Why Choose This Challenge?</h2>
                <p>Specifically tailored for beginners to achieve lasting physical and mental balance.</p>
            </div>
            
            <div className="grid-container benefits-grid">
                <div className="benefit-card">
                    <div className="benefit-icon-wrapper">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4.5 16.5C4.5 15 6 12 12 12C18 12 19.5 15 19.5 16.5" />
                            <circle cx="12" cy="7" r="3" />
                            <path d="M2 20H22" />
                        </svg>
                    </div>
                    <h3>True Beginner Pacing</h3>
                    <p>No complex poses. We break down downward dogs, cobra alignment, and modifications step-by-step.</p>
                </div>

                <div className="benefit-card">
                    <div className="benefit-icon-wrapper">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                    </div>
                    <h3>Habit-Building Format</h3>
                    <p>Shorter daily sessions (12-20 minutes) make it incredibly easy to stick to yoga even on busy days.</p>
                </div>

                <div className="benefit-card">
                    <div className="benefit-icon-wrapper">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 3v18M3 12h18" strokeLinecap="round"/>
                            <circle cx="12" cy="12" r="5" />
                        </svg>
                    </div>
                    <h3>Mindfulness Integrated</h3>
                    <p>Every session includes breathwork (Pranayama) and somatic resets to melt away workday stress.</p>
                </div>

                <div className="benefit-card">
                    <div className="benefit-icon-wrapper">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <h3>Lifetime Support</h3>
                    <p>Enroll once and keep lifetime access. Ask questions in the daily comments and get expert advice.</p>
                </div>
            </div>
        </section>
    );
};

export default Overview;
