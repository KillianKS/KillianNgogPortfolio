//// S'insrcire sur Open Weather Map 

// Récupérer la clé API dans votre compte - en haut à droite (My API keys)

// Parcourir la doc pour récupérer le lien que vous utiliserez

// Pour le bouton de Geolocalisation : 
// récupérer les coords de vore position avec navigator.geolocation -> Regarder comment ca marche dans la doc (w3 ou MDN) !


// 1) Créer le HTML et importer script + css, ne pas oublier d'importer axios si besoin

// 2) Ajouter un écouteur d'événement sur votre bouton Geolocate (récupérer les coords)

// 3) Passer ces coords dans votre lien lors de la requete vers l'API ainsi que la clé API

// api : https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid=${key}

// 4) Récupérer la data recu et l'afficher dans votre page

// 5) Il faudra afficher les degrés, le temps, la ville et les 2 premières lettres du pays et surtout l'image qui correspond au temps

// BONUS :

// Ajouter un input dans lequel on renseigne le nom de la ville et qui nous affiche le temps correspondant
// (Astuce : vous devrez utiliser un autre type de requete API d'Open Weather en plus de celle utilisée précedemment)



// 0) Je récupère les éléments du DOM que je vais devoir modifier 
const container = document.querySelector('.container')
const inputPart = document.querySelector('.input-part')
const input = document.querySelector('.input')
const btn = document.querySelector('button')
const degrees = document.querySelector('.degrees')
const weather = document.querySelector('.weather')
const img = document.querySelector('img')
const city = document.querySelector('.city')


// 1) On affecte la clé et le lien API à des variables
const key = '28a46ed081fa271f6e1f3b7415825368';
let api = `https://api.openweathermap.org/data/2.5/weather?lat=34.72559822057775&lon=135.49656325323843&units=metric&appid=${key}`
getData()


// 2) On ajoute un écouteur d'événement à notre bouton geolocate 
btn.addEventListener('click', () => {
    btn.textContent = 'Chargement ...'
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError)
    } else {
        alert('Vous devez activer la géoloc !')
    }
})


// 3) Définir la fonction associée à notre navigator.geolocation en cas de réussite (recup coords)
function showPosition(position) {
    console.log(position)
    const lat = position.coords.latitude 
    const lon = position.coords.longitude
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
    getData()
}



// 4) Fonction à appeller en ca d'échec pour getCurrentPosition
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
    }
}



// 5) fonction de récupération des données ex: getData (call avec fetch ou axios) 
// On vient faire ici notre requete vers l'API en utilisant le 'api' défini dans showPosition
function getData() {
    axios.get(api)
    .then((response) => {
        console.log(response)
        return response.data
    })
    .then(data => 
        displayData(data)    
    )
}



// 6) fonction de display des informations
function displayData(data) {
    btn.textContent = 'geolocate me'
    degrees.textContent = Math.floor(data.main.temp)  + '°C'
    city.textContent = data.name + ', ' + data.sys.country 
    weather.textContent = data.weather[0].main + ', (' + data.weather[0].description + ')'

    const weatherId = data.weather[0].id 

    if (weatherId >= 200 && weatherId <= 232) {
        img.src = './assets/light.png'
    } else if (weatherId >= 300 && weatherId <= 321) {
        img.src = './assets/rain+light.png'
    } else if (weatherId >= 500 && weatherId <= 531) {
        img.src = './assets/rain.png'
    } else if (weatherId >= 600 && weatherId <= 622) {
        img.src = './assets/snow.png'
    } else if (weatherId == 800) {
        img.src = './assets/sunny.png'
    } else if (weatherId > 800) {
        img.src = './assets/clouds.png'
    }

}