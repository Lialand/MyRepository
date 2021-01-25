import RoleButton from './redux/roleSwitch/Button'
import ThemeButton from './redux/themeSwitch/NightDay'
import WorkUpload from './components/WorkUpload'

import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/public/main.html" component={RoleButton} />
            <Route path="/public/page_of_battles.html" component={ThemeButton} />
            <Route path="/public/battle.html" component={ThemeButton} />
            <Route path="/public/battle_upload.html" component={ThemeButton} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("rendPart")
);

if (document.title == 'uploadbattle') {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/public/battle_upload.html" component={ WorkUpload } />
            </Switch>
        </BrowserRouter>,
        document.getElementById("uploadwork")
    );
}

// ajax tester

// window.addEventListener( "DOMContentLoaded", () => {
    
//     function req() {
//         const request = new XMLHttpRequests();
//         request.open("GET", "http://localhost:8000/src/base.json");
//         request.setRequestHeader("Content-type", "application/json; charset=utf-8");
//         request.send();
//         request.addEventListener("readystatechange", () => {
//             if (request.readyState === 4 && request.status == 200) {
//                  let data = JSON.parse(request.response);
//                 console.log(data);
//             }
//             else {
//                 console.error('Что-то не так...');
//             }
//         })
//     }

//     req();

// })