import React from 'react'

export default function EnterButton(props) {
    return (
        <div class="flexrow">
            <a href="page_of_battles.html" class="enterbutton">
                Войти в мир дизайна <img src={props.inside}></img>
            </a>
            {props.regin}
        </div>
        );
}