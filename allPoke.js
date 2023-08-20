function getPoke() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
    .then(response => {
      return response.json();
    })
    .then(data => {
      const div = document.getElementById("items");
      const result = data.results;
      console.log(result);
      result.forEach(pokemon => {
 
        const item = document.createElement("div");
        item.setAttribute("class", item.name);
        item.innerHTML = pokemon.name
        
        getImage(pokemon.url, item);

      
        getType(pokemon.url, item);

        
        div.appendChild(item);
      });
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

function getImage(url, item) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(img => {
      // console.log(img);
      const items = document.getElementById("items")
      const spriteUrl = img.sprites.front_default;
      const spriteImage = document.createElement("img");
      spriteImage.src = spriteUrl;
      let color = ""
      let borderColor = ""
      switch (img.types[0].type.name) {
        case "grass":
          borderColor = "#5DAD65"
          color = "#8DD694"
          break;
        case "water":
          borderColor = "#6F9ECA"
          color = "#8DC6E6"
          break;
        case "fire":
          borderColor = "#C67D6D"
          color = "#E69D8D"
          break;
        case "bug":
          color = "#BDDD7A"
          borderColor = "#A2C170"
          break;
        case "normal":
          color = "#B1B1B1"
          borderColor = "#959595"
          break;
        case "flying":
          color = "C9ADEC"
          borderColor = "A485CC"
          break;
        case "rock":
          color = "#B99D72"
          borderColor = "#957D59"
          break;
        case "ground":
          color = "#EFBE85"
          borderColor = "#D0A068"
          break;
        case "psychic":
          color = "#D053BC"
          borderColor = "#A44094"
          break;
        case "dark":
          color = "#686868"
          borderColor = "#434343"
          break;
        case "ghost":
          color = "#835E94"
          borderColor = "#6B4C79"
          break;
        case "steel":
          color = "#598FA3";
          borderColor = "#517C8B"
          break;
        case "poison":
          color = "#A55DB1"
          borderColor = "#8A4A95"
          break;
        case "electric":
          color = "#E7C859"
          borderColor = "#8D0A068"
          break;
        case "fairy":
          color = "#EEA1E2"
          borderColor = "#C77FBC"
          break;
        case "fighting":
          color = "#E07F60"
          borderColor = "#B1664F"
          break;
        case "dragon":
          color = "#8859D5"
          borderColor = "#724CAE"
          break;
        case "ice":
          color = "#71D8DE"
          borderColor = "#65C1C6"
        default:
          break;


      }
      item.style.backgroundColor = color
      item.style.border = borderColor + ' 3px solid'
    
      item.appendChild(spriteImage);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

function getType(url, item) {
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
     
      const result = data.types
      
      const typeParagraph = document.createElement("p");
      typeParagraph.innerHTML = `Type: ${result[0].type.name}`;

    
      item.appendChild(typeParagraph);
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getPoke();
});

