// завдання 1 запит GET

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    if (!response.ok) {
        throw new Error(`Помилка HTTP: ${response.status}`);
    }
        return response.json();
    })
  .then((json) => console.log(json));




// завдання 2 запит POST

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'я незнаю як це працює але це працює',
        body: 'і це вже надсилається на якийсь сервер',
        userId: 1
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error(`Помилка HTTP: ${response.status}`);
    }
        return response.json();
    })
.then(data => console.log('Успішно створено:', data))
.catch(error => console.error('Помилка:', error));




// завдання 4 async/await ------------------------------------------------

async function fetchUsersGet() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }
        let users = await response.json();
        console.log(users);
        } catch (error) {
            console.error('Помилка:', error);
        }
    }

fetchUsersGet();



async function fetchUsersPost() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'це я створив за допомогою async/await',
                body: 'і я продовжую розбиратись з цим всім',
                userId: 2
            })
        });
        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }
        let users = await response.json();
        console.log(users);
        } catch (error) {
            console.error('Помилка:', error);
        }
    }

fetchUsersPost();












