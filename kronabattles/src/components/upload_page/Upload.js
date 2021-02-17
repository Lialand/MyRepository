import React from 'react'
import TextArea, { isTapped } from './TextArea'
import ButtonsForm from './ButtonsForm'
import Modal from './Modal'

let picUploaded, dataAccess;
picUploaded = dataAccess = false;

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            text: '',
            vision: 'nodisplay',
            visionModal: 'modal__window',
            textModal: '',
            cancel: 'modal__window-cancel',
            blockModal: 'block__modal'
        }                 

        this.sendForm = this.sendForm.bind(this);
        this.messageTap = this.messageTap.bind(this);
        this.exitModal = this.exitModal.bind(this);
    }

    //control states here ---------------------

    messageTap() {
        this.setState({
            blockModal: 'block__modal modal__window-visibility opacity',
            visionModal: 'modal__window modal__window-visibility'
        });
        document.body.style.overflow = 'hidden';

        if (isTapped == '') {  
            this.setState({
                textModal: 'Внимание! Вы не набрали ни единого символа!',
                cancel: 'modal__window-cancel nodisplay' 
            }) 
            dataAccess = false;
        }
        else if (!picUploaded) {
            this.setState({
                textModal: 'Вы не загрузили изображение! (Или выбран неверный формат)',
                cancel: 'modal__window-cancel nodisplay' 
            }) 
            dataAccess = false;
        }
        else {
            this.setState({
                textModal: 'Вы уверены, что хотите отправить введённые данные?',
                cancel: 'modal__window-cancel' 
            }) 
            dataAccess = true;
        }

    }

    exitModal() {
        this.setState({
            blockModal: 'block__modal',
            visionModal: 'modal__window'
        });
        document.body.removeAttribute('style');
    }

    //--------------------

    

    //this is loading data on server

    sendForm() {

        let url = 'http://127.0.0.1:3000/battle_upload.html/image';
        const method = "POST";

        const body = new FormData(this.form);

        console.log(body);

        fetch(url, { method, body }
            ).then(
                response => {
                    this.setState({
                        display: 'nodisplay', 
                        text: 'Изображение загружено',
                        vision: 'downloaded'
                    });
                    picUploaded = true;
                    console.log(response.body);
                    return JSON.stringify(response);
                    // checkErr = false;
                },
                error => {
                    setTimeout(
                        this.setState({
                        display: 'nodisplay', 
                        text: 'Загрузка отклонена (неверный формат)',
                        vision: 'downloaded'
                        }),
                        1000
                    );
                    console.log(Error);
                    picUploaded = false;
                    // checkErr = true;
                }
            ).then(data => console.log('last then', JSON.parse(data)))

    }

    //end of loading

    render() {
        return(
            <>
            <Modal visionModal={this.state.visionModal} exit={ () => this.exitModal() } 
                textModal={this.state.textModal} send={ () => {this.exitModal(); if(dataAccess) this.sendForm()} }
                cancel={this.state.cancel} blockModal={this.state.blockModal} />
            <form ref = {el => (this.form = el)} onSubmit = { e => e.preventDefault() }
            className='workuploadwindow' method="post" enctype="multipart/form-data">
                <label draggable="true" htmlFor='input__file' >  
                    <div className={this.state.display}>  
                        <img src="vectors/upload_1part.svg" />
                        <img src="vectors/upload_2part.svg" />
                        <input ref = {el => (this.file = el)} name="file" type="file" 
                        id="input__file" className="input__file" onChange={ () => picUploaded = true }/>
                        <div>
                            <p>Перетащите изображение</p>
                            <p>или кликните, чтобы выбрать файл</p>
                            <p>(JPG, PNG, до 10 МБ, от 1600px по ширине)</p>
                        </div>
                    </div>
                    <div className={this.state.vision}><p>
                        {this.state.text}
                    </p></div>
                </label>
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
                    <ButtonsForm tap={ () => this.messageTap() } />
                </div>
            </form>
            </>
        )
    }
    
}