import React, { createContext, useState, useEffect, useContext } from 'react';

// Use a simple User type matching our SQLite DB
export interface User {
    id: number;
    name: string;
    email: string;
    phone?: string;
}

interface AuthContextType {
    user: User | null;
    signIn: (email: string) => Promise<void>;
    signUp: (name: string, email: string, phone: string) => Promise<void>;
    signOut: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false); // No automatic session check for prototype

    // Load user from local storage if exists (simple persistence)
    useEffect(() => {
        const saved = localStorage.getItem('nomad_user');
        if (saved) {
            setUser(JSON.parse(saved));
        }
    }, []);

    const signIn = async (email: string) => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Login failed');

            setUser(data.user);
            localStorage.setItem('nomad_user', JSON.stringify(data.user));
        } finally {
            setLoading(false);
        }
    };

    const signUp = async (name: string, email: string, phone: string) => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3001/api/customers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Registration failed');

            // Auto login after signup
            const newUser = { id: data.data.id, name, email, phone };
            setUser(newUser);
            localStorage.setItem('nomad_user', JSON.stringify(newUser));
        } finally {
            setLoading(false);
        }
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('nomad_user');
    };

    const value = {
        user,
        signIn,
        signUp,
        signOut,
        loading
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
