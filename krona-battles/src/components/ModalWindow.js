import React, { useState } from 'react'
import { isTapped } from './TextArea'
import ButtonsForm from './ButtonsForm'
import Modal from './Modal'
import ReactDOM from 'react-dom'
/* //////////////////////////////////// NOT USABLE
export default function ModalWindow() {
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

    ReactDOM.render(
        <Modal vision={vision} exit={ exitModal } 
                text={text} cancel={cancel} 
                blockModal={blockModal} />,
        document.getElementById('block__modal')
    )

    const BF = <ButtonsForm tap={ messageTap } />
}*/
