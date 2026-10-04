import React, { useState } from 'react';
import SessionCard from './SessionCard';

const Curriculum = ({ completedDays, onToggleDay }) => {
    const [activeWeek, setActiveWeek] = useState(1);

    const sessions = [
        // Week 1 (Days 1 - 7)
        {
            day: 1, week: 1, duration: 15,
            title: "Foundations of Breath",
            brief: "Master conscious Vinyasa breathing (Ujjayi) and gentle transitions between Child's pose and Tabletop.",
            poses: "Balasana (Child's Pose), Marjaryasana (Cat-Cow), Adho Mukha Svanasana (Downward Dog).",
            tip: "Keep a soft bend in your knees during Downward Dog if your hamstrings feel tight."
        },
        {
            day: 2, week: 1, duration: 18,
            title: "Alignment & Grounding",
            brief: "Establish structural integrity in standing postures. Learn Mountain Pose (Tadasana) and Warrior I.",
            poses: "Tadasana (Mountain Pose), Virabhadrasana I (Warrior I), Uttanasana (Forward Fold).",
            tip: "Ground down firmly through all four corners of your feet to create stability."
        },
        {
            day: 3, week: 1, duration: 14,
            title: "Gentle Hip Openers",
            brief: "Release physical tension and accumulated stress from long hours of sitting with relaxing deep hip stretches.",
            poses: "Anjaneyasana (Low Lunge), Pigeon Pose (modified), Baddha Konasana (Bound Angle).",
            tip: "Breathe deeply into your hips; never push to the point of pain."
        },
        {
            day: 4, week: 1, duration: 16,
            title: "Sun Salutation Basics",
            brief: "Deconstruct the classical Surya Namaskar flow. Learn how to flow safely through Cobra and Plank poses.",
            poses: "Plank Pose, Bhujangasana (Cobra), Chaturanga modification.",
            tip: "Keep elbows tucked tightly against your ribs as you lower down."
        },
        {
            day: 5, week: 1, duration: 12,
            title: "Restorative Mindset",
            brief: "A slow-paced, relaxing session. Focuses entirely on calming your nervous system and promoting deep sleep.",
            poses: "Viparita Karani (Legs-up-the-Wall), Supta Baddha Konasana, Savasana.",
            tip: "Allow your body to completely surrender to gravity. Use a blanket if cozy."
        },
        {
            day: 6, week: 1, duration: 17,
            title: "Introduction to Balance",
            brief: "Explore visual focus (Drishti) and weight distribution. Master the basics of Tree Pose.",
            poses: "Vrksasana (Tree Pose), Parsvokonasana (Extended Side Angle).",
            tip: "Keep your gaze fixed on a single static point on the wall ahead of you."
        },
        {
            day: 7, week: 1, duration: 22,
            title: "Week 1 Celebration Flow",
            brief: "An integrated flow combining the breath, alignment, and standing shapes learned over the last 6 days.",
            poses: "Full Surya Namaskar (modified), Warrior Flow, Long Savasana.",
            tip: "Celebrate showing up for yourself. The hardest part of the first week is complete!"
        },
        // Week 2 (Days 8 - 14)
        {
            day: 8, week: 2, duration: 15,
            title: "Core Awakening",
            brief: "Build strength in your abdomen and lower back. Introduce dynamic modifications of Plank and Boat pose.",
            poses: "Navasana (Boat Pose), Forearm Plank, Bird-Dog Flow.",
            tip: "Draw your belly button in toward your spine to support your lower back."
        },
        {
            day: 9, week: 2, duration: 18,
            title: "Finding Stability in Warrior II",
            brief: "Deepen your lower body strength and master correct knee tracking in Warrior II and Reverse Warrior.",
            poses: "Virabhadrasana II (Warrior II), Viparita Virabhadrasana (Reverse Warrior).",
            tip: "Ensure your front knee tracks directly over your ankle and doesn't collapse inward."
        },
        {
            day: 10, week: 2, duration: 16,
            title: "Shoulder & Upper Back Release",
            brief: "Unpack tech-neck stiffness. Open your chest and stretch your shoulders with easy, seated sequences.",
            poses: "Garudasana Arms (Eagle arms), Gomukhasana (Cow Face pose modification), Sphinx Pose.",
            tip: "Relax your shoulders down away from your ears during every posture."
        },
        {
            day: 11, week: 2, duration: 15,
            title: "Gentle Twists & Detox",
            brief: "Soothe your spine and aid digestion. Gentle twists that massage your internal organs and align vertebrae.",
            poses: "Ardha Matsyendrasana (Half Lord of the Fishes Pose), Reclined Spinal Twist.",
            tip: "Lengthen your spine on each inhale; twist a tiny bit deeper on each exhale."
        },
        {
            day: 12, week: 2, duration: 13,
            title: "Breathwork Mastery",
            brief: "Explore Nadi Shodhana (Alternate Nostril Breathing) and learn how it calms anxiety instantly.",
            poses: "Sukhasana (Easy pose), Nadi Shodhana Pranayama.",
            tip: "Sit on a block or cushion to keep your hips higher than your knees for comfort."
        },
        {
            day: 13, week: 2, duration: 17,
            title: "Stamina Builder",
            brief: "Build muscular endurance by holding standard postures slightly longer. Focus on physical resilience.",
            poses: "Utkatasana (Chair Pose), Plank Pose, Warrior II hold.",
            tip: "When the pose gets warm, focus on keeping your facial muscles and jaw completely relaxed."
        },
        {
            day: 14, week: 2, duration: 20,
            title: "Halfway Integration Flow",
            brief: "A flowing, creative sequence linking core control with structural stability. Halfway there!",
            poses: "Dynamic sun salutations, standing balance flow, active cool-down.",
            tip: "Take note of how much smoother your transitions feel compared to Day 1."
        },
        // Week 3 (Days 15 - 21)
        {
            day: 15, week: 3, duration: 16,
            title: "Lower Body Power",
            brief: "Strengthen glutes, thighs, and ankles with dynamic Warrior III prep poses and crescent lunges.",
            poses: "Ashta Chandrasana (High Crescent Lunge), Warrior III modifications.",
            tip: "Squeeze your back quadriceps to help lift your back leg in lunges."
        },
        {
            day: 16, week: 3, duration: 15,
            title: "Heart Openers",
            brief: "Gently stretch the front body and counter the desk-slouch. Safely enter Bridge and Camel poses.",
            poses: "Setu Bandha Sarvangasana (Bridge Pose), Ustrasana (Camel Pose modification).",
            tip: "Support your lower back with your hands in Camel pose and keep your neck long."
        },
        {
            day: 17, week: 3, duration: 18,
            title: "Hamstring Flexibility",
            brief: "Focus on safely lengthening hamstrings and calves. Deep folds using straps/blocks.",
            poses: "Janu Sirsasana (Head-to-Knee pose), Pyramids modification.",
            tip: "Focus on hinging from your hips, keeping a long flat back, rather than rounding your chest down."
        },
        {
            day: 18, week: 3, duration: 14,
            title: "Core-Flow Fusion",
            brief: "Link abdominal holds directly with vinyasa movement patterns to build fluid stability.",
            poses: "Tiger curl transitions, side planks modifications, down-dog split.",
            tip: "Draw your knee actively up toward your nose during Tiger curl to activate deep core muscles."
        },
        {
            day: 19, week: 3, duration: 16,
            title: "Twisted Balance",
            brief: "Combine spinal twists with balancing positions for advanced spatial awareness and mental clarity.",
            poses: "Parivrtta Parsvakonasana (Revolved Side Angle modification), Eagle Pose.",
            tip: "Take your time setting up. If you wobble, just reset with a breath."
        },
        {
            day: 20, week: 3, duration: 20,
            title: "Upper Body Strength",
            brief: "Build strength in arms, shoulders, and back to support safe transitions throughout the sun salutations.",
            poses: "Dolphin Pose, side-plank variations, chaturanga alignment drills.",
            tip: "Press down firmly through your forearms in Dolphin pose to keep your neck free."
        },
        {
            day: 21, week: 3, duration: 22,
            title: "Week 3 Mastery Flow",
            brief: "An athletic, yet accessible sequence checking your balance, lower body strength, and shoulder core activation.",
            poses: "Continuous Vinyasa flow, full balance series, soothing restorative finish.",
            tip: "Focus on maintaining a slow, steady Ujjayi breath throughout the dynamic segments."
        },
        // Week 4 (Days 22 - 28)
        {
            day: 22, week: 4, duration: 15,
            title: "Deep Hip Release",
            brief: "Unpack deep tissue tension with restorative hip poses, including a complete walkthrough of Pigeon Pose.",
            poses: "Eka Pada Rajakapotasana (Pigeon Pose), Cow face legs stretch.",
            tip: "Place a block or blanket under your hip in Pigeon pose if your hips are elevated off the floor."
        },
        {
            day: 23, week: 4, duration: 14,
            title: "Spinal Fluidity",
            brief: "Restore health to your spine. Gently move your spine in all 6 natural directions to release tension.",
            poses: "Dynamic side bends, gentle camel extensions, forward folds.",
            tip: "Imagine creating space between each vertebra as you reach upward."
        },
        {
            day: 24, week: 4, duration: 16,
            title: "Focus & Drishti",
            brief: "Combine static balancing holds with deep breathwork to build powerful mental concentration.",
            poses: "Garudasana (Eagle Pose), Virabhadrasana III (Warrior III hold).",
            tip: "Keep your breath slow and even to act as an anchor for your balance."
        },
        {
            day: 25, week: 4, duration: 15,
            title: "Somatic Release",
            brief: "Gentle, circular joint mobility sequences combined with soft stretches to ease mental overload.",
            poses: "Neck rolls, wrist release, gentle shoulder circles, happy baby.",
            tip: "Move slowly, and pay attention to the exact physical sensations in your joints."
        },
        {
            day: 26, week: 4, duration: 18,
            title: "Strength & Grace Flow",
            brief: "A flow designed to transition seamlessly from one posture to another, emphasizing smooth, graceful control.",
            poses: "Half Moon pose (Ardha Chandrasana) modified, elegant dancer pose prep.",
            tip: "Focus on the transitions between the poses, not just the final shapes."
        },
        {
            day: 27, week: 4, duration: 12,
            title: "Deep Rest & Yoga Nidra",
            brief: "Zero movement. A complete guided systematic relaxation session to integrate the physical benefits of the challenge.",
            poses: "Savasana (Corpse Pose) with complete body scan.",
            tip: "Keep a warm layer close by as your body temperature drops slightly during deep stillness."
        },
        {
            day: 28, week: 4, duration: 25,
            title: "The Final Integration Flow",
            brief: "Our final 25-minute practice. A celebration of your strength, alignment, breath, and focus. You did it!",
            poses: "Full beginner flow incorporating standing, core, twists, backbends, and Nidra integration.",
            tip: "Remember that this is not the end, but the foundation for your ongoing practice."
        }
    ];

    const weeks = [
        { num: 1, title: "Grounding & Form" },
        { num: 2, title: "Core & Stability" },
        { num: 3, title: "Strength & Flow" },
        { num: 4, title: "Integration & Zen" }
    ];

    return (
        <section className="curriculum-section" id="curriculum">
            <div className="section-header">
                <h2>The 28-Day Roadmap</h2>
                <p>Four structured, progressive weeks to gently build stamina, balance, and focus.</p>
            </div>

            {/* Week Tabs */}
            <div className="tabs-container">
                {weeks.map(w => (
                    <button 
                        key={w.num}
                        className={`tab-btn ${activeWeek === w.num ? 'active' : ''}`}
                        onClick={() => setActiveWeek(w.num)}
                    >
                        <span className="tab-week-num">Week {w.num}</span>
                        <span className="tab-week-title">{w.title}</span>
                    </button>
                ))}
            </div>

            {/* Daily Sessions Grid */}
            <div className="sessions-grid">
                {sessions
                    .filter(s => s.week === activeWeek)
                    .map(s => (
                        <SessionCard 
                            key={s.day}
                            {...s}
                            completed={completedDays.includes(s.day)}
                            onToggle={onToggleDay}
                        />
                    ))}
            </div>
        </section>
    );
};

export default Curriculum;
