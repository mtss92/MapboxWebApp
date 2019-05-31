var mapboxgl = require("../node_modules/mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
    'pk.eyJ1IjoibXRzczkyIiwiYSI6ImNqdzY4d25sZDBocWk0OG85aml2dnUxYW4ifQ.QdR673Ofvcpe5wxCSuO_Tg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [51.3890, 35.6892], // [lng, lat]
    zoom: 11
});