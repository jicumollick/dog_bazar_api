
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => displayDog(data));
}

const displayDog = (dogs) => {
    const main = document.getElementById('main');

    const first10Data = dogs.slice(0,15);
  
    for(let dog of first10Data){
        console.log(dog.image.url);
        
    const div = document.createElement('div');
    div.classList.add('col-md-4');
        div.innerHTML = `     
  <div class="card">
    <div class="image">
      <img src="${dog.image.url}" class='img-fluid' />
    </div>
    <div class="card-inner">
      <div class="header">
        <h3>Name: ${dog.name}</h3>
        <h4>Weight: ${dog.weight.imperial}</h4>
    </div>
    <div class="content">
      <p>Type: ${dog.temperament}</p>
    </div>
      </div>
  </div>
        `;
        main.appendChild(div);
    }
}
