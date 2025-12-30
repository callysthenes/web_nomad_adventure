import React from 'react';

const Included: React.FC = () => {
    return (
        <section className="section" id="included">
            <div className="container">
                <div className="section-header">
                    <h2>What to Expect</h2>
                    <p>We provide a fully supported experience so you can focus on the ride.</p>
                </div>

                <div className="included-grid">
                    <div className="included-card success">
                        <h3>What's Included</h3>
                        <ul>
                            <li><strong>Motorcycle Transport:</strong> Round-trip transport of your bike across the border.</li>
                            <li><strong>Support Vehicle:</strong> 4x4 pickup truck carrying luggage, tools, and spares.</li>
                            <li><strong>Expert Guide:</strong> Lead guide on a motorcycle.</li>
                            <li><strong>Accommodation:</strong> 8 Nights in premium hotels and desert camps.</li>
                            <li><strong>Meals:</strong> Breakfast and Dinner included.</li>
                            <li><strong>Transfers:</strong> Airport pickup and drop-off in Marrakech.</li>
                        </ul>
                    </div>

                    <div className="included-card warning">
                        <h3>Not Included</h3>
                        <ul>
                            <li><strong>Flights:</strong> You must arrange your own travel to Marrakech.</li>
                            <li><strong>Fuel:</strong> Riders pay for their own fuel.</li>
                            <li><strong>Lunch:</strong> Daily lunch stops are flexible and paid individually.</li>
                            <li><strong>Insurance:</strong> Personal travel and medical insurance (Mandatory).</li>
                            <li><strong>Riding Gear:</strong> Please bring your own protective equipment.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Included;
