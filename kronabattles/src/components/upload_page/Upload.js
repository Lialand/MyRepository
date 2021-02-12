import React from 'react'

let image;
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
    }

    //this is loading data on server

    sendImg() {

        let url = 'http://127.0.0.1:3000/battle_upload.html/image';
        const method = "PUT";

        const body = new FormData(this.form);

        console.log(body);

        fetch('http://127.0.0.1:3000/battle_upload.html/image', { method, body }
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
            <form ref = {el => (this.form = el)} onSubmit = { e => e.preventDefault() } className='workuploadwindow' >
                <label draggable="true" htmlFor='input__file' >  
                    <div className={this.state.display}>  
                        <img src="vectors/upload_1part.svg" />
                        <img src="vectors/upload_2part.svg" />
                        <input ref = {el => (this.file = el)} name="file" type="file" id="input__file" className="input__file" />
                        <div>
                            <p>Перетащите изображение</p>
                            <p>или кликните, чтобы выбрать файл</p>
                            <p>(JPG, PNG, до 10 МБ, от 1600px по ширине)</p>
                        </div>
                    </div>
                </label>
                <p className={this.state.vision}>{this.state.text}</p>
                <button onClick={ () => this.sendImg() } />
            </form>
        )
    }
    
}

export { picUploaded }