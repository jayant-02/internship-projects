import React from 'react';

const Instructors = () => {
    return (
        <section className="instructors-section" id="guides">
            <div className="section-header">
                <h2>Meet Your Guides</h2>
                <p>Learn from certified instructors specialized in beginner alignment and modern yoga anatomy.</p>
            </div>

            <div className="grid-container instructors-grid">
                {/* Aria Chen */}
                <article className="instructor-card">
                    <div className="instructor-image-container">
                        <img src="assets/instructor_aria.png" alt="Lead Instructor Aria Chen" className="instructor-image" />
                    </div>
                    <div className="instructor-info">
                        <h3>Aria Chen</h3>
                        <span className="instructor-role">Lead Facilitator • E-RYT 500</span>
                        <p className="instructor-bio">
                            With over a decade of international training, Aria specializes in making vinyasa flow accessible and stress-relieving. Her focus is on alignment adjustments and modern breathing techniques.
                        </p>
                        <div className="qualifications">
                            <span>🧘 10+ Yrs Exp</span>
                            <span>📜 RYT 500 Certified</span>
                        </div>
                    </div>
                </article>

                {/* Rohan Das */}
                <article className="instructor-card">
                    <div className="instructor-image-container">
                        <img src="assets/instructor_rohan.png" alt="Ashtanga & Breathwork Expert Rohan Das" className="instructor-image" />
                    </div>
                    <div className="instructor-info">
                        <h3>Rohan Das</h3>
                        <span className="instructor-role">Ashtanga & Breathwork Specialist</span>
                        <p className="instructor-bio">
                            Rohan focuses on anatomical alignment and functional core strength. He integrates classic pranayama breathing techniques into modern sequences to build both daily focus and recovery.
                        </p>
                        <div className="qualifications">
                            <span>💨 Breath Specialist</span>
                            <span>🦴 Anatomy Expert</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Instructors;
