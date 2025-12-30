import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');
        setSuccessMsg('');

        try {
            await signIn(email);
            setSuccessMsg('Login successful!');
            setTimeout(() => navigate('/'), 1000);
        } catch (error: any) {
            setErrorMsg(error.message || 'Failed to login');
        }
    };

    return (
        <div className="page-offset container">
            <div className="auth-wrapper">
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin} className="booking-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your registered email" />
                    </div>
                    {/* Password removed for simple prototype auth */}
                    <button type="submit" className="btn">Login</button>
                </form>
                {successMsg && <p className="auth-msg">{successMsg}</p>}
                {errorMsg && <p className="auth-error">{errorMsg}</p>}
                <p className="auth-footer">New rider? <Link to="/register">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;
