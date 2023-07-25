function changedColor() {
    let element2 = document.getElementById('el');
    console.log(element2);

    if(element2.classList.contains('ice'))
        element2.classList.remove('ice');
    else
        element2.classList.add('ice');
}


let btn2 = document.getElementById("btn");
btn2.addEventListener('click', changedColor);