async function start() {
    let url = "https://jsonplaceholder.typicode.com/users";    
    let response = await fetch(url);

    if(response.ok) {
        let json = await response.json();
        localStorage.clear();
        json.forEach(element => {
            localStorage.setItem(element.id, JSON.stringify(element));
        });
        console.log('Данные записаны в хранилище')
    }
}

function printUsers() {
    let section = document.getElementById("users");
    let html="";
    for(let i = 1, length = localStorage.length; i <= length; i++) {
        const user = JSON.parse(localStorage.getItem(i));
        let htmlSegment = `<div><h2>${user.name}</h2></div>`;
        html+=htmlSegment;
    }
    section.innerHTML = html;
}

start();
printUsers();