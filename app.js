const jokeContainer = document.querySelector('#joke');
const btn = document.querySelector('#btn');
const URL = "https://v2.jokeapi.dev/joke/Any?type=single";

/* First Method */

// let getJoke = ()=>{
//     fetch(URL)
//     .then(data => data.json())
//     .then(item =>{
//         jokeContainer.textContent = `${item.joke}`;
//     });
// }
// btn.addEventListener('click', getJoke);


/* Second Method */

btn.addEventListener('click', async (evt) =>{
    evt.preventDefault();
    let response = await fetch(URL);
    let data = await response.json();
    jokeContainer.textContent = `${data.joke}`
})
