import React from 'react'

export default function ButtonsForm(props) {
    return (
        <div className="flexrow">
            <a className="button battle__not_end active" onClick={props.tap}>
                <p>Отправить работу</p>
            </a>
            <a href="battle.html" className="button battle__not_end">
                <p>Отмена</p>
            </a>
        </div>
    )
}