import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Get in Touch</h2>
                    <p>Ready for the adventure of a lifetime? Send us a message.</p>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Contact Info</h3>
                        <p><strong>Email:</strong> <a href="mailto:info@nomadadventure.com">info@nomadadventure.com</a></p>
                        <p><strong>Phone:</strong> +212 555 123 456</p>
                        <p><strong>Location:</strong> Marrakech, Morocco</p>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={5} placeholder="Tell us about your trip plans..."></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
