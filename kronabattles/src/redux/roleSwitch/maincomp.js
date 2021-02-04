import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { switchPlayer, switchViewer } from './actions'

import Text from './components/Text'
import LogIn from './components/LogIn'
import LogWith from './components/LogWith'
import EnterButton from './components/EnterButton'
import Whoami from './components/Whoami'

let inButton = "vectors/bonfire.svg";

const mapStateToProps = (state) => {
    return {
        activeViewer: state.activeViewer,
        activePlayer: state.activePlayer,
        text: state.text,
        disp: state.disp,
        regin: state.regin
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchViewer: bindActionCreators(switchViewer, dispatch),
        switchPlayer: bindActionCreators(switchPlayer, dispatch)
    }
}

class Button extends React.Component {
    render() {
        const { activePlayer, activeViewer, switchPlayer, switchViewer, text, disp, regin } = this.props;

        return (
            <div>
                <Whoami />
                <div className="buttons">
                    <div onClick = { (event) => { switchPlayer(event.target.click) } } className={activeViewer}>Игрок</div>
                    <div onClick = { (event) => { switchViewer(event.target.click) } } className={activePlayer}>Наблюдатель</div>
                </div>
                <Text text={text} />
                <LogIn disp={disp} />
                <EnterButton inside={inButton} regin={regin} />
                <LogWith disp={disp} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);