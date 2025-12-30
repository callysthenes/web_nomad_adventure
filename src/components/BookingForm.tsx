import React, { useState } from 'react';

interface BookingFormProps {
    tourId?: string;
    tourName?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ tourId, tourName }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: 'Beginner',
        tour: tourName || '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting Booking Data to Database:", { ...formData, tourId });
        alert(`Thank you! Your interest for ${formData.tour} has been recorded.`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="booking-form-container">
            <h3>Book Your Adventure</h3>
            <p>Secure your spot for {tourName ? tourName : 'an expedition'}.</p>

            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Riding Experience</label>
                    <select name="experience" value={formData.experience} onChange={handleChange}>
                        <option value="Beginner">Beginner (Road Only)</option>
                        <option value="Intermediate">Intermediate (Some Gravel)</option>
                        <option value="Advanced">Advanced (Enduro/Offroad)</option>
                        <option value="Expert">Expert (Dakar Style)</option>
                    </select>
                </div>

                {!tourName && (
                    <div className="form-group">
                        <label>Preferred Tour</label>
                        <input type="text" name="tour" value={formData.tour} onChange={handleChange} placeholder="e.g. Morocco Atlas" />
                    </div>
                )}

                <div className="form-group">
                    <label>Additional Notes</label>
                    <textarea name="message" rows={3} value={formData.message} onChange={handleChange} />
                </div>

                <button type="submit" className="btn">Request Booking</button>
            </form>
        </div>
    );
};

export default BookingForm;
