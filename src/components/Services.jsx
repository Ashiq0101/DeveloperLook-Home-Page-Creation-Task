import React from 'react';
import './Services.css';

function Services() {
    const leftServices = [
        { title: 'Digital PR', image: '/images/Screenshot-2025-06-23-at-22.39.35.png' },
        { title: 'Search & Growth Strategy', image: '/images/Screenshot-2025-06-25-at-14.37.50.png' },
        { title: 'Data & Insights', image: '/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG', borderNone: true },
    ];

    const rightServices = [
        { title: 'Organic Social & Content', image: '/images/Screenshot-2025-07-01-at-20.31.18.png' },
        { title: 'Content Experience', image: '/images/0B5A7499.jpg' },
        { title: 'Onsite SEO', image: '/images/Screenshot-2025-06-24-at-00.20.47.png', borderNone: true },
    ];

    return (
        <section className="services-section">
            <div className="container">
                <div className="services-top">
                    <a href="#" className="pill-btn light-pill center-pill">Explore Our Work ↗</a>
                </div>

                <div className="services-header">
                    <div className="services-title-wrapper">
                        <h2 className="services-huge-title">Our</h2>
                        <div className="services-image">
                            <img src="/images/IMG_5079.JPG" alt="Team" />
                        </div>
                        <h2 className="services-huge-title">Services</h2>
                    </div>
                    
                    <div className="services-actions">
                        <a href="#" className="pill-btn light-pill hidden-mobile">View All Services ↗</a>
                    </div>
                </div>


                <div className="services-grid">
                    <div className="service-column">
                        {leftServices.map((service, idx) => (
                            <div className={`service-item ${service.borderNone ? 'border-none' : ''}`} key={idx}>
                                <div className="service-item-inner">
                                    <img src={service.image} className="service-bg" alt={service.title} />
                                    <h3 className="service-title">
                                        <span className="service-arrow">↗</span>
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="service-column">
                        {rightServices.map((service, idx) => (
                            <div className={`service-item ${service.borderNone ? 'border-none' : ''}`} key={idx}>
                                <div className="service-item-inner">
                                    <img src={service.image} className="service-bg" alt={service.title} />
                                    <h3 className="service-title">
                                        <span className="service-arrow">↗</span>
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
