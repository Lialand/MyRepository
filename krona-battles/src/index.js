import Button from './Button'
import ThemeButton from './NightDay'

import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/public/main.html" component={Button} />
            <Route path="/public/page_of_battles.html" component={ThemeButton} />
            <Route path="/public/battle.html" component={ThemeButton} />
            <Route path="/public/battle_upload.html" component={ThemeButton} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("rendPart"),
    function() { 
        console.log("рендеринг элемента React");
    }
)