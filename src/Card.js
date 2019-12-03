import React from 'react';

class Card extends React.Component {
    render(){
        return(
            <div className='Card -front'>
                <div className="front">
                    <h3 className='question'>{this.props.question}</h3>
                    <p className='hint'>
                        <span>Hint: </span>{this.props.hint}
                    </p>
                </div>
            </div>
        )
    }
}


export default Card;