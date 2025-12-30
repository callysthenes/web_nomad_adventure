import React from 'react';

const MapSection: React.FC = () => {
    return (
        <section className="section" id="map">
            <div className="container">
                <div className="section-header">
                    <h2>Our Custom Trails</h2>
                    <p>Explore our exclusive GPX routes curated over years of exploration.</p>
                </div>
                <div className="map-container">
                    {/* Placeholder for Map Image/Interactive Map */}
                    <div className="map-placeholder">
                        <span>Interactive GPX Map Placeholder</span>
                        <p>Resolution: 1200x600</p>
                    </div>
                    <div className="map-legend">
                        <div className="legend-item">
                            <span className="dot difficulty-medium"></span> Mixed Terrain (Road/Gravel)
                        </div>
                        <div className="legend-item">
                            <span className="dot difficulty-hard"></span> Sand Dunes
                        </div>
                        <div className="legend-item">
                            <span className="dot difficulty-easy"></span> Scenic Coastal Roads
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
