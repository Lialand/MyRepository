import React from 'react'
let img;

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            text: '',
            vision: 'nodisplay'
        }                 
        this.scanImg = this.scanImg.bind(this)   
    }

    //this is loading data on server
    async scanImg(event) {
        const url = 'http://127.0.0.1:3000/battle_upload.html/image';

        let file = event.target.files[0];
        let checkErr;

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
                checkErr = false;
            },
            error => {
                console.log(Error);
                checkErr = true;
            }
        ).then(
            () => {
                if (!checkErr) {
                    fetch(url, {
                        method: 'PUT',
                        body: img,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    );
                    console.log('Downloaded img', typeof(img));
                }
            }
        )
    }
    //end of loading

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