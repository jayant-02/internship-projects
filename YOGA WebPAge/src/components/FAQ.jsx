import React from 'react';

const FAQ = () => {
    const faqData = [
        {
            q: "Do I need to be flexible to start this yoga challenge?",
            a: "No, absolutely not! This is a common misconception. Yoga is the tool to build flexibility, not the prerequisite. The challenge is structured specifically to teach modifications, showing you how to use soft bends or blocks to fit your current range of motion."
        },
        {
            q: "What equipment do I need?",
            a: "All you need is a comfortable, non-slip yoga mat. If you have blocks or a strap, those can be helpful, but they are absolutely not required. We show you how to use household items (like thick books or a belt) as substitutes!"
        },
        {
            q: "Can I access the classes on my mobile phone?",
            a: "Yes. The website and video streaming player are fully responsive. You can stream the daily practices on your phone, tablet, laptop, or cast them directly to your television."
        },
        {
            q: "What happens if I miss a day?",
            a: "No worries! This is a self-paced challenge. You can pause the schedule and resume whenever you are ready. The interactive checkboxes will save your progress locally on your device so you never lose your spot."
        },
        {
            q: "Can I practice if I have a pre-existing injury?",
            a: "If you have any clinical injuries, we highly recommend consulting your doctor or physical therapist before starting. Our instructors show gentle variations, but it is critical to listen to your body and avoid forcing any poses."
        }
    ];

    return (
        <section className="faq-section" id="faq">
            <div className="section-header">
                <h2>Frequently Asked Questions</h2>
                <p>Have questions about the challenge? We have answers.</p>
            </div>

            <div className="faq-container">
                {faqData.map((item, index) => (
                    <details key={index} className="faq-item">
                        <summary>{item.q}</summary>
                        <div className="faq-content">
                            <p>{item.a}</p>
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
