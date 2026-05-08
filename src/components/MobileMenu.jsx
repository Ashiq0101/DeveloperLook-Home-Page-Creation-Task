import React from 'react';
import './MobileMenu.css';

function MobileMenu({ isOpen }) {
    return (
        <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
            <div className="mobile-menu-inner">
                <nav className="mobile-nav">
                    <ul>
                        <li><a href="#">Search & Growth Strategy</a></li>
                        <li><a href="#">Onsite SEO</a></li>
                        <li><a href="#">Content Experience</a></li>
                        <li><a href="#">B2B Marketing</a></li>
                        <li><a href="#">Digital PR</a></li>
                        <li><a href="#">Social Media & Campaigns</a></li>
                        <li><a href="#">Data & Insights</a></li>
                        <li><a href="#">Social SEO/Search</a></li>
                    </ul>
                </nav>
                
                <div className="mobile-secondary-nav">
                    <ul>
                        <li><a href="#">Services +</a></li>
                        <li><a href="#">Industries +</a></li>
                        <li><a href="#">International +</a></li>
                        <li><a href="#">About +</a></li>
                        <li><a href="#">Work <span className="nav-badge">25</span></a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Webinar</a></li>
                    </ul>
                </div>

                <div className="mobile-menu-footer">
                    <a href="#" className="mobile-cta">Get in touch</a>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
