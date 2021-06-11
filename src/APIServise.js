
export function registation(login, password, name) {
    return fetch('https://zchallenger-api.herokuapp.com/user/registration', {
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
    return fetch('https://zchallenger-api.herokuapp.com/user/login', {
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
    return fetch(`https://zchallenger-api.herokuapp.com/user/unlogin?token=${localStorage.getItem('token')}`)
    .then(res => res.json())
}

export function createChalleng(title, description, prise, term, id_offer_user, name_offer_user) {
    console.log(id_offer_user, name_offer_user)
    return fetch(`https://zchallenger-api.herokuapp.com/createChalleng?token=${localStorage.getItem('token')}`,{
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
    return fetch(`https://zchallenger-api.herokuapp.com/MyChallenge?token=${localStorage.getItem('token')}`)
    .then(res => res.json())
}

export function getChallenge(id) {
    return fetch(`https://zchallenger-api.herokuapp.com/getChallenge?token=${localStorage.getItem('token')}&id=${id}`)
    .then(res => res.json())
}

export function changeChalleng(title, description, prise, term, id, id_offer_user, name_offer_user) {
    console.log(id)    
    return fetch(`https://zchallenger-api.herokuapp.com/UpdateChallenge?token=${localStorage.getItem('token')}&id=${id}`,{
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

export function searchUser(login) {
    return fetch(`https://zchallenger-api.herokuapp.com/searchUser?token=${localStorage.getItem('token')}&login=${login}`)
    .then(res => res.json())
}


export function deleteChallenge(id) {
    return fetch(`https://zchallenger-api.herokuapp.com/deleteChallenge?token=${localStorage.getItem('token')}&id=${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
}

export function getOfferChallenge() {
    return fetch(`https://zchallenger-api.herokuapp.com/getOfferChallenge?token=${localStorage.getItem('token')}`)
    .then(res => res.json())
}

export function refuseExecute(id) {
    return fetch(`https://zchallenger-api.herokuapp.com/refuseExecute?token=${localStorage.getItem('token')}&id=${id}`)
    .then(res => res.json())
}

export function acceptedForCompletion(id, date) {
    return fetch(`https://zchallenger-api.herokuapp.com/acceptedForCompletion?token=${localStorage.getItem('token')}&id=${id}&date=${date}`)
    .then(res => res.json())
}

export function getAcceptedChallenge() {
    return fetch(`https://zchallenger-api.herokuapp.com/getAcceptedChallenge?token=${localStorage.getItem('token')}`)
    .then(res => res.json())
}


export function executedChallenge(id, date) {
    return fetch(`https://zchallenger-api.herokuapp.com/executedChallenge?token=${localStorage.getItem('token')}&id=${id}&date=${date}`)
    .then(res => res.json())
}


export function getExecutedChallenge() {
    return fetch(`https://zchallenger-api.herokuapp.com/getExecutedChallenge?token=${localStorage.getItem('token')}`)
    .then(res => res.json())
}

export function getUserCompletedMyTest() {
    return fetch(`https://zchallenger-api.herokuapp.com/getUserCompletedMyTest?token=${localStorage.getItem('token')}`)
    .then(res => res.json())
}


export function expiredChallenge(id) {
    return fetch(`https://zchallenger-api.herokuapp.com/expiredChallenge?token=${localStorage.getItem('token')}&id=${id}`)
    .then(res => res.json())
}
