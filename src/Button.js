import React from 'react'
import Text from './Text'
import LogIn from './LogIn'
import LogWith from './LogWith'
import EnterButton from './EnterButton'
import Whoami from './Whoami'

let textView = "Супер! В первый раз? Хотите узнать, что тут как? Отличный выбор. ПЫ.СЫ. Функционал будет немного ограничен, но всему свое время!";            
let textPlay = "Ооо, да вы смельчак! Ну что ж, удачи вам! Участвуйте и побеждайте!";
let inButton = "vectors/bonfire.svg";
let regin = <a href=''>Зарегистрироваться</a>;
let hello;

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: {
                activeViewer: 'active',
                activePlayer: '',
            },
            disp: 'nodisplay',
            look: textView,
        }                    
    }

    // class active shows that button has been disabled

    buttonSwitcherViewer() {
        if (this.state.class.activeViewer == 'active') {
            this.setState({class: {
                activePlayer: 'active',
                activeViewer: '',
            }, 
            disp: '',
            look: textPlay,
            regin: regin});
            hello = false;
        }
    }

    buttonSwitcherPlayer() {
        if (this.state.class.activePlayer == 'active' ) { 
            this.setState({class: {
                activeViewer: 'active',
                activePlayer: '',
            },
            disp: 'nodisplay', 
            look: textView,
            regin: ""});
            hello = true;
        }  
    }

    render() {
        return (
            <div>
                <Whoami />
                <div class="buttons">
                    <div onClick = { () => this.buttonSwitcherViewer() } className={this.state.class.activeViewer}>Игрок</div>
                    <div onClick = { () => this.buttonSwitcherPlayer() } className={this.state.class.activePlayer}>Наблюдатель</div>
                </div>
                <Text text={this.state.look} />
                <LogIn disp={this.state.disp} />
                <EnterButton inside={inButton} regin={this.state.regin} />
                <LogWith disp={this.state.disp} />
            </div>
        );
    }
}

export default Button;