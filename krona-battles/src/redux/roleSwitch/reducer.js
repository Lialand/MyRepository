import { PLAYER_SWITCHER, VIEWER_SWITCHER } from '../types'
import React from 'react'

let textView = "Супер! В первый раз? Хотите узнать, что тут как? Отличный выбор. ПЫ.СЫ. Функционал будет немного ограничен, но всему свое время!";    
let textPlay = "Ооо, да вы смельчак! Ну что ж, удачи вам! Участвуйте и побеждайте!";
let regin = <a href=''>Зарегистрироваться</a>;

const defaultState = {
    text: textView,
    regin: '',
    disp: 'nodisplay',
    activeViewer: 'active',
    activePlayer: ''
};

export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PLAYER_SWITCHER:
            return {
                ...state, 
                text: textPlay,
                regin: regin,
                disp: '',
                activeViewer: '',
                activePlayer: 'active'
            }
        case VIEWER_SWITCHER:
            return {
                ...state, 
                text: textView,
                regin: '',
                disp: 'nodisplay',
                activeViewer: 'active',
                activePlayer: ''
            }
    }
    return state;
}; 

