"use strict"

// https://leafletjs.com/

$(document).ready( () => {
    var mapOptions = {
        center: [37.788590, -122.404319],
        zoom: 18
    }
    var map = new L.map('map', mapOptions);
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    var circle = L.circle([37.788590, -122.404319], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 25
    }).addTo(map);
    map.addLayer(layer);
    
})