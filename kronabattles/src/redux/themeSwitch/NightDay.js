import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import NightDay from './maincomp'
import { rootReducer } from './reducer'

const store = createStore(rootReducer);

class ThemeButton extends React.Component{
    render() {
        return (
        <Provider store={store}>
            <NightDay />
        </Provider>
        )
    }
} 

export default ThemeButton