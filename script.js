const body = document.querySelector('body');
const URL = 'https://api.escuelajs.co/api/v1/products'
const card = (img, h1, p) => {
    return `
    <figure title="${h1}" class="card">
        <img class="card__img" src="${img}">
        <figcaption class="card__figcaption">
            <h1 class="card__figcaption_titulo">${h1}</h1>
            <p class="card__figcaption_descripcion">${p}</p>
        </figcaption>
    </figure>`;
}

fetch(URL)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            body.innerHTML += card(data[i].images,data[i].title,data[i].description);
        }
        
    })

