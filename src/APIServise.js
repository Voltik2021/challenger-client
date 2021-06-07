
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
    .then(res =>{ 
        console.log(res)
        if (res.status === 500) {
            alert('неверный логин или пароль')        }
        return res.json()
    })
    .catch(err => console.log(err))
}

export function unlogin() {
    return fetch(`http://localhost:3000/user/unlogin?token=${localStorage.getItem('token')}`)
    .then(res => res.json())
}

export function createChalleng(title, description, prise, term, id_offer_user, name_offer_user) {
    console.log(id_offer_user, name_offer_user)
    return fetch(`http://localhost:3000/createChalleng?token=${localStorage.getItem('token')}`,{
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
        title: title,        
        description: description,
        prise: prise,
        term: term,
        to: id_offer_user,
        whoWasOffered: name_offer_user
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

export function searchUser(name) {
    return fetch(`http://localhost:3000/searchUser?token=${localStorage.getItem('token')}&name=${name}`)
    .then(res => res.json())
}