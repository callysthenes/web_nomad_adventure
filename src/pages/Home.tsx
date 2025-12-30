import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Itinerary from '../components/Itinerary';
import Included from '../components/Included';
import MapSection from '../components/Map';
import Details from '../components/Details';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    useEffect(() => {
        // Re-trigger animations when mounting Home
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('fade-in-section');
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Hero />
            <Concept />
            <Itinerary />
            <Included />
            <MapSection />
            <Details />
            <Contact />
        </>
    );
};

export default Home;
