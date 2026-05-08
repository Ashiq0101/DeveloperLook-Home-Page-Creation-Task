import React from 'react';
import './LogosIntroSection.css';
import { logosHtml } from './LogosData';

function LogosIntroSection() {
    return (
        <section className="logos-intro-section">
            <div className="logos-marquee-wrapper">
                <div className="marquee-label">
                    <h2>The agency behind ...</h2>
                </div>
                
                <div className="marquee-container">
                    <div className="marquee-blur-left"></div>
                    <div 
                        className="logos-marquee-track" 
                        dangerouslySetInnerHTML={{ __html: logosHtml + logosHtml }} 
                    />
                    <div className="marquee-blur-right"></div>
                </div>
            </div>

            <div className="intro-split-section">
                <div className="intro-split-left">
                    <p className="split-left-text">
                        A global team of search-first content marketers<br />
                        engineering semantic relevancy & category<br />
                        signals for both the internet and people
                    </p>
                </div>
                <div className="intro-split-right">
                    <h1 className="split-huge-title">
                        Driving Demand &<br />Discovery
                        <span className="title-inline-image">
                            <img
                                src="/images/maxresdefault_2025-10-22-141838_nmnu.jpg"
                                alt="Sign"
                            />
                        </span>
                    </h1>
                    <div className="split-actions">
                        <a href="#" className="pill-btn light-pill">
                            <div className="btn-inner">
                                <span className="btn-text-main">
                                    Our Story 
                                    <svg className="btn-arrow" width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '0.4rem'}}><path d="M1 13L13 1M13 1V10M13 1H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                                <span className="btn-text-clone" aria-hidden="true">
                                    Our Story 
                                    <svg className="btn-arrow" width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '0.4rem'}}><path d="M1 13L13 1M13 1V10M13 1H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </a>
                        <a href="#" className="pill-btn light-pill-ghost">
                            <div className="btn-inner">
                                <span className="btn-text-main">
                                    Our Services 
                                    <svg className="btn-arrow" width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '0.4rem'}}><path d="M1 13L13 1M13 1V10M13 1H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                                <span className="btn-text-clone" aria-hidden="true">
                                    Our Services 
                                    <svg className="btn-arrow" width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '0.4rem'}}><path d="M1 13L13 1M13 1V10M13 1H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LogosIntroSection;