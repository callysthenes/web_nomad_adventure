import React from 'react';

const Details: React.FC = () => {
    return (
        <section className="section" id="details">
            <div className="container">
                <div className="section-header">
                    <h2>Tour Details</h2>
                </div>
                <div className="details-grid">
                    <div className="detail-item">
                        <strong>Season</strong>
                        <p>Mid-September to Mid-May</p>
                    </div>
                    <div className="detail-item">
                        <strong>Frequency</strong>
                        <p>2 Tours per Month</p>
                    </div>
                    <div className="detail-item">
                        <strong>Group Size</strong>
                        <p>Max 6 People (Exclusive)</p>
                    </div>
                    <div className="detail-item">
                        <strong>Fleet</strong>
                        <p>Bring your own or Ask for rental</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
