import RoleButton from './redux/roleSwitch/Button'
import ThemeButton from './redux/themeSwitch/NightDay'
import WorkUpload from './components/upload_page/WorkUpload'
import BattlesWork from './components/battles_page/BattlesWork'
import HeaderMenu from './components/menu_control/HeaderMenu'

import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

if (document.title !== 'main') {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/page_of_battles.html" component={ThemeButton} />
                <Route path="/battle.html" component={ThemeButton} />
                <Route path="/battle_upload.html" component={ThemeButton} />
                <Route path="/the_terms_of_participation.html" component={ThemeButton} />
            </Switch>
        </BrowserRouter>,
        document.getElementById("sidebar")
    );
}

if (document.title == 'main') {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={RoleButton} />
            </Switch>
        </BrowserRouter>,
        document.getElementById("rendPart")
    );
}

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

if (document.title == 'onebattle') {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/battle.html" component={ BattlesWork } />
            </Switch>
        </BrowserRouter>,
        document.getElementById("content_battles")
    );
}

if (document.title == 'onebattle') {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/battle.html" component={ HeaderMenu } />
            </Switch>
        </BrowserRouter>,
        document.getElementById("header_menu")
    );
}