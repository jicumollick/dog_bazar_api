



const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => displayDog(data));
}

const displayDog = (dogs) => {
    const main = document.getElementById('main');

    const first10Data = dogs.slice(0,10);

    
    for(let dog of first10Data){
        console.log(dog.image.url);
        
    const div = document.createElement('div');
    div.classList.add('col-md-4');
        div.innerHTML = `
        <h2> ${dog.name} </h2>
        <p>${dog.temperament}</p>
        <h4>${dog.weight.imperial}</h4>
        <img src='${dog.image.url}' class= 'img-fluid'>
        `;
        main.appendChild(div);

    }


}