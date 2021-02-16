import React from 'react'

export default function Modal(props) {

    return (
        <div className={props.blockModal}>
            <div className={props.visionModal}>
                {props.textModal}
                <div className='buttons_modal'>
                    <div className={props.cancel}
                    onClick={props.exit}>
                        Отмена
                    </div>
                    <div className="modal__window-ok"
                    onClick={props.send}>
                        Ок
                    </div>
                </div>
            </div>
        </div>
    );
}

