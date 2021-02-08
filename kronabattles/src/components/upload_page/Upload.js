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

        let file, spec;
        spec = file = event.target.files[0];
        let checkErr;   
        let reader;

        let formData;

        let checkLoad = new Promise( (resolve, reject) => {
            
            reader = new FileReader();
            reader.readAsDataURL(file);
            reader.fileName = file.name;

            reader.onload = (readerEvt) => {
                img = {
                    name: readerEvt.target.fileName,
                    base64: reader.result,
                    test: new Image()
                };

                formData = new FormData();
                formData.append("myFile", file);

                img.test.onload = () => {
                    console.log('async'),
                    img.test.src = img.base64.trim(),
                    imgWidth = img.test.naturalWidth
                };

                imgExt = img.name.split('.').pop();
                
                if (imgExt == 'png' || imgExt == 'jpg' || imgExt == 'jpeg' && img.width >= 1600) 
                    resolve(console.log('Document UPLOADED:', formData));
                else
                    reject();
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
                        body: formData, 
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    );
                    console.log('Downloaded img', formData);
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