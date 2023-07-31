const gridy = document.getElementById('gridy');
const numberOfColorbox = 200;

for(let i=0;i<numberOfColorbox; i++){
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    gridy.append(colorBox);
}

const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single";

let getJoke = () =>{
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    })
}
btn.addEventListener("click", getJoke);