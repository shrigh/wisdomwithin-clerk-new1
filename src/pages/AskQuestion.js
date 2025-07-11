// src/pages/AskQuestion.js
import { useState } from "react";

export default function AskQuestion() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate AI wisdom backend or static response
    setSubmitted(true);
  };

  return (
    <main style={{ maxWidth: 700, margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Ask Your Question</h2>
      <p>To ask your question and unlock your personalized wisdom, please enter below.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Type your real-life question here..."
            value={question}
            onChange={e => setQuestion(e.target.value)}
            rows={5}
            required
            style={{ width: '100%', padding: '0.7rem', fontSize: '1rem', marginBottom: '1rem' }}
          />
          <button type="submit" style={{
            backgroundColor: '#0070f3', color: 'white', border: 'none',
            padding: '0.8rem 1.5rem', borderRadius: 6, cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Submit
          </button>
        </form>
      ) : (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#e0ffe0',
          borderRadius: 6,
          border: '1px solid #4CAF50',
          color: '#2e7d32'
        }}>
          <h3>Thank you for your question!</h3>
          <p>Your personalized wisdom will appear here soon.</p>
        </div>
      )}
    </main>
  );
}
