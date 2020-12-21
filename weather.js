const COORDS = 'coords';

function handleGeoSucces(position){
    console.log(position);
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