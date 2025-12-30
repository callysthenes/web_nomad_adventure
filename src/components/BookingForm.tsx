import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';
import { Link } from 'react-router-dom';

interface BookingFormProps {
    tourId?: string;
    tourName?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ tourId, tourName }) => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: 'Beginner',
        tour: tourName || '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                name: user.user_metadata.full_name || '',
                email: user.email || ''
            }));
        }
    }, [user]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate DB insert if no keys, or real insert if configured
        try {
            const { error } = await supabase.from('bookings').insert({
                user_id: user?.id, // Can be null for guest checkout if allowed
                tour_id: tourId,
                tour_name: formData.tour,
                customer_name: formData.name,
                customer_email: formData.email,
                customer_phone: formData.phone,
                experience_level: formData.experience,
                message: formData.message,
                status: 'pending'
            });

            if (error) throw error; // Will throw if table doesn't exist or keys missing

            setStatus('success');
            alert(`Thank you! Your interest for ${formData.tour} has been saved.`);
        } catch (err) {
            console.error("Database Error (Expected if no table/keys):", err);
            // Fallback for prototype behavior
            console.log("Fallback Logging:", formData);
            setStatus('success');
            alert(`Request received! (Logged to console as DB is not fully configured)`);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="booking-form-container">
            <h3>Book Your Adventure</h3>
            <p>Secure your spot for {tourName ? tourName : 'an expedition'}.</p>

            {!user && <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                <Link to="/login" style={{ color: 'var(--color-night)', fontWeight: 'bold' }}>Login</Link> to save your details automatically.
            </p>}

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

                <button type="submit" className="btn" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Processing...' : 'Request Booking'}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
