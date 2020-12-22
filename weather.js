const COORDS = 'coords';
const API_KEY = "eec5e330f5ade4183c386d6a8b0f65d2";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Cna access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoord = localStorage.getItem(COORDS);

    if(loadedCoord === null){
        askForCoords();
    } else {
        //getWeather
    }
};

function init(){
    loadCoords();
};

init();