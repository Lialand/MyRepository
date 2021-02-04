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
            reader.fileName = file.name;

            reader.onload = (readerEvt) => {
                img = {
                    name: readerEvt.target.fileName,
                    base64: reader.result,
                    test: new Image()
                };

                let loadImg = new Promise( (resolve, reject) => {
                    img.test.onload = () => {
                        resolve(
                            console.log('async'),
                            img.test.src = img.base64.trim(),
                            img.width = img.test.naturalWidth
                        )
                    }
                })

                loadImg.then( result => {
                    imgExt = img.name.split('.').pop();
                    
                    if (imgExt == 'png' || imgExt == 'jpg' || imgExt == 'jpeg' && img.width >= 1600) 
                        resolve(console.log('Document UPLOADED:', img.name));
                    else
                        reject();
                    }
                )
            };

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
                setTimeout(
                        this.setState({
                        display: 'nodisplay', 
                        text: 'Загрузка отклонена (неверный формат)',
                        vision: 'downloaded'
                    }),
                    1000
                );
                console.log(Error);
                checkErr = true;
            }
        ).then(
            () => {
                if (!checkErr) {
                    fetch(url, {
                        method: 'POST',
                        body: img.base64, 
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    );
                    console.log('Downloaded img', img.width);
                    picUploaded = true;
                }
                else {
                    console.log('It is bad type');
                    picUploaded = false;
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

export { picUploaded }