import React from 'react';

const Itinerary: React.FC = () => {
    const days = [
        { day: "Day 1", title: "Arrival in Marrakech", desc: "Meet and greet, bike handover." },
        { day: "Day 2", title: "Atlas Mountains Crossing", desc: "Ride through Tizi n'Tichka pass." },
        { day: "Day 3", title: "Gateway to the Desert", desc: "Ouarzazate to Merzouga." },
        { day: "Day 4", title: "Dunes of Erg Chebbi", desc: "Full day exploring the deep sand." },
        { day: "Day 5", title: "The Southern Loop", desc: "Zagora and the Draa Valley." },
        { day: "Day 6", title: "Anti-Atlas Routes", desc: "Twisty mountain roads." },
        { day: "Day 7", title: "Coastal Ride", desc: "Heading towards the Atlantic." },
        { day: "Day 8", title: "Return to Marrakech", desc: "Final stretch and farewell dinner." },
        { day: "Day 9", title: "Departure", desc: "Transfers to the airport." },
    ];

    return (
        <section className="section" id="itinerary">
            <div className="container">
                <div className="section-header">
                    <h2>9-Day Expedition</h2>
                </div>
                <div className="timeline">
                    {days.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="day-number">{item.day}</div>
                            <div className="day-content">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Itinerary;
