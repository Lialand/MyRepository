import React from 'react'

export default class headerMenu extends React.Component {
    constructor(props) {
        super(props);
        let numbers;
        this.state = {

        }
    }

    activator() {
        
    }

    render() {
        return(
            <>
            <li onClick={() => console.log('rr')} className={'a'}><p>Мои работы</p></li>                                       
            <li onClick={() => console.log('rr')} className={'a'}><p>Условия участия</p></li>                                      
            <li onClick={() => console.log('rr')} className={'a'}><p>Задание</p></li>                                      
            <li onClick={() => console.log('rr')} className={'a'}><p>Разборы</p></li>                                      
            <li onClick={() => console.log('rr')} className={'a'}><p>Работы</p></li>                                       
            <li onClick={() => console.log('rr')} className={'a'}><p>Призы</p></li>                                        
            <li onClick={() => console.log('rr')} className={'a'}><p>Итоги</p></li>                                        
            </>
        )
    }
}