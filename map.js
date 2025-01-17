mapboxgl.accessToken = 'pk.eyJ1Ijoic21va2NvZGVzIiwiYSI6ImNrenY3azN5YTFpYXgycHBrZG9zNnRwYWYifQ.8FcbFhQiGydOu585C7QCgA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(position) {
    setupMap([-2.24, 53.48])
}


function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
}
