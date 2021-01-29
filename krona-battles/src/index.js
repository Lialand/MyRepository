import RoleButton from './redux/roleSwitch/Button'
import ThemeButton from './redux/themeSwitch/NightDay'
import WorkUpload from './components/WorkUpload'

import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/page_of_battles.html" component={ThemeButton} />
            <Route path="/battle.html" component={ThemeButton} />
            <Route path="/battle_upload.html" component={ThemeButton} />
            <Route path="/" component={RoleButton} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("rendPart")
);

if (document.title == 'uploadbattle') {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/battle_upload.html" component={ WorkUpload } />
            </Switch>
        </BrowserRouter>,
        document.getElementById("uploadwork")
    );
}