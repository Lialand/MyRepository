import React from 'react'

let isTapped = ''

export default class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        isTapped = event.target.value.trim();
    }

    render() {
        return (
        <div className="inputwindow">
            <textarea id="input__text" className="inputfield" 
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Описание работы..."></textarea>
        </div>
        );
    }
}

export {isTapped}