const name = document.getElementById("name");
const ability = document.getElementById("ability");


document.querySelector(".btn").addEventListener('click', (e) => {
    e.preventDefault();

    name.innerHTML = '<em>Loading...</em>'
    ability.innerHTML = '<em>Loading...</em>'

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            let randomNum = Math.round(Math.random() * 100)
            let character = data.results[`${randomNum}`];
            name.innerHTML = character.name.toUpperCase();

            fetch(`${data.results[`${randomNum}`].url}`)
                .then(response => response.json())
                .then(details => {
                    ability.innerHTML = ' '
                    details.abilities.forEach(element => {
                        let li = document.createElement("li");
                        li.innerText = element.ability['name'];
                        ability.appendChild(li);                       
                    });
                })

        })
})


