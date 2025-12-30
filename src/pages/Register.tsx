import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [fullName, setFullName] = useState('');
    const [msg, setMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();
    const { signUp } = useAuth();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setMsg('');
        setErrorMsg('');

        try {
            await signUp(fullName, email, phone);
            setMsg('Registration successful!');
            setTimeout(() => navigate('/'), 1500);
        } catch (error: any) {
            setErrorMsg(error.message || 'Error occurred during registration');
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
                        <label>Phone</label>
                        <input type="tel" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                </form>
                {msg && <p className="auth-msg">{msg}</p>}
                {errorMsg && <p className="auth-error">{errorMsg}</p>}
                <p className="auth-footer">Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </div>
    );
};

export default Register;
