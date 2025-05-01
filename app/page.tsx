'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import type { CSSProperties } from 'react';

export default function Home() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <main style={styles.container}>
                <div style={styles.card}>
                    <h1 style={styles.title}>CS391 OAuth</h1>
                    <button style={styles.button} onClick={() => signIn('github')}>
                        Sign in with GitHub
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>
                    Welcome, <span style={styles.highlight}>{session.user?.name}</span>
                </h1>
                {session.user?.image && (
                    <img
                        src={session.user.image}
                        alt="Profile Picture"
                        style={styles.avatar}
                    />
                )}
                <p style={styles.subtitle}>{session.user?.email}</p>
                <button style={styles.button} onClick={() => signOut()}>
                    Sign out
                </button>
            </div>
        </main>
    );
}

const styles: {
    container: CSSProperties;
    card: CSSProperties;
    title: CSSProperties;
    highlight: CSSProperties;
    subtitle: CSSProperties;
    avatar: CSSProperties;
    button: CSSProperties;
} = {
    container: {
        backgroundColor: '#f5f7fa',
        color: '#222',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        background: 'white',
        borderRadius: '20px',
        padding: '3rem 4rem',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '1.5rem',
    },
    highlight: {
        color: '#6a5acd',
    },
    subtitle: {
        fontSize: '1.1rem',
        marginTop: '0.5rem',
        color: '#555',
    },
    avatar: {
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        margin: '1rem auto',
    },
    button: {
        marginTop: '2rem',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        color: 'white',
        backgroundColor: '#6a5acd',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: '0.3s ease',
    },
};
