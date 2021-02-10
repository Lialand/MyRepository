import React from 'react'

let img, imgExt;
let picUploaded = false;

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            text: '',
            vision: 'nodisplay'
        }                 
        this.sendImg = this.sendImg.bind(this);
        this.handleDefault = this.handleDefault.bind(this);
        this.form = React.createRef();
    }

    handleDefault(e) {
        e.preventDefault()
    }

    //this is loading data on server
    sendImg() {

        const url = 'http://127.0.0.1:3000/battle_upload.html/image';
        const method = "POST";
        const body = new FormData(this.form);

        fetch(url, { method, body }
            ).then(
                result => {
                    this.setState({
                        display: 'nodisplay', 
                        text: 'Изображение загружено',
                        vision: 'downloaded'
                    });
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
                    // checkErr = true;
                }
            ).then(data => console.log(JSON.stringify(data, null, "\t")))

    }
    //end of loading

    render() {
        return(
            <form ref = {el => (this.form = el)} onSubmit = {this.handleDefault} className='workuploadwindow' >
            <label draggable="true" htmlFor='input__file' >  
                <div className={this.state.display}>  
                    <img src="vectors/upload_1part.svg" />
                    <img src="vectors/upload_2part.svg" />
                    <input name="file" type="file" id="input__file" className="input__file" />
                    <div>
                        <p>Перетащите изображение</p>
                        <p>или кликните, чтобы выбрать файл</p>
                        <p>(JPG, PNG, до 10 МБ, от 1600px по ширине)</p>
                    </div>
                </div>
                <p className={this.state.vision}>{this.state.text}</p>
                <button onClick={ () => this.sendImg() } />
            </label>
            </form>
        )
    }
}

export { picUploaded }