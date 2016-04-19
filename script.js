$(document).ready(function(){
			popup = L.popup();
			mymap = L.map('mapid').setView([40.2838, -3.8215], 13);
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(mymap); 			
function onMapClick(e) {
			    popup
			        .setLatLng(e.latlng)
			        .setContent("You clicked the map at " + e.latlng.toString())
			        .openOn(mymap);
			}mymap.on('click', onMapClick);   
function onLocationFound(e) {
		var radius = e.accuracy / 2;			
		L.marker(e.latlng).addTo(mymap)
		.bindPopup("You are within " + radius + " meters from this point").openPopup();	
		L.circle(e.latlng, radius).addTo(mymap);
		}mymap.on('locationfound', onLocationFound);
function onLocationError(e) {
			    alert(e.message);
			}
			mymap.on('locationerror', onLocationError);
			mymap.on('click', onMapClick);
			mymap.locate({setView: true, maxZoom: 16});
});
