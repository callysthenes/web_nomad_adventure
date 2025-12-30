import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tours } from '../data/tours';
import BookingForm from '../components/BookingForm';

const TourDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const tour = tours.find(t => t.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!tour) {
        return <div className="container page-offset"><h2>Tour not found</h2><Link to="/tours">Back to tours</Link></div>;
    }

    return (
        <div className="page-offset tour-detail-page">
            <div className="tour-header">
                <div className="container">
                    <h1>{tour.name}</h1>
                    <p>{tour.fullDesc}</p>
                </div>
            </div>

            <div className="container">
                <div className="tour-layout">
                    <div className="tour-main">
                        <section className="detail-section">
                            <h3>Terrain & Route</h3>
                            <div className="tags">
                                {tour.terrain.map(t => <span key={t} className="tag">{t}</span>)}
                            </div>
                            <div className="gpx-placeholder">
                                GPX Track Visualizer Placeholder for {tour.name}
                            </div>
                        </section>

                        <section className="detail-section">
                            <h3>Q & A</h3>
                            <div className="qa-item">
                                <strong>Is this tour suitable for beginners?</strong>
                                <p>{tour.difficulty === 'Easy' ? 'Yes, this tour is designed for relaxed riding.' : 'No, prior off-road experience is recommended.'}</p>
                            </div>
                            <div className="qa-item">
                                <strong>What bike should I bring?</strong>
                                <p>We recommend mid-size adventure bikes (700cc-900cc) for this terrain.</p>
                            </div>
                        </section>
                    </div>

                    <div className="tour-sidebar">
                        <BookingForm tourId={tour.id} tourName={tour.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetail;
