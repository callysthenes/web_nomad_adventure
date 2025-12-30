import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setMsg('');

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: { full_name: fullName }
                }
            });

            if (error) throw error;

            if (data.user) {
                setMsg('Registration successful! Please check your email for verification.');
                setTimeout(() => navigate('/login'), 3000);
            }
        } catch (error: any) {
            setMsg(error.message || 'Error occurred during registration');
        }
    };

    return (
        <div className="page-offset container">
            <div className="auth-wrapper">
                <h2>Join the Adventure</h2>
                <form onSubmit={handleRegister} className="booking-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" onChange={(e) => setFullName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} required minLength={6} />
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                </form>
                {msg && <p className="auth-msg">{msg}</p>}
                <p className="auth-footer">Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </div>
    );
};

export default Register;
