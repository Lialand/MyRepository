import React from 'react'

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            text: '',
            vision: 'nodisplay',
        }                 
        this.scanImg = this.scanImg.bind(this)   
    }

    async scanImg(event) {
        let file = event.target.files[0];
        let checkErr;
        let img;

        var data = new FormData();
        data.append('image: ', img);

        let checkLoad = new Promise( (resolve, reject) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(console.log('Document UPLOADED:', reader.result), img = reader.result);

            reader.onerror = () => reject(console.log(reader.error));
        })  

        checkLoad.then(
            result => {
                this.setState({
                display: 'nodisplay', 
                text: 'Изображение загружено',
                vision: 'downloaded'
                });
                var data = new FormData();
                data.append('image: ', JSON.stringify(img));
                checkErr = false;
            },
            error => {
                console.log(Error);
                checkErr = true;
            }
        ).then(
            () => {
                if (!checkErr) {
                    fetch('./base.json', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        },
                        body: data
                    });
                    console.log('Downloaded img', typeof(img));
                }
            }
        )
    }

    render() {
        return(
            <label draggable="true" htmlFor='input__file' className='workuploadwindow'>  
                <div className={this.state.display}>  
                    <img src="vectors/upload_1part.svg" />
                    <img src="vectors/upload_2part.svg" />
                    <input name="file" type="file" id="input__file" className="input__file" onChange={ this.scanImg } />
                    <div>
                        <p>Перетащите изображение</p>
                        <p>или кликните, чтобы выбрать файл</p>
                        <p>(JPG, PNG, до 10 МБ, от 1600px по ширине)</p>
                    </div>
                </div>
                <p className={this.state.vision}>{this.state.text}</p>
            </label>
        )
    }
}