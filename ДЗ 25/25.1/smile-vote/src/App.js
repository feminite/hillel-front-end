import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    const savedVotes = localStorage.getItem('votes');
    this.state = {
      emojis: savedVotes ? JSON.parse(savedVotes) : [
        { id: 1, char: '😃', count: 0 },
        { id: 2, char: '😊', count: 0 },
        { id: 3, char: '😎', count: 0 },
        { id: 4, char: '🤩', count: 0 },
        { id: 5, char: '😍', count: 0 },
      ],
      winner: null
    };
  }

  handleVote = (id) => {
    const updatedEmojis = this.state.emojis.map(emoji =>
      emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji
    );

    this.setState({ emojis: updatedEmojis }, () => {
      localStorage.setItem('votes', JSON.stringify(this.state.emojis));
    });
  };

  showResults = () => {
    const { emojis } = this.state;
    const maxVotes = Math.max(...emojis.map(e => e.count));
    
    if (maxVotes > 0) {
      const winnerData = emojis.find(e => e.count === maxVotes);
      this.setState({ winner: winnerData });
    }
  };

  clearResults = () => {
    const initialEmojis = this.state.emojis.map(e => ({ ...e, count: 0 }));
    this.setState({ emojis: initialEmojis, winner: null });
    localStorage.removeItem('votes');
  };

  render() {
    const { emojis, winner } = this.state;

    return (
      <div className="container">
        <h1 className="title">Голосування за найкращий смайлик</h1>
        
        <div className="emoji-list">
          {emojis.map((emoji) => (
            <div key={emoji.id} className="emoji-item" onClick={() => this.handleVote(emoji.id)}>
              <span className="emoji-char">{emoji.char}</span>
              <span className="emoji-count">{emoji.count}</span>
            </div>
          ))}
        </div>

        <button className="btn-results" onClick={this.showResults}>Show Results</button>

        {winner && (
          <div className="results-display">
            <h2 className="results-title">Результати голосування:</h2>
            <h3 className="winner-header">Переможець:</h3>
            <div className="winner-icon">{winner.char}</div>
            <p className="winner-votes-text">Кількість голосів: {winner.count}</p>
            
            <div style={{ marginTop: '20px' }}>
              <button className="btn-clear" onClick={this.clearResults}>
                Очистити результати
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;