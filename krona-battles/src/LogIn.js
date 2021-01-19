import React from 'react'

export default function LogIn(props) {
    return (
        <div class={props.disp}>
            <div class="log_in">
                <p>
                    Введите логин и пароль
                </p>
                <div class="loginandpass">
                    <input class="inputfield"></input>
                    <input class="inputfield"></input>
                </div>
            </div>
        </div>
    );
}