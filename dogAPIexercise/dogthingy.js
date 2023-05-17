const loadIcon = document.querySelector(".loading");
const dogPicture = document.querySelector(".dog");
const urlRandomDog = "https://dog.ceo/api/breeds/image/random"
const urlBreedsList = "https://dog.ceo/api/breeds/list/all"
let selectedBreed = "affenpinscher"

/*
async function getImg(event) {
    loadIcon.classList.remove("dontshow");
    dogPicture.classList.add("dontshow");
    const ric = await fetch(urlRandomDog);
    const ricJson = await ric.json();
    dogPicture.src = ricJson.message;
    dogPicture.classList.remove("dontshow");
    loadIcon.classList.add("dontshow");
}
*/

// a different way to do it

/*
function getImg(){
    loadIcon.classList.remove("dontshow");
    dogPicture.classList.add("dontshow");
    fetch(urlRandomDog)
        .then(function(response){return response.json();})
        .then(function (data) {dogPicture.src=data.message;})
        .then(function (){dogPicture.classList.remove("dontshow");loadIcon.classList.add("dontshow");})
}
*/

//document.querySelector(".showme").addEventListener("click", getImg)

fetch(urlBreedsList).then(response => {
    return response.json()
})
.then( data => {
    const arrayBreedsList = Object.keys(data.message);
    for (let i=0; i<arrayBreedsList.length;i++){
        const option= document.createElement("option");
        option.value= arrayBreedsList[i];
        option.innerText = arrayBreedsList[i];
        document.querySelector(".breeds").appendChild(option);
    }
})

function getImg(){
    const urlRandomDogByBreed = `https://dog.ceo/api/breed/${selectedBreed}/images/random`
    loadIcon.classList.remove("dontshow");
    dogPicture.classList.add("dontshow");
    fetch(urlRandomDogByBreed)
        .then(function(response){return response.json();})
        .then(function (data) {dogPicture.src=data.message;})
        .then(function (){dogPicture.classList.remove("dontshow");loadIcon.classList.add("dontshow");})
}

document.querySelector(".breeds").addEventListener("change",function(event) {selectedBreed = event.target.value;})
document.querySelector(".showme").addEventListener("click", getImg)