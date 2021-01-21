import React from 'react'

export default function LogIn(props) {
    return (
        <div className={props.disp}>
            <div className="log_in">
                <p>
                    Введите логин и пароль
                </p>
                <div className="loginandpass">
                    <input className="inputfield"></input>
                    <input className="inputfield"></input>
                </div>
            </div>
        </div>
    );
}