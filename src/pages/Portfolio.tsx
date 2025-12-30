import React from 'react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';

const Portfolio: React.FC = () => {
    return (
        <div className="page-offset">
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Expeditions</h2>
                        <p>Choose your challenge. From the Atlas peaks to the deep Sahara.</p>
                    </div>

                    <div className="portfolio-grid">
                        {tours.map(tour => (
                            <div key={tour.id} className="tour-card">
                                <div className="tour-image-placeholder">
                                    {tour.imagePlaceholder}
                                </div>
                                <div className="tour-content">
                                    <div className="tour-meta">
                                        <span className="tour-badge">{tour.duration}</span>
                                        <span className={`tour-badge difficulty-${tour.difficulty.toLowerCase()}`}>{tour.difficulty}</span>
                                    </div>
                                    <h3>{tour.name}</h3>
                                    <p>{tour.shortDesc}</p>
                                    <Link to={`/tours/${tour.id}`} className="btn btn-small">View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
