import React, { useEffect, useRef } from 'react';

const Confetti = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles = [];
        let animationFrameId = null;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class ConfettiParticle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 6 + 5;
                
                // Velocity components
                const angle = Math.random() * Math.PI * 1.6 - Math.PI * 0.8; // upward arc
                const speed = Math.random() * 8 + 4;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed - 2; // prioritize upwards initial force
                
                this.gravity = 0.25;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 10 - 5;
                
                const colors = [
                    '#5a468a', // Indigo
                    '#468a73', // Sage Teal
                    '#ea834e', // Sunburst
                    '#fad089', // Light Warm Gold
                    '#81c784'  // Calm Green
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = 1;
                this.fadeSpeed = Math.random() * 0.01 + 0.005;
            }

            update() {
                this.x += this.vx;
                this.vy += this.gravity;
                this.y += this.vy;
                this.rotation += this.rotationSpeed;
                this.opacity -= this.fadeSpeed;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation * Math.PI / 180);
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
                ctx.restore();
            }
        }

        const animateConfetti = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles = particles.filter(p => p.opacity > 0 && p.y < canvas.height);
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            
            if (particles.length > 0) {
                animationFrameId = requestAnimationFrame(animateConfetti);
            } else {
                animationFrameId = null;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        };

        const triggerConfetti = (startX, startY) => {
            // Create 45 particles
            for (let i = 0; i < 45; i++) {
                particles.push(new ConfettiParticle(startX, startY));
            }
            
            if (!animationFrameId) {
                animateConfetti();
            }
        };

        // Attach function to global window namespace so other components can invoke it
        window.triggerConfetti = triggerConfetti;

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            delete window.triggerConfetti;
        };
    }, []);

    return <canvas id="confettiCanvas" ref={canvasRef}></canvas>;
};

export default Confetti;
