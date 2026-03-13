import React, { useState, useEffect } from 'react';
import './App.css';

const initialEmojis = [
  { id: 1, char: '😃', count: 0 },
  { id: 2, char: '😊', count: 0 },
  { id: 3, char: '😎', count: 0 },
  { id: 4, char: '🤩', count: 0 },
  { id: 5, char: '😍', count: 0 },
];

const App = () => {
  const [emojis, setEmojis] = useState(() => {
    const saved = localStorage.getItem('votes');
    return saved ? JSON.parse(saved) : initialEmojis;
  });

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(emojis));
  }, [emojis]);

  const handleVote = (id) => {
    const updatedEmojis = emojis.map(emoji => 
      emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji
    );
    setEmojis(updatedEmojis);
  };

  const showResults = () => {
    const maxVotes = Math.max(...emojis.map(e => e.count));
    if (maxVotes === 0) return;
    const winnerData = emojis.find(e => e.count === maxVotes);
    setWinner(winnerData);
  };

  const clearResults = () => {
    setEmojis(initialEmojis);
    setWinner(null);
    localStorage.removeItem('votes');
  };

  return (
    <div className="container">
      <h1 className="title">Голосування за найкращий смайлик</h1>
      
      <div className="emoji-list">
        {emojis.map((emoji) => (
          <div key={emoji.id} className="emoji-item" onClick={() => handleVote(emoji.id)}>
            <span className="emoji-char">{emoji.char}</span>
            <span className="emoji-count">{emoji.count}</span>
          </div>
        ))}
      </div>

      <button className="btn-results" onClick={showResults}>Show Results</button>

      {winner && (
        <div className="results-display">
          <h2 className="results-title">Результати голосування:</h2>
          <h3 className="winner-header">Переможець:</h3>
          <div className="winner-icon">{winner.char}</div>
          <p className="winner-votes-text">Кількість голосів: {winner.count}</p>

          <div style={{ marginTop: '20px' }}>
            <button className="btn-clear" onClick={clearResults}>
              Очистити результати
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;