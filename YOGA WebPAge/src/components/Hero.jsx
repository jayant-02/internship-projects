import React from 'react';

const Hero = ({ completedDays, onOpenTrailer }) => {
    
    const dayData = {
        1: { title: "Foundations of Breath", duration: 15, desc: "Alignment & Breath" },
        2: { title: "Alignment & Grounding", duration: 18, desc: "Standing Poses" },
        3: { title: "Gentle Hip Openers", duration: 14, desc: "Stress Release" },
        4: { title: "Sun Salutation Basics", duration: 16, desc: "Surya Namaskar" },
        5: { title: "Restorative Mindset", duration: 12, desc: "Deep Relaxation" },
        6: { title: "Introduction to Balance", duration: 17, desc: "Tree Pose Focus" },
        7: { title: "Week 1 Celebration Flow", duration: 22, desc: "Integrated Flow" },
        8: { title: "Core Awakening", duration: 15, desc: "Abdominal Power" },
        9: { title: "Finding Stability in Warrior II", duration: 18, desc: "Lower Body Strength" },
        10: { title: "Shoulder & Upper Back Release", duration: 16, desc: "Posture Alignment" },
        11: { title: "Gentle Twists & Detox", duration: 15, desc: "Spinal Health" },
        12: { title: "Breathwork Mastery", duration: 13, desc: "Nadi Shodhana" },
        13: { title: "Stamina Builder", duration: 17, desc: "Holding Postures" },
        14: { title: "Halfway Integration Flow", duration: 20, desc: "Fluid Transitions" },
        15: { title: "Lower Body Power", duration: 16, desc: "Balance & Strength" },
        16: { title: "Heart Openers", duration: 15, desc: "Cobra & Bridge" },
        17: { title: "Hamstring Flexibility", duration: 18, desc: "Safe Folds" },
        18: { title: "Core-Flow Fusion", duration: 14, desc: "Active Core" },
        19: { title: "Twisted Balance", duration: 16, desc: "Eagle Pose Focus" },
        20: { title: "Upper Body Strength", duration: 20, desc: "Arm & Shoulder" },
        21: { title: "Mastery Flow", duration: 22, desc: "Athletic Flow" },
        22: { title: "Deep Hip Release", duration: 15, desc: "Pigeon Pose Flow" },
        23: { title: "Spinal Fluidity", duration: 14, desc: "6-Way Movement" },
        24: { title: "Focus & Drishti", duration: 16, desc: "Steady Focus" },
        25: { title: "Somatic Release", duration: 15, desc: "Joint Mobility" },
        26: { title: "Strength & Grace Flow", duration: 18, desc: "Mindful Grace" },
        27: { title: "Deep Rest & Yoga Nidra", duration: 12, desc: "Body Scan Relaxation" },
        28: { title: "The Final Integration Flow", duration: 25, desc: "Complete Celebration" }
    };

    // Calculate first uncompleted day
    let nextDay = 1;
    for (let i = 1; i <= 28; i++) {
        if (!completedDays.includes(i)) {
            nextDay = i;
            break;
        }
    }

    const isAllCompleted = completedDays.length === 28;
    const nextSession = isAllCompleted ? null : dayData[nextDay];

    const handlePrimaryCta = () => {
        document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero-section" id="overview">
            <div className="grid-container hero-grid">
                <div className="hero-content">
                    <div className="micro-badge">
                        <span className="badge-icon">✨</span>
                        <span>Transform in 28 Days</span>
                    </div>
                    <h1>Begin Within: The 28-Day Yoga Challenge</h1>
                    <p className="hero-desc">
                        Build a foundation of strength, daily flexibility, and mindful breathing. Short, high-quality guided sessions designed specifically for absolute beginners.
                    </p>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span class="stat-num">28</span>
                            <span class="stat-lbl">Daily Flows</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span class="stat-num">15m</span>
                            <span class="stat-lbl">Average Class</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span class="stat-num">0</span>
                            <span class="stat-lbl">Props Required</span>
                        </div>
                    </div>

                    <div className="hero-cta-group">
                        <button className="btn btn-primary btn-pulse" onClick={handlePrimaryCta}>
                            {completedDays.length === 0 ? "Start Day 1 Free" : "Resume Practice"}
                        </button>
                        <button className="btn btn-secondary" onClick={onOpenTrailer}>
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="6 3 20 12 6 21 6 3"/>
                            </svg>
                            Watch Preview
                        </button>
                    </div>
                </div>

                <div className="hero-media-wrapper">
                    <div className="hero-img-container">
                        <img src="assets/hero_bg.png" alt="Serene Light-filled Yoga Sanctuary" className="hero-image" />
                        <div className="floating-glass-card">
                            <div className="card-tag">{isAllCompleted ? "Completed" : "Up Next"}</div>
                            <div className="card-title-row">
                                <svg className="play-small-icon" viewBox="0 0 24 24" fill="currentColor" onClick={handlePrimaryCta}>
                                    <polygon points="6 3 20 12 6 21 6 3"/>
                                </svg>
                                <div>
                                    {isAllCompleted ? (
                                        <>
                                            <h4>Challenge Complete! 🎉</h4>
                                            <p>Namaste • Lifetime Access Saved</p>
                                        </>
                                    ) : (
                                        <>
                                            <h4>Day {nextDay}: {nextSession.title}</h4>
                                            <p>{nextSession.duration} mins • {nextSession.desc}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
