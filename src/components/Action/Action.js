import React, { useEffect } from 'react';
import './Action.css';

const ActionSection = () => {
    useEffect(() => {
        const animateNumbers = () => {
            const stats = document.querySelectorAll('.stat p.number');

            stats.forEach((stat) => {
                const target = +stat.getAttribute('data-target');
                const speed = 100; // Adjust speed for faster/slower animation

                const incrementNumber = () => {
                    const current = +stat.innerText;
                    const increment = target / speed;

                    if (current < target) {
                        stat.innerText = Math.ceil(current + increment);
                        setTimeout(incrementNumber, 10); // Adjust timeout for smoother animation
                    } else {
                        stat.innerText = target; // Ensure the final value is accurate
                    }
                };

                incrementNumber();
            });
        };

        animateNumbers();
    }, []);

    return (
        <div className="action-section">
            <div className="overlay"></div>
            <div className="action-content left-aligned">
                <h1 className="title">CALL TO ACTION</h1>
                <p className="description">
                    QUALIFIED EMPLOYEE WITH QUALITY WORK
                </p>
                <p className="description">
                    “Empower your infrastructure with our qualified employees delivering top-notch work. 
                    Our team is dedicated to excellence, ensuring quality in every project. 
                    Trust us to enhance and optimize your infrastructure with expertise and reliability.”
                </p>
                <button className="hire-btn">HIRE US NOW</button>
            </div>
            <div className="right-box">
                <div className="contact-info">
                    <a href="tel:+919820076716">
                        <i className="fas fa-phone-alt call-icon"></i>
                    </a>
                    <p className="contact-title">For Further Inquiries Call</p>
                    <p className="contact-number">(+91) 9820076716</p>
                </div>
                <div className="stats-section">
                    <div className="stat">
                        <i className="fas fa-smile"></i>
                        <p className="number" data-target="100">0</p>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat">
                        <i className="fas fa-user-cog"></i>
                        <p className="number" data-target="75">0</p>
                        <p>Skilled Employees</p>
                    </div>
                    <div className="stat">
                        <i className="fas fa-project-diagram"></i>
                        <p className="number" data-target="50">0</p>
                        <p>Projects Done</p>
                    </div>
                    <div className="stat">
                        <i className="fas fa-map-marker-alt"></i>
                        <p className="number" data-target="2">0</p>
                        <p>Office Branches</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionSection;
