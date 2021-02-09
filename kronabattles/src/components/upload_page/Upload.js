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
        this.label = React.createRef();
    }

    //this is loading data on server
    sendImg() {
        const url = 'http://127.0.0.1:3000/battle_upload.html/image';
        const method = "POST";
        const body = new FormData(this.label);

        fetch(url, { method, body }
            ).then(res => res.json()
            ).then(data => console.log(JSON.stringify(data, null, "\t")))

        }
    //end of loading

    render() {
        return(
            <form ref = {el => (this.label = el)} className='workuploadwindow' >
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