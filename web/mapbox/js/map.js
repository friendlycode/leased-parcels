window.onload = init;

function init() {

	// Initialize map
	var map = L.mapbox.map('map', 'pichot.gdo5mg5o', {
  		detectRetina: true
	});

	// Add geoJSON layer
	L.geoJson(parcels, {
		onEachFeature: bindInfo // Call this function on each geoJSON feature
	}).addTo(map);
	
	// Add search box
	new L.Control.GeoSearch({
        provider: new L.GeoSearch.Provider.Google(),
        position: 'topcenter'
    }).addTo(map);
}

// Attach an informational popup to each polygon
function bindInfo(feature, layer) {
	layer.bindPopup('Address: ' + feature.properties.Address + '<br>' +
					'City: ' + 	  feature.properties.City
	);
}