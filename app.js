mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1dG9jYW8iLCJhIjoiY2p5dnE2c2RhMHI0czNqbXJtMHN1YTQ3eiJ9.COtpwPhOluVHKVN1oZdSwg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
center: [-79.373895, 10.566320],
zoom: 1.4
});

var sitesArr = [
  ["Detroit Reservoir", 44.707006, -122.185775, "http://oceancolor.coas.oregonstate.edu/det/lan/rgb.html"],
  ["Dexter Reservoir", 43.913507, -122.785281, "http://oceancolor.coas.oregonstate.edu/dex/lan/rgb.html"],
  ["Otago", -46.002945, 170.626742,""],
  ["Geren Island", 44.794042, -122.764460, "http://oceancolor.coas.oregonstate.edu/ger/lan/rgb.html"],
  ["San Louis Reservoir", 37.052383, -121.124112, "http://oceancolor.coas.oregonstate.edu/lui/lan/rgb.html"],
  ["Oroville Reservoir", 39.556976, -121.456147, ""],
  ["Laguna del Sauce", -34.825800, -55.066876, "http://oceancolor.coas.oregonstate.edu/sau/lan/rgb.html"],
  ["San Francisco Bay & Delta", 38.102135, -122.050026, "http://oceancolor.coas.oregonstate.edu/sfb/lan/rgb.html"],
  ["Stennis Space Center", 30.352250, -89.645983, "http://oceancolor.coas.oregonstate.edu/ssc/lan/rgb.html"],
  ["Valle de Bravo", 19.192422, -100.155311, "http://oceancolor.coas.oregonstate.edu/vdb/lan/rgb.html"],
  ["Silverwood Lake", 34.291468, -117.325807, ""],
  ["Diamond Lake", 33.682725, -117.013607, "http://oceancolor.coas.oregonstate.edu/dia/lan/rgb.html" ],
  ["Pyramid Lake", 40.050989, -119.545272, "http://oceancolor.coas.oregonstate.edu/pyr/lan/rgb.html" ],
  ["Hopatcong Lake", 40.949438, -74.633434, ""],
  ["Puget Sound", 47.726929, -122.504591,""],
  ["Ross Island", 45.489956, -122.659128,""],
  ["Salt Lake", 41.013424, -112.400531 ,""],
  ["Adriatic Sea", 43.243398, 17.010662 ,""],
  ["Abelardo L Rodriguez Mexico Reservoir", 29.066531, -110.907572, "http://oceancolor.coas.oregonstate.edu/alr/lan/rgb.html"],
  ["Lake Tana, Ethiopia", 12.009332, 37.298897, "http://oceancolor.coas.oregonstate.edu/tan/lan/rgb.html"],
  ["Tana River, Kenya", -0.463446, 39.635899, "http://oceancolor.coas.oregonstate.edu/tar/lan/rgb.html"],
  ["Charles River, Boston",42.352874, -71.103053, "http://oceancolor.coas.oregonstate.edu/cha/lan/rgb.html"],
  ["Baton Rouge, LA", 30.446719, -91.197261, "http://oceancolor.coas.oregonstate.edu/bat/lan/rgb.html"],



]
for (let i=0; i<sitesArr.length; i++){
  console.log(sitesArr[i]);
  var geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [sitesArr[i][2],sitesArr[i][1]]
        },
        properties: {
          title: sitesArr[i][0],
          link: sitesArr[i][3]
        }
      },
    ]
  };
  // add markers to map
  geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
    
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + marker.properties.title + '</h3><a href="' + marker.properties.link + '">' +"More Information Here" +'</a></p>'))
    .addTo(map);
  });
}