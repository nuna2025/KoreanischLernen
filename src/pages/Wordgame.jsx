// import React from 'react'

import React, { useState, useEffect } from 'react';
import Main from '../components/section/Main'

import Card from '../components/contents/Card';
import { wordPairs } from '../data/wordParis';
import '../assets/scss/section/_game.scss';

const Wordgame = () => {
    // 1. State Management
    const [words, setWords] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [message, setMessage] = useState('');
    const [input, setInput] = useState('');

    // 2. Game Logic
    const initializeGame = () => {
        const shuffledWords = [...wordPairs].sort(() => Math.random() - 0.5).slice(0, 36);
        setWords(shuffledWords.map(word => ({
            ...word,
            isFlipped: false,
            isCompleted: false
        })));
        setRemaining(shuffledWords.length);
        setCompleted(0);
        setMessage('');
        setInput('');
    };

    useEffect(() => {
        initializeGame();
    }, []);

    // 3. Event Handlers
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const inputText = input.trim();
            if (!inputText) return;

            const matchedIndex = words.findIndex(
                (word) => !word.isCompleted && word.korean === inputText
            );

            if (matchedIndex !== -1) {
                const updatedWords = [...words];
                updatedWords[matchedIndex].isFlipped = true;
                setWords(updatedWords);

                setTimeout(() => {
                    updatedWords[matchedIndex].isCompleted = true;
                    setWords([...updatedWords]); // Trigger a re-render
                    setCompleted(prev => prev + 1);
                    setRemaining(prev => prev - 1);
                }, 600);

                setMessage('Richtig!');
                setInput('');
            } else {
                setMessage('Kein passendes Wort gefunden. Bitte versuchen Sie es erneut.');
                setTimeout(() => setMessage(''), 1500);
            }
        }
    };

    useEffect(() => {
        if (completed > 0 && completed === words.length) {
            setMessage('Herzlichen Glückwunsch! Sie haben alle Wörter richtig geraten!');
        }
    }, [completed, words.length]);

    // 4. Function to be executed when a card is clicked 
    const handleCardClick = (index) => {
      // Prevent already-matched cards from reacting to clicks.
      if (words[index].isCompleted) {
        return;
      }

      const updatedWords = [...words];
      // Toggle the isFlipped state.
      updatedWords[index].isFlipped = !updatedWords[index].isFlipped;
      setWords(updatedWords);
    };


    // 5. Render UI
    return (
      <Main
      title='korean word game'
      description='korean to german word game'>
        <section className='wordgamebody'>
          <div className="container">
              <h1>Koreanisch-Deutsch Wortspiel</h1>
              <div className="instructions">
                  <p>• Wenn Sie ein koreanisches Wort eingeben, dreht sich die entsprechende Karte um und zeigt das deutsche Wort.</p>
                  <p>• Wenn Sie das richtige Wort eingeben, wird die Karte grau.</p>
                  <p>• Wenn Sie alle Wörter richtig erraten, ist das Spiel beendet!</p>
              </div>
              <div className="game-info">
                  <div>Übrige Wörter: <span id="remaining-words">{remaining}</span></div>
                  <div>Geratene Wörter: <span id="completed-words">{completed}</span></div>
              </div>
              <div className="input-area">
                  <input
                      type="text"
                      id="word-input"
                      placeholder="Geben Sie das koreanische Wort ein."
                      autoFocus
                      value={input}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                  />
              </div>
              <div className="words-grid">
                  {words.map((word, index) => (
                      <Card
                          key={index}
                          korean={word.korean}
                          german={word.german}
                          isFlipped={word.isFlipped}
                          isCompleted={word.isCompleted}

                          // Pass the click event handler function as a prop to the Card component.
                          onClick={() => handleCardClick(index)}

                      />
                  ))}
              </div>
              <div id="message" className={message.includes('Herzlichen') ? 'success' : message ? 'error' : ''}>
                  {message}
              </div>
              <div className="controls">
                  <button onClick={initializeGame}>Spiel neustarten</button>
              </div>
          </div>
        </section>
      </Main>  
    );
};

export default Wordgame;