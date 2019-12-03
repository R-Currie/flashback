import React from 'react';
import Card from './Card';
import './App.css';
import {importedFlashCardDataFile} from './flashCardData';

const cardData = importedFlashCardDataFile;

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
                    {cardData.map((card, index) => <Card front={card.front} key={index} />)}
                </div>
            </div>
        );
    }
}

export default App;