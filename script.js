// initialize Leaflet
var map = L.map("map").fitWorld();
var marker;

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "© OpenStreetMap",
}).addTo(map);
//zoom to the users location

function onLocationFound(e) {
  var radius = e.accuracy;

  marker = L.marker(e.latlng)
    .addTo(map)
    .bindPopup("You are within " + radius + " meters from this point")
    .openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

map.on("locationfound", onLocationFound);

function onLocationError(e) {
  alert(e.message);
}

map.on("locationerror", onLocationError);

function resetMap() {
  map.fitWorld();
  marker.remove();
}

function findMe() {
  map.locate({ setView: true, maxZoom: 16 });
}

function requestAssistance() {
  alert(
    "Roadside Assistance has been dispatched.  Updates will be provided via SMS"
  );
}
