import React from 'react';
import './WhatsNew.css';

function WhatsNew() {
    const newsItems = [
        {
            category: 'News',
            imageUrl: '/images/0B5A8137.jpg',
            author: 'Ray Saddiq',
            time: '3 mins',
            title: 'Rise at Seven Appoints Hollie Lovell as Senior Operations Lead'
        },
        {
            category: 'News',
            imageUrl: '/images/WRAS-Manchester-01.png',
            author: 'Ray Saddiq',
            time: '2 mins',
            title: 'Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion'
        },
        {
            category: 'News',
            imageUrl: '/images/0B5A7827.jpg',
            author: 'Carrie Rose',
            time: '2 mins',
            title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director"
        }
    ];

    return (
        <section className="whats-new-section">
            <div className="container">
                <div className="whats-new-header">
                    <div className="whats-new-title-wrapper">
                        <h2 className="whats-new-huge-title">What's</h2>
                        <div className="whats-new-image">
                            <img src="/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG" alt="Speaker" />
                        </div>
                        <h2 className="whats-new-huge-title">New</h2>
                    </div>
                    
                    <div className="whats-new-actions">
                        <a href="#" className="pill-btn light-pill whats-new-pill">Explore More Thoughts ↗</a>
                    </div>
                </div>

                <div className="whats-new-grid">
                    {newsItems.map((item, idx) => (
                        <a href="#" className="news-card group" key={idx}>
                            <div className="news-image-container">
                                <img src={item.imageUrl} alt={item.title} className="news-image" />
                                <div className="news-overlay">
                                    <span className="news-category">{item.category}</span>
                                </div>
                                <div className="news-hover-cursor">
                                    <span>↗</span>
                                </div>
                            </div>
                            <div className="news-meta">
                                <div className="news-author">
                                    <img src="/images/Screenshot-2025-06-10-at-12.13.46.png" alt="Author" className="author-avatar" />
                                    <span>{item.author}</span>
                                </div>
                                <div className="news-time">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <span>{item.time}</span>
                                </div>
                            </div>
                            <h3 className="news-title">{item.title}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhatsNew;
