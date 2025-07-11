// src/pages/Home.js
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem' }}>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        background: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80) no-repeat center/cover',
        color: 'white',
        borderRadius: 8,
        boxShadow: '0 4px 20px rgb(0 0 0 / 0.3)',
        marginBottom: '3rem'
      }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem', textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Overcome Life’s Obstacles with Timeless Hindu Wisdom
        </h1>
        <p style={{ fontSize: '1.3rem', maxWidth: 500, margin: '0 auto 2rem', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          Get personalized answers rooted in the Vedas, Upanishads, Gita, Puranas and more.
        </p>
        <button
          onClick={() => navigate('/quiz')}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgb(0 112 243 / 0.5)',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#005bb5'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#0070f3'}
        >
          Ask Your First Question
        </button>
      </section>

      {/* How It Works Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>
          How PowerWithin Works
        </h2>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: 1.7, fontSize: '1.1rem', color: '#444' }}>
          <li><strong>Ask your real-life question</strong></li>
          <li><strong>We personalize your answer based on your preferences</strong></li>
          <li><strong>Receive tailored wisdom: stories, mantras, daily practices</strong></li>
        </ol>
      </section>
    </main>
  );
}
