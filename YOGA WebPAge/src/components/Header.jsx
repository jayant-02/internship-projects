import React, { useState, useEffect, useRef } from 'react';

const Header = ({ completedDays, onReset }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const totalDaysCount = 28;
    const count = completedDays.length;
    const percentage = Math.round((count / totalDaysCount) * 100);

    // Scroll state header transition
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className={`sticky-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="logo">
                    <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3C8 3 4 6 4 10C4 16 12 21 12 21C12 21 20 16 20 10C20 6 16 3 12 3Z" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 3V7" />
                        <path d="M4 10H8" />
                        <path d="M16 10H20" />
                    </svg>
                    <span className="logo-text">Sadhana</span>
                </a>
                
                <button 
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
                    <a href="#overview" onClick={() => setMenuOpen(false)}>Overview</a>
                    <a href="#curriculum" onClick={() => setMenuOpen(false)}>Curriculum</a>
                    <a href="#guides" onClick={() => setMenuOpen(false)}>Guides</a>
                    <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                    <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
                </nav>

                <div className="header-right">
                    <div className="progress-pill-wrapper" ref={dropdownRef}>
                        <button className="progress-pill" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <span className="progress-dot-indicator"></span>
                            <span className="progress-text">{count}/{totalDaysCount} Days</span>
                        </button>
                        
                        <div className={`progress-dropdown ${dropdownOpen ? 'open' : ''}`}>
                            <div className="dropdown-header">
                                <h4>Your Progress</h4>
                                <span className="percentage-label">{percentage}% Completed</span>
                            </div>
                            <div class="progress-bar-container">
                                <div class="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
                            </div>
                            <p className="progress-tip">
                                {percentage === 0 && "Complete Day 1 to kickstart your journey!"}
                                {percentage > 0 && percentage < 100 && `${count} sessions down. Keep showing up!`}
                                {percentage === 100 && "Congratulations! You completed the challenge! 🎉"}
                            </p>
                            {count > 0 && (
                                <button className="reset-btn" onClick={() => { onReset(); setDropdownOpen(false); }}>
                                    Reset Challenge Progress
                                </button>
                            )}
                        </div>
                    </div>
                    <a href="#pricing" className="btn btn-sm btn-accent hide-mobile">Enroll Now</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
