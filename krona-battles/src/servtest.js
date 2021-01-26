const RequestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json()
    });
}

const body = {
    name: 'bravo',
    position: 'abs'
}

sendRequest('GET', RequestURL, body)
.then(data => console.log(data) )
.catch(err => console.log(err))