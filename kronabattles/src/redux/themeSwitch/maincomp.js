import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { switchNight, switchDay } from './actions'

const mapStateToProps = (state) => {
    return {
        activeDay: state.activeDay,
        activeNight: state.activeNight
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchDay: bindActionCreators(switchDay, dispatch),
        switchNight: bindActionCreators(switchNight, dispatch)
    }
}

class NightDay extends React.Component {
    render() {
        const { activeNight, activeDay, switchNight, switchDay } = this.props;

        return(
            <div>
                <div id="night" className={activeNight} onClick={ (event) => { switchNight(event.target.click) }}>
                    <p>Ночь <img src='vectors/night.svg'></img></p>
                </div>
                <div id="day"  className={activeDay} onClick={ (event) => { switchDay(event.target.click) }}>
                    <p>День <img src='vectors/day.svg'></img></p>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NightDay);