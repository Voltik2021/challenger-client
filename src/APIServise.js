
export function registation(login, password, name) {
    return fetch('http://localhost:3000/user/registration', {
        method:'POST',
        headers: {'Content-type': 'application/json'},
        body:JSON.stringify({
            login: login,
            password: password,
            name: name,            
        })
    })
    .then(res => res.json())
}

export function login(login, password) {
    return fetch('http://localhost:3000/user/login', {
        method:'POST',
        headers: {'Content-type': 'application/json'},
        body:JSON.stringify({
            login: login,
            password: password                        
        })
    })
    .then(res => res.json())
}

export function unlogin() {
    return fetch(`http://localhost:3000/user/unlogin?token=${localStorage.getItem('token')}`)
    .then(res => res.json())
}

export function createChalleng(title, description, prise, term,) {
    return fetch(`http://localhost:3000/createChalleng?token=${localStorage.getItem('token')}`,{
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        title: title,        
        description: description,
        prise: prise,
        term: term       
    })
    })
    .then(res => res.json())
}

export function getMyChallenge() {
    return fetch(`http://localhost:3000/MyChallenge?token=${localStorage.getItem('token')}`)
    .then(res => res.json())
}

export function getChallenge(id) {
    return fetch(`http://localhost:3000/getChallenge?token=${localStorage.getItem('token')}&id=${id}`)
    .then(res => res.json())
}

export function changeChalleng(title, description, prise, term, id) {
    return fetch(`http://localhost:3000/UpdateChallenge?token=${localStorage.getItem('token')}&id=${id}`,{
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        title: title,        
        description: description,
        prise: prise,
        term: term       
    })
    })
    .then(res => res.json())
}
