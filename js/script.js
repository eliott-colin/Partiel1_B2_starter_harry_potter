async function loadData() {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const listHP = await response.json();

        const first12Characters = listHP.slice(0, 12);
        console.log(first12Characters);
    

    first12Characters.forEach(element => {
        let characters = document.querySelector(".characters")
        let newDiv = document.createElement("div")
        newDiv.innerHTML = `<div>
                <a href="details.html">
                  <img src="${element.image}" alt="${element.name}" class="${element.house}"/>
                </a>
                <p>${element.name}</p>
              </div>`
        characters.appendChild(newDiv)
    });
    
}
loadData();


