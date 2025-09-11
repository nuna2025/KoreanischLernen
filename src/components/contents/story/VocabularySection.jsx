import React from 'react';

const pronounce = (text, lang) => {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'ko' ? 'ko-KR' : 'de-DE';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        utterance.volume = 1;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Sorry, your browser does not support speech functionality.');
    }
};

const VocabularySection = ({ vocabList }) => {
    return (
        <div className="vocabulary-section">
            <h2>Hauptwörter</h2>
            {vocabList.map((word, index) => (
                <div key={index} className="word-card">
                    <div className="korean-word">
                        <button className="pronunciation-btn" onClick={() => pronounce(word.korean, 'ko')}>▶</button>{word.korean}
                    </div>
                    <div className="german-word">{word.german}</div>
                </div>
            ))}
        </div>
    );
};

export default VocabularySection;