import React, { useState } from 'react'

export default function Modal(props) {

    return (
        <div className={props.vision}>
            Внимание! Вы не набрали ни единого символа!
            <div className="modal__window-ok"
            onClick={props.exit}>
                Ок
            </div>
        </div>
    );
}

