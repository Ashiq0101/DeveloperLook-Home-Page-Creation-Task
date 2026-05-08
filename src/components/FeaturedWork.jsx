import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeaturedWork.css';

gsap.registerPlugin(ScrollTrigger);

function FeaturedWork() {
    const triggerRef = useRef(null);
    const imagesRef = useRef(null);
    const headingsContainerRef = useRef(null);
    const headingsRef = useRef([]);
    const cursorRef = useRef(null);

    const [activeProject, setActiveProject] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const projects = [
        { 
            name: 'SIXT', years: '[2023-2025]', category: 'Car rental', color: '#cb7b3a',
            subtitle: 'An extra 3m clicks regionally through SEO', 
            imageUrl: '/images/sixt-1.jpg'
        },
        { 
            name: 'Dojo - B2B', years: '[2021-2025]', category: 'Card Machines', color: '#fdd8c4',
            subtitle: 'A B2B success story for Dojo card machines', 
            imageUrl: '/images/dojo-go-product-shot-1.jpg'
        },
        { 
            name: 'Magnet Trade - B2B', years: '[2023-2024]', category: 'B2B', color: '#d8c4fd',
            subtitle: 'A full service SEO success story 170%+ increase', 
            imageUrl: '/images/Screenshot-2026-02-07-at-17.01.43.png'
        },
        { 
            name: 'Leading E Sim brand globally', years: '[2023-2025]', category: 'Esims', color: '#cb7b3a',
            subtitle: 'Increasing brand and non brand visibility UK/ES', 
            imageUrl: '/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg'
        },
        { 
            name: 'JD Sports', years: '[2025]', category: 'Trainers', color: '#3a8ccb',
            subtitle: '65% up YoY in clicks for JDSports FR, IT, ES', 
            imageUrl: '/images/maxresdefault_2025-10-22-141838_nmnu.jpg'
        },
        { 
            name: 'Parkdean Resorts', years: '[2019-2025]', category: 'Easter Breaks', color: '#d2b59d',
            subtitle: 'Dominating Google and AI search', 
            imageUrl: '/images/easter-breaks.jpg'
        },
        { 
            name: 'Pooky', years: '[2025]', category: 'Rechargeable Lights', color: '#39b0bd',
            subtitle: 'Driving demand for Pooky Rechargeable Lights', 
            imageUrl: '/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg'
        },
        { 
            name: 'Parkdean Resorts', years: '[2019-2025]', category: 'UK holidays', color: '#d29dd0',
            subtitle: 'Social search and multi channel content to #1', 
            imageUrl: '/images/1.JPG'
        },
        { 
            name: 'Revolution Beauty', years: '[2022-2025]', category: 'Beauty Dupes', color: '#fecacc',
            subtitle: "Building the UK's leading beauty dupe brand", 
            imageUrl: '/images/Screenshot-2025-06-10-at-12.13.46.png'
        },
        { 
            name: 'Lloyds Pharmacy', years: '[2022-23]', category: 'STI tests', color: '#60dcfb',
            subtitle: 'Driving category leadership for STI tests', 
            imageUrl: '/images/Screenshot-2025-07-04-at-12.50.54.png'
        },
        { 
            name: 'PrettyLittleThing', years: '[2021-2023]', category: 'Outfits', color: '#fecacc',
            subtitle: 'Driving discovery for everything "outfits" for PLT', 
            imageUrl: '/images/Screenshot-2025-06-23-at-14.43.56.png'
        }
    ];

    useEffect(() => {
        const cursor = cursorRef.current;
        
        const moveCursor = (e) => {
            if (cursor) {
                const left = e.clientX - cursor.clientWidth / 2;
                const top = e.clientY - cursor.clientHeight / 2;
                cursor.style.left = `${left}px`;
                cursor.style.top = `${top}px`;
            }
        };

        window.addEventListener('pointermove', moveCursor);

        return () => {
            window.removeEventListener('pointermove', moveCursor);
        };
    }, []);

    useEffect(() => {
        if (isHovering) {
            document.body.classList.add('hide-cursor');
            document.documentElement.classList.add('hide-cursor');
        } else {
            document.body.classList.remove('hide-cursor');
            document.documentElement.classList.remove('hide-cursor');
        }
        
        return () => {
            document.body.classList.remove('hide-cursor');
            document.documentElement.classList.remove('hide-cursor');
        }
    }, [isHovering]);

    useEffect(() => {
        let mm = gsap.matchMedia();
        const trigger = triggerRef.current;
        const images = imagesRef.current;
        const headingsContainer = headingsContainerRef.current;

        mm.add("(min-width: 1024px)", () => {
            const listHeight = headingsContainer.scrollHeight;
            const listContainerHeight = headingsContainer.parentElement.offsetHeight;
            
            const imagesHeight = images.scrollHeight;
            const imagesContainerHeight = trigger.offsetHeight; // 100vh
            
            // Set scroll distance to the larger of the two overflows, or a fixed reasonable amount
            const scrollDistance = Math.max(imagesHeight - imagesContainerHeight, 1500);

            // Pin the entire layout
            ScrollTrigger.create({
                trigger: trigger,
                start: 'top top',
                end: `+=${scrollDistance}`,
                pin: true,
                scrub: true,
                onUpdate: (self) => {
                    const index = Math.min(projects.length - 1, Math.floor(self.progress * projects.length));
                    setActiveProject(index);
                }
            });

            // Animate left side (text) up exactly to its end
            if (listHeight > listContainerHeight) {
                gsap.to(headingsContainer, {
                    y: -(listHeight - listContainerHeight),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: trigger,
                        start: 'top top',
                        end: `+=${scrollDistance}`,
                        scrub: true,
                    }
                });
            }

            // Animate right side (images) up exactly to its end
            if (imagesHeight > imagesContainerHeight) {
                gsap.to(images, {
                    y: -(imagesHeight - imagesContainerHeight),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: trigger,
                        start: 'top top',
                        end: `+=${scrollDistance}`,
                        scrub: true,
                    }
                });
            }
        });

        return () => mm.revert(); // Cleanup
    }, []);

    return (
        <section 
            className="featured-work"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div 
                className={`custom-cursor ${isHovering ? 'scale-100' : ''}`}
                ref={cursorRef}
            >
                <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M13 1V10M13 1H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <div className="container featured-work-layout" ref={triggerRef}>
                <div className="featured-sidebar">
                    <h2 className="section-title">Featured Work</h2>
                    
                    <div className="work-list-container" style={{ overflow: 'hidden', height: '60vh', position: 'relative' }}>
                        <div className="fade-top"></div>
                        <div className="fade-bottom"></div>
                        <ul className="work-list" ref={headingsContainerRef}>
                            {projects.map((project, idx) => (
                                <li key={idx} ref={el => headingsRef.current[idx] = el}>
                                    <a href="#" 
                                       className={`work-list-item ${idx === activeProject ? 'active' : ''}`}
                                       onMouseEnter={() => setActiveProject(idx)}
                                       onMouseLeave={() => setActiveProject(null)}
                                    >
                                        <span className="work-list-name">{project.name}</span>
                                        <span className="work-list-years">{project.years}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="featured-cards" ref={imagesRef}>
                    {projects.map((project, idx) => (
                        <div 
                            className={`work-card-large ${idx === activeProject ? 'is-active' : ''}`} 
                            key={idx}
                            onMouseEnter={() => setActiveProject(idx)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            {project.imageUrl && (
                                <img src={project.imageUrl} alt={project.name} className="card-bg-image" />
                            )}
                            
                            <div className="card-hover-overlay" style={{ backgroundColor: project.color }}>
                                <h3 className="card-hover-text">{project.subtitle}</h3>
                            </div>
                            
                            <div className="card-bottom">
                                <div className="card-pill">
                                    <span className="search-icon">⚲</span> {project.category} ↗
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedWork;
