import React, { Component } from 'react';
import './NumberGuessing.css';

/**
 * 1. Select level
 * 2. Add guessed Number
 *  2.1 high show high 
 *  2.2 Low show less
 *  2.3 Matches - show success 
 */

const GAME_LEVEL = [
    { value: 1, name: "Easy" },
    { value: 2, name: "Medium" },
    { value: 3, name: "Hard" },
    { value: 4, name: "Pro" },
];

class NumberGuessing extends Component {
    _input = React.createRef();
    praiseList = ['Exceptional', 'Remarkable', 'Fascinating', 'Terrific', 'Phenomenal'];
    praiseEmojiList = ['🎉', '🥳', '🎊', '⚡', '🏆'];
    constructor(props) {
        super(props);
        this.state = {
            // level: { value: 1, name: "Easy" },
            level: '',
            score: 0,
            guessedNumber: '',
            previouslyGuessedNumbers: [],
            actualNumber: undefined,
            isGameOver: false,
            showGameHint: false
        };
        console.log("Component Init");
    }

    render() {
        const LevelSelection = () => {
            return (
                <>
                    {
                        GAME_LEVEL.map((item, index) =>
                            <React.Fragment key={index}>
                                <button className="btn btn-outline-primary m-4 btn-lg" onClick={this.updateLevel.bind(this, item)}>{item.name}</button>
                            </React.Fragment>
                        )
                    }
                </>
            )
        }

        const GameOver = () => {
            return (
                <>
                    <div className="row m-5">
                        <p className="p-0 text-center display-1 icon-spin">{this.praiseEmojiList[Math.floor(Math.random() * 5)]}</p>
                        <p className="p-0 text-center display-6">{this.praiseList[Math.floor(Math.random() * 5)]}! You won the game...</p>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-primary mt-4" onClick={this.playAgain.bind(this)}>Play again!</button>
                            <span className="text-muted small text-center">Total Score: {this.state.score}</span>
                        </div>
                    </div>
                </>
            )
        }

        const PlayGame = () => {
            return (
                <>
                    <div className="row m-0">
                        <div className="col-6 bg-warning p-2">Current Level: <span className="badge bg-primary">{this.state?.level?.name}</span> </div>
                        <div className="col-6 text-end bg-warning p-2">Score: <span className="badge bg-secondary">{this.state.score}</span></div>
                        <div className="input-group mb-3 mt-3 ml-3 mr-4">
                            <input type="number" className="form-control" placeholder="44" onKeyPress={this.enterKeyHandler.bind(this)} onChange={event => this.inputChangeListener(event)} required={true} ref={c => (this._input = c)} autoFocus={true} max={4} value={this.state.guessedNumber} />
                            <button className="btn btn-primary" onClick={this.updateGuessedNumberHandler.bind(this)}>Wild Guess</button>
                        </div>
                        {
                            this.state.previouslyGuessedNumbers.map((item, index) =>
                                <React.Fragment key={index}>
                                    <span className="badge bg-dark w-auto m-2 mt-1 rounded-pill p-2">{item.value} {(+item.value > this.state.actualNumber) ? "🔼" : "🔽"}</span>
                                </React.Fragment>
                            )
                        }
                        <div className="mb-5"></div>

                    </div>

                </>
            );
        }


        return (
            <div className="number-guessing container" >
                <h1 className="p-2 text-center display-3">Number guessing game</h1>
                {/* Level selection */}
                <div className="card" >
                    {/* <GameOver /> */}
                    {this.state.isGameOver ? <GameOver /> : (this.state.level ? <PlayGame /> : <LevelSelection />)}
                </div >
            </div >
        );
    }

    updateLevel(...args) {
        if (args && args.length > 0 && this.state.level !== args[0].value) {
            console.log('User selected game level', args[0]);
            this.prepareNumberToGuess(args[0].value);
            this.setState({ level: args[0] });
        }

    }

    prepareNumberToGuess(level = 1) {
        let numberToGuess = 0;
        const randomNumberLastValue = parseInt(new Array(level).fill(9).join(''))
        numberToGuess = Math.floor(Math.random() * randomNumberLastValue) + 1;
        console.log('Here is the number', numberToGuess);
        this.setState({ actualNumber: numberToGuess });
    }

    updateGuessedNumberHandler() {
        this.setState({ showGameHint: false });
        if (!this.valueExist(this.state.guessedNumber) && this.state.guessedNumber) {
            if (this.state.actualNumber === +this.state.guessedNumber) {
                const currentScore = this.state.score;
                const increaseScore = new Array(this.state.level.value || 1).fill(10).map(Number).reduce((acc, cv) => acc += cv, 0);
                const updatedScore = currentScore + increaseScore;
                this.setState({ isGameOver: true, score: updatedScore });
            } else {
                const originalState = this.state.previouslyGuessedNumbers;
                const newStateItem = [{ value: this.state.guessedNumber, idx: this.state.previouslyGuessedNumbers ? this.state.previouslyGuessedNumbers.length + 1 : 0 }];
                Array.prototype.push.apply(originalState, newStateItem);
                this.setState({ previouslyGuessedNumbers: originalState, guessedNumber: undefined });
                console.log(this.state);
                this._input.focus();
            }

        } else {
            this.setState({ guessedNumber: undefined })
        }
    }

    playAgain = () => {
        this.setState({
            level: '',
            guessedNumber: '',
            previouslyGuessedNumbers: [],
            actualNumber: undefined,
            isGameOver: false
        })
    }

    enterKeyHandler(event) {
        console.log('Enter key pressed');
        if (event && event.key === 'Enter') {
            this.setState({ guessedNumber: event.target.value });
            this.updateGuessedNumberHandler();
        }
    }

    inputChangeListener(event) {
        this.setState({ guessedNumber: event.target.value });
    }

    valueExist(value) {
        return this.state.previouslyGuessedNumbers.map(x => x.value).includes(value);
    }

}

export default NumberGuessing;