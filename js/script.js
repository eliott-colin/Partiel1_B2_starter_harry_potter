async function loadData() {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const listHP = await response.json();
        
        const first12Characters = listHP.slice(0, 12);
        console.log(first12Characters);
    

    first12Characters.forEach(element => {
        let characters = document.querySelector(".characters")
        let newDiv = document.createElement("div")
        newDiv.innerHTML = `<div>
                <a href="details.html?character=${encodeURIComponent(element.name)}">
                  <img src="${element.image}" alt="${element.name}" class="${element.house}"/>
                </a>
                <p>${element.name}</p>
              </div>`
        characters.appendChild(newDiv)
    });
    
    
    



}


async function house() {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    const listHP = await response.json();

    document.querySelector("#Gr").addEventListener("click", () => {
        const result = listHP.filter(element => element.house === "Gryffindor");

        const characters = document.querySelector(".characters");
        characters.innerHTML = "";

        const result12 = result.slice(0, 12);
        result12.forEach(element => {
            const newDiv = document.createElement("div");
            const imageUrl = element.image || "images\characters\troll.jpg";
            newDiv.innerHTML = `
                <div>
                    <a href="details.html?character=${encodeURIComponent(element.name)}">
                      <img src="${element.image ? element.image : "./images/characters/troll.jpg"}" alt="${element.name}" class="${element.house}" />
                    </a>
                    <p>${element.name}</p>
                </div>
            `;
            characters.appendChild(newDiv);
        });
    });

    document.querySelector("#Hu").addEventListener("click", () => {
        const result = listHP.filter(element => element.house === "Hufflepuff");

        const characters = document.querySelector(".characters");
        characters.innerHTML = "";

        const result12 = result.slice(0, 12);
        result12.forEach(element => {
            const newDiv = document.createElement("div");
            const imageUrl = element.image || "images\characters\troll.jpg";
            newDiv.innerHTML = `
                <div>
                    <a href="details.html?character=${encodeURIComponent(element.name)}">
                      <img src="${element.image ? element.image : "./images/characters/troll.jpg"}" alt="${element.name}" class="${element.house}" />
                    </a>
                    <p>${element.name}</p>
                </div>
            `;
            characters.appendChild(newDiv);
        });
    });
    document.querySelector("#Ra").addEventListener("click", () => {
        const result = listHP.filter(element => element.house === "Ravenclaw");

        const characters = document.querySelector(".characters");
        characters.innerHTML = "";

        const result12 = result.slice(0, 12);
        result12.forEach(element => {
            const newDiv = document.createElement("div");
            const imageUrl = element.image || "images\characters\troll.jpg";
            newDiv.innerHTML = `
                <div>
                    <a href="details.html?character=${encodeURIComponent(element.name)}">
                      <img src="${element.image ? element.image : "./images/characters/troll.jpg"}" alt="${element.name}" class="${element.house}" />
                    </a>
                    <p>${element.name}</p>
                </div>
            `;
            characters.appendChild(newDiv);
        });
    });
    document.querySelector("#Sl").addEventListener("click", () => {
        const result = listHP.filter(element => element.house === "Slytherin");

        const characters = document.querySelector(".characters");
        characters.innerHTML = "";

        const result12 = result.slice(0, 12);
        result12.forEach(element => {
            const newDiv = document.createElement("div");
            const imageUrl = element.image || "images\characters\troll.jpg";
            newDiv.innerHTML = `
                <div>
                    <a href="details.html?character=${encodeURIComponent(element.name)}">
                      <img src="${element.image ? element.image : "./images/characters/troll.jpg"}" alt="${element.name}" class="${element.house}" />
                    </a>
                    <p>${element.name}</p>
                </div>
            `;
            characters.appendChild(newDiv);
        });
    });





}










loadData();
house();