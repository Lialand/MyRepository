import React from 'react'

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            text: '',
            vision: 'nodisplay'
        }                    
    }

    render() {
        return(
            <label draggable="true" htmlFor='input__file' className='workuploadwindow' onChange={ 
                () => this.setState({
                display: 'nodisplay', 
                text: 'Изображение загружено',
                vision: 'downloaded'
                }) 
                }>  
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
            </label>
        )
    }
}