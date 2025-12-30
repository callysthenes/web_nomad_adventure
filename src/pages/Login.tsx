import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;
            navigate('/');
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
                        <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
                {errorMsg && <p className="auth-error">{errorMsg}</p>}
                <p className="auth-footer">New rider? <Link to="/register">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;
