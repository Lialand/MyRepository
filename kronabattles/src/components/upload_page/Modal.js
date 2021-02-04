import React from 'react'

export default function Modal(props) {

    return (
        <div className={props.blockModal}>
            <div className={props.vision}>
                {props.text}
                <div className='buttons_modal'>
                    <div className={props.cancel}
                    onClick={props.exit}>
                        Отмена
                    </div>
                    <div className="modal__window-ok"
                    onClick={props.exit}>
                        Ок
                    </div>
                </div>
            </div>
        </div>
    );
}

