function initMap() {
  L.mapquest.key = 'GYbqPdwGCCmVfAS49MHc1yObjfAymBTk';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.87874553885033, -117.23591818788537],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false,
  });

  // add a marker to the map
  L.marker([32.87874553885033, -117.23591818788537]).addTo(map);
}
