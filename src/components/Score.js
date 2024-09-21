import React, {Component} from 'react'
//import './App.css'

class Score extends Component {
    render() {
        const {score, onReset} = this.props

        return (
            <div>
                <h2>Results</h2>
                <h4>Your score: {score}</h4>
                <button className="btn btn-primary" onClick={onReset}>
                    Reset
                </button>
            </div>
        )
    }
}

export default Score;
