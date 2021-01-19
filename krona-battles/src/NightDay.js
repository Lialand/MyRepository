import React from 'react'

class NightDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: {
                activeDay: '',
                activeNight: 'active',
            }
        }                    
    }

    switchNight() {
        this.setState({
            class: {
                activeDay: '',
                activeNight: 'active',
            }}
        );
    }

    switchDay() {
        this.setState({
            class: {
                activeDay: 'active',
                activeNight: '',
            }}
        )
    }

    render() {
        return(
            <div>
                <div id="night" className={this.state.class.activeNight} onClick={ () => this.switchNight() }>
                    <p>Ночь <img src='vectors/night.svg'></img></p>
                </div>
                <div id="day" className={this.state.class.activeDay} onClick={ () => this.switchDay() }>
                    <p>День <img src='vectors/day.svg'></img></p>
                </div>
            </div>
        )
    }
}

export default NightDay;