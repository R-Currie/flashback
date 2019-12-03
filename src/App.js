import React from 'react';
import Card from './Card';
import './App.css';

var cardData = { 
    front: {
        question: 'You may know that React was created at _________.',
        hint: 'This company\'s site is known for being written in PHP.'
    }
}

class App extends React.Component {
    render() {
        return(
            <div className="app">
                <h1 className='title'>
                    Flashback
                </h1>
                <p className="sub-title">
                    An interactive flashcard app.
                </p>
                <div className='card-list'>
                    <Card question={cardData.front.question} hint={cardData.front.hint} />
                </div>
            </div>
        );
    }
}

export default App;