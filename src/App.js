import React from 'react';
import Card from './Card';
import './App.css';
import {importedFlashCardDataFile} from './flashCardData';

const cardData = importedFlashCardDataFile;

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cardData: []
        };
    }

    componentDidMount() {
        this.setState({ cardData });
    }

    shuffleBackward = () => {
        const { cardData } = this.state;
        const newCardData = [cardData[6], ...cardData.slice(0, 6)];
        this.setState({ cardData: newCardData });
    }

    shuffleForward = () => {
        const { cardData } = this.state;
        const newCardData = [...cardData.slice(1), cardData[0]];
        this.setState({ cardData: newCardData });
    }

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
                    {this.state.cardData.map((card, index) => <Card front={card.front} key={index} />)}
                </div>
                <div className="buttons">
                    <button onClick={() => this.shuffleBackward()}>
                        &lt;
                    </button>
                    <button onClick={() => this.shuffleForward()}>
                        &gt;
                    </button>
                </div>
            </div>
        );
    }
}

export default App;