import React from 'react';

const SessionCard = ({ day, week, duration, title, brief, poses, tip, completed, onToggle }) => {
    
    const handleToggleClick = (e) => {
        onToggle(day);
        
        // Spawn particle confetti if toggled to completed
        if (!completed && window.triggerConfetti) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            window.triggerConfetti(x, y);
        }
    };

    return (
        <article className="session-card" data-day={day} data-week={week}>
            <div className="session-header-row">
                <div className="session-meta">
                    <span className="session-day-num">Day {day}</span>
                    <span className="session-duration">{duration} mins</span>
                </div>
                <button 
                    className={`complete-btn ${completed ? 'completed' : ''}`} 
                    aria-label={`Mark Day ${day} as completed`}
                    onClick={handleToggleClick}
                >
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </button>
            </div>
            <h3>{title}</h3>
            <p className="session-brief">{brief}</p>
            <details className="session-details">
                <summary>View key poses & tips</summary>
                <div className="details-content">
                    <p><strong>Primary poses:</strong> {poses}</p>
                    <p><strong>Tip:</strong> {tip}</p>
                </div>
            </details>
        </article>
    );
};

export default SessionCard;
