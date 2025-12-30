import React from 'react';

const Concept: React.FC = () => {
    return (
        <section className="section" id="concept">
            <div className="container">
                <div className="section-header">
                    <h2>The Nomad Concept</h2>
                    <p>Fly & Ride. We take care of the heavy lifting.</p>
                </div>
                <div className="grid-2">
                    <div className="concept-text">
                        <h3>Seamless Logistics</h3>
                        <p>Our unique service manages the transport of your motorcycle across the border. You simply fly into Marrakech, and your bike is waiting for you.</p>
                    </div>
                    <div className="concept-card">
                        <h4>Full Support</h4>
                        <p><strong>Front:</strong> Expert Guide on Motorcycle</p>
                        <p><strong>Back:</strong> Support Pickup Truck for luggage, tools, and assistance.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Concept;
