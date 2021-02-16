//not using Component

/*import React, { useState } from 'react'
import TextArea, { isTapped } from './TextArea'
import ButtonsForm from './ButtonsForm'

export default function Form() {
    let [vision, setVision] = useState('modal__window');
    let [text, setTextModal] = useState('');
    let [cancel, setNodisplay] = useState('modal__window-cancel');
    let [blockModal, setBlockModal] = useState('block__modal');

    function messageTap() {
        setBlockModal(blockModal += ' modal__window-visibility opacity');
        setVision(vision += ' modal__window-visibility');
        document.body.style.overflow = 'hidden';
        if (isTapped == '') {   
            setTextModal(text = 'Внимание! Вы не набрали ни единого символа!');
            setNodisplay(cancel += ' nodisplay');
        }
        else if (!picUploaded) {
            setTextModal(text = 'Вы не загрузили изображение! (Или выбран неверный формат)');
            setNodisplay(cancel += ' nodisplay');
        }
        else {
            setTextModal(text = 'Вы уверены, что хотите отправить введённые данные?');
            setNodisplay(cancel = 'modal__window-cancel');
        }
    }

    function exitModal() {
        setVision(vision = 'modal__window');
        setBlockModal(blockModal = 'block__modal');
        document.body.removeAttribute('style');
    }

    return(
        <>
            <Modal vision={vision} exit={ exitModal } 
                text={text} cancel={cancel} 
                blockModal={blockModal} />
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
                <ButtonsForm tap={ messageTap } />
            </div>
        </>
    )
}*/