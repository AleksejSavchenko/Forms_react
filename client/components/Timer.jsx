import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            isPaused: false
        };
        this.handlePauseStart = this.handlePauseStart.bind(this);
        this.handleClearTimer = this.handleClearTimer.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        if(!this.state.isPaused){
            this.setState({ seconds: this.state.seconds + 1 });
        }
    }

    handlePauseStart() {
        this.setState({
            isPaused: !this.state.isPaused
        })
    }

    handleClearTimer() {
        this.setState({
            seconds: 0
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
            let text = this.state.isPaused ? 'Start' : 'Pause';

        return (
            <div className="timer">
                <button className={text} onClick={this.handlePauseStart}>{text}</button>
                <h4> Уже прошло {this.state.seconds} секунд </h4>
                <button className="clear" onClick={this.handleClearTimer}>Clear</button>
            </div>
        );
    }
}

export default Timer;