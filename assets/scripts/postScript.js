async function submit(event) {
    //Отмена страницы по умолчанию,чтобы она не обновилась при отправке формы
    event.preventDefault();
    let url = "https://jsonplaceholder.typicode.com/users";
    let text = document.getElementsByTagName('input')[0].value;
    let response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({text})
        });
        console.log(text);
        //смотрим статус
        if(response.status >= 200 && response.status <= 299) {
            const newUser = {"id": (localStorage.length+1), "name": text};
            localStorage.setItem(localStorage.length+1, JSON.stringify(newUser));
            printUsers();
        }
}

let form = document.getElementById('form');

form.addEventListener('submit', submit);