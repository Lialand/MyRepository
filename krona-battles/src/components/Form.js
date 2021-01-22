import React, { useState } from 'react'
import TextArea, { isTapped } from './TextArea'
import Modal from './Modal'

export default function Form() {
    let [vision, setVision] = useState('modal__window');

    function messageTap() {
        if (isTapped == '') {
            setVision(vision += ' modal__window-visibility');
        }
        else
            alert('Данные отправлены')
    }

    function exitModal() {
        setVision(vision = 'modal__window');
    }

    return(
        <>
        <Modal vision={vision} exit={exitModal} />
        <div className="workinfo">
            <div className="workinfo_heading">
                <p>Описание работы</p>
                <p> 
                    Расскажите о вашей работе, 
                    опишите использумые решения и приёмы,
                    обоснуйте свой дизайн.
                </p>
            </div>
            <TextArea />
            <div className="flexrow">
                <a className="button battle__not_end active" onClick={ messageTap }>
                    <p>Отправить работу</p>
                </a>
                <a href="battle.html" className="button battle__not_end">
                    <p>Отмена</p>
                </a>
            </div>
        </div>
        </>
    )
}