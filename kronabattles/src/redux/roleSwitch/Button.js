import React from 'react'
import Button from './maincomp'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducer'

const store = createStore(rootReducer);

class RoleButton extends React.Component{
    render() {
        return (
        <Provider store={store}>
            <Button />
        </Provider>
        )
    }
} 

export default RoleButton
