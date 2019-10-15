mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1dG9jYW8iLCJhIjoiY2p5dnE2c2RhMHI0czNqbXJtMHN1YTQ3eiJ9.COtpwPhOluVHKVN1oZdSwg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
center: [-79.373895, 10.566320],
zoom: 1.4
});

var sitesArr = [
  
  // ["Charles River, Boston",42.352874, -71.103053, "http://oceancolor.coas.oregonstate.edu/cha/sen/rgb.html"],
  // ["Diamond Lake", 33.682725, -117.013607, "http://oceancolor.coas.oregonstate.edu/dia/sen/rgb.html" ],
  ["Abelardo L Rodriguez Mexico Reservoir, Mexico", 29.066531, -110.907572, "http://oceancolor.coas.oregonstate.edu/alr/sen/rgb.html", "http://wikimapia.org/9420500/Abelardo-L-Rodriguez-Reservoir"], // not a good link, find something better
  ["Baton Rouge, LA", 30.446719, -91.197261, "http://oceancolor.coas.oregonstate.edu/bat/sen/rgb.html", "https://en.wikipedia.org/wiki/Baton_Rouge,_Louisiana"],
  // ["bar", lat, lon, "http://oceancolor.coas.oregonstate.edu/bar/sen/rgb.html", "webLink"],
  // ["bld", lat, lon, "http://oceancolor.coas.oregonstate.edu/bld/sen/rgb.html", "webLink"],
  ["Boddington, Australia", -32.797701, 116.476967, "http://oceancolor.coas.oregonstate.edu/bod/sen/rgb.html", "https://en.wikipedia.org/wiki/Boddington,_Western_Australia"],
  ["Bull Run Reservoir, OR", 45.484654, -122.071313, "http://oceancolor.coas.oregonstate.edu/bul/sen/rgb.html", "https://en.wikipedia.org/wiki/Bull_Run_River_(Oregon)"],
  ["El Capitan, San Diego, CA", 32.883988, -116.808364, "http://oceancolor.coas.oregonstate.edu/cap/sen/rgb.html", "https://en.wikipedia.org/wiki/El_Capitan_Dam"],
  // ["cha", lat, lon, "http://oceancolor.coas.oregonstate.edu/cha/sen/rgb.html", "webLink"],
  // ["chr", lat, lon, "http://oceancolor.coas.oregonstate.edu/chr/sen/rgb.html", "webLink"],
  // ["cht", lat, lon, "http://oceancolor.coas.oregonstate.edu/cht/sen/rgb.html", "webLink"],
  ["Collinsville, CA", 38.073458, -121.850100, "http://oceancolor.coas.oregonstate.edu/col/sen/rgb.html", "https://en.wikipedia.org/wiki/Collinsville,_California"],
  ["Cougar Reservoir, OR", 44.101631, -122.229920, "http://oceancolor.coas.oregonstate.edu/cor/sen/rgb.html", "https://en.wikipedia.org"],
  ["Detroit Reservoir, OR", 44.707006, -122.185775, "http://oceancolor.coas.oregonstate.edu/det/sen/rgb.html", "https://en.wikipedia.org/wiki/Detroit_Lake"],//detroit lake, not detroit reservoire in the wikipedia link
  ["Dexter Reservoir, OR", 43.913507, -122.785281, "http://oceancolor.coas.oregonstate.edu/dex/sen/rgb.html", "https://en.wikipedia.org/wiki/Dexter_Reservoir"],
  // ["dia", lat, lon, "http://oceancolor.coas.oregonstate.edu/dia/sen/rgb.html", "webLink"],
  ["Discovery Bay, WA", 47.993711, -122.883282, "http://oceancolor.coas.oregonstate.edu/dis/sen/rgb.html", "https://en.wikipedia.org/wiki/Discovery_Bay,_Washington"],
  ["Dunedin, New Zealand", -45.883323, 170.515066, "http://oceancolor.coas.oregonstate.edu/dun/sen/rgb.html", "https://en.wikipedia.org/wiki/Dunedin"],
  // ["dww", lat, lon, "http://oceancolor.coas.oregonstate.edu/dww/sen/rgb.html", "webLink"],
  ["Tiburon, CA", 37.885760, -122.476494, "http://oceancolor.coas.oregonstate.edu/eos/sen/rgb.html", "https://en.wikipedia.org/wiki/Tiburon,_California"],
  ["Eureka Platform, CA", 40.803918, -124.176304, "http://oceancolor.coas.oregonstate.edu/eur/sen/rgb.html", "https://en.wikipedia.org/wiki/Eureka,_California"], //eureka california... couldnt find eureka platform
  // ["ewe", lat, lon, "http://oceancolor.coas.oregonstate.edu/ewe/sen/rgb.html", "webLink"],
  ["Geren Island, OR", 44.794042, -122.764460, "http://oceancolor.coas.oregonstate.edu/ger/sen/rgb.html", "https://www.cityofsalem.net/Pages/salem-water-source.aspx"], //city of salem website about the geren island water treatment plant
  // ["gra", lat, lon, "http://oceancolor.coas.oregonstate.edu/gra/sen/rgb.html", "webLink"],
  ["Grizzly Bay, CA", 38.125285, -122.044448, "http://oceancolor.coas.oregonstate.edu/gri/sen/rgb.html", "https://en.wikipedia.org/wiki/Grizzly_Bay"],
  // ["grv", lat, lon, "http://oceancolor.coas.oregonstate.edu/grv/sen/rgb.html", "webLink"],
  ["Hood Canal, WA", 47.602468, -122.961074, "http://oceancolor.coas.oregonstate.edu/hoo/sen/rgb.html", "https://en.wikipedia.org/wiki/Hood_Canal"],
  ["Hopatcong Lake", 40.949438, -74.633434, "http://oceancolor.coas.oregonstate.edu/hop/sen/rgb.html", "https://en.wikipedia.org/wiki/Lake_Hopatcong"],
  ["Indian River, FL", 28.211405, -80.645729, "http://oceancolor.coas.oregonstate.edu/ind/sen/rgb.html", "https://en.wikipedia.org/wiki/Indian_River_(Florida)"],
  // ["Adriatic Sea", 43.243398, 17.010662 ,"http://oceancolor.coas.oregonstate.edu/jad/sen/rgb.html", "https://en.wikipedia.org/wiki/Adriatic_Sea"], oceancolor link is not working
  // ["jak", lat, lon, "http://oceancolor.coas.oregonstate.edu/jak/sen/rgb.html", "webLink"],
  ["Jordan Lake (Cape Fear), NC", 35.712295, -79.036954, "http://oceancolor.coas.oregonstate.edu/jor/sen/rgb.html", "https://en.wikipedia.org/wiki/Jordan_Lake"],
  ["Lady Bird Lake, Austin, TX", 30.246772, -97.718286, "http://oceancolor.coas.oregonstate.edu/ldy/sen/rgb.html", "https://en.wikipedia.org/wiki/Lady_Bird_Lake"],
  ["San Louis Reservoir, CA", 37.052383, -121.124112, "http://oceancolor.coas.oregonstate.edu/lui/sen/rgb.html", "http://www.parks.ca.gov/?page_id=558"],
  // ["mac", lat, lon, "http://oceancolor.coas.oregonstate.edu/mac/sen/rgb.html", "webLink"],
  ["McKenzie River, OR", 44.148945, -122.579255, "http://oceancolor.coas.oregonstate.edu/mck/sen/rgb.html", "https://en.wikipedia.org/wiki/McKenzie_River_(Oregon)"],
  // ["nbt", lat, lon, "http://oceancolor.coas.oregonstate.edu/nbt/sen/rgb.html", "webLink"],
  ["Bahua de Ohuira, Sinaloa, Mexico", 25.633838, -108.991550, "http://oceancolor.coas.oregonstate.edu/ohu/sen/rgb.html", "http://www.weatherbase.com/weather/weather-summary.php3?s=925099&cityname=Bah%EDa+de+Ohuira%2C+Sinaloa%2C+Mexico&units="], //not a good link, find something better
  ["Oroville Reservoir, CA", 39.556976, -121.456147, "http://oceancolor.coas.oregonstate.edu/oro/sen/rgb.html", "https://en.wikipedia.org/wiki/Lake_Oroville"], //lake orovile wikipedia page
  // ["Otago, New Zealand", -46.002945, 170.626742,"http://oceancolor.coas.oregonstate.edu/ota/sen/rgb.html", "https://en.wikipedia.org/wiki/Otago"], oceancolor link is not working
  ["Perth (Swan Lake), Australia", -31.964123, 115.856724, "http://oceancolor.coas.oregonstate.edu/per/sen/rgb.html", "https://en.wikipedia.org/wiki/Swan_River_(Western_Australia)"], //this is swan river, not swan lake both link and coordinates
  // ["pro", lat, lon, "http://oceancolor.coas.oregonstate.edu/pro/sen/rgb.html", "webLink"],
  // ["pyr", lat, lon, "http://oceancolor.coas.oregonstate.edu/pyr/sen/rgb.html", "webLink"],
  ["Rocky Bay, WA", 47.356457, -122.794400,"http://oceancolor.coas.oregonstate.edu/rok/sen/rgb.html", "https://www.doh.wa.gov/CommunityandEnvironment/Shellfish/GrowingAreaRestoration/ShellfishProtectionDistrictsLibrary/OrganizedbySPD/BurleyFilucyRockySPD"], // not a great link, govt site about protection district
  ["Ross Island, OR", 45.489956, -122.659128,"http://oceancolor.coas.oregonstate.edu/ros/sen/rgb.html", "https://en.wikipedia.org/wiki/Ross_Island_(Oregon)"],
  ["Samish Bay, WA", 48.597725, -122.475547,"http://oceancolor.coas.oregonstate.edu/sam/sen/rgb.html", "http://www.samishisland.net/about.html"], // samish island 'about' page, not wikipedia
  ["Laguna del Sauce, Uruguay", -34.825800, -55.066876, "http://oceancolor.coas.oregonstate.edu/sau/sen/rgb.html", "https://en.wikipedia.org/wiki/Laguna_del_Sauce"],
  ["Selbay, MD", 38.911591, -76.510946, "http://oceancolor.coas.oregonstate.edu/sel/sen/rgb.html", "https://en.wikipedia.org/wiki/Selby-on-the-Bay,_Maryland"], //selby on the bay, not selby
  ["San Francisco Bay & Delta, CA", 38.102135, -122.050026, "http://oceancolor.coas.oregonstate.edu/sfb/sen/rgb.html", "https://en.wikipedia.org/wiki/San_Francisco_Bay"],
  ["Silverwood Lake, CA", 34.291468, -117.325807, "http://oceancolor.coas.oregonstate.edu/sil/sen/rgb.html", "https://en.wikipedia.org/wiki/Silverwood_Lake"],
  // ["sn", lat, lon, "http://oceancolor.coas.oregonstate.edu/sn/sen/rgb.html", "webLink"],
  ["Stennis Space Center, MS", 30.352250, -89.645983, "http://oceancolor.coas.oregonstate.edu/ssc/sen/rgb.html", "https://en.wikipedia.org/wiki/John_C._Stennis_Space_Center"],
  // ["stg", lat, lon, "http://oceancolor.coas.oregonstate.edu/stg/sen/rgb.html", "webLink"],
  ["Lake Tana, Ethiopia", 12.009332, 37.298897, "http://oceancolor.coas.oregonstate.edu/tan/sen/rgb.html", "https://en.wikipedia.org/wiki/Lake_Tana"],
  ["Tana River, Kenya", -0.463446, 39.635899, "http://oceancolor.coas.oregonstate.edu/tar/sen/rgb.html", "https://en.wikipedia.org/wiki/Tana_River_(Kenya)"],
  ["Valle de Bravo, Mexico", 19.192422, -100.155311, "http://oceancolor.coas.oregonstate.edu/vdb/sen/rgb.html", "https://en.wikipedia.org/wiki/Valle_de_Bravo"],
  ["San Vicente, San Diego, CA", 32.920935, -116.923524, "http://oceancolor.coas.oregonstate.edu/vic/sen/rgb.html", "https://en.wikipedia.org/wiki/San_Vicente_Dam"], //san vicente reservoir coordinates, san vicente dam wikipedia
  ["Lake Washington, FL", 28.142239, -80.742237, "http://oceancolor.coas.oregonstate.edu/was/sen/rgb.html", "https://en.wikipedia.org/wiki/Lake_Washington_(Florida)"],
  ["Willow Creek Dam, OR", 45.346630, -119.544009, "http://oceancolor.coas.oregonstate.edu/wil/sen/rgb.html", "https://en.wikipedia.org/wiki/Willow_Creek_Dam_(Oregon)"],
  ["Laguna de Yuriria, Guanajuato, Mexico", 20.250905, -101.133857, "http://oceancolor.coas.oregonstate.edu/yur/sen/rgb.html", "https://es.wikipedia.org/wiki/Laguna_de_Yuriria"],
  
//   ["Diamond Lake", 33.682725, -117.013607, "http://oceancolor.coas.oregonstate.edu/dia/sen/rgb.html", "webLink"],
//   ["Pyramid Lake", 40.050989, -119.545272, "http://oceancolor.coas.oregonstate.edu/pyr/sen/rgb.html" , "webLink"],
//   ["Puget Sound", 47.726929, -122.504591,"", "webLink"],
//   ["Salt Lake", 41.013424, -112.400531 ,"", "webLink"],
//   ["Charles River, Boston",42.352874, -71.103053, "http://oceancolor.coas.oregonstate.edu/cha/sen/rgb.html", "webLink"],

]

function populate() {

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
          link: sitesArr[i][3], 
          alt_link: sitesArr[i][4]
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
    .setHTML('<h3>' + marker.properties.title + '</h3><a href="' + marker.properties.link + '">' +"Site Specific Information Here" +'</a>' + '<br><a href="' + marker.properties.alt_link + '">' +"Additional Information Here" +'</a></p>'))
    .addTo(map);
  });
  
}
}

populate()

var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});
  
  map.on('mouseenter', 'places', function(e) {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';
    
    var coordinates = geojson.features[0].geometry.coordinates.slice();
    console.log("coords",coordinates);
  var description = geojson.features[0].properties.description;
  console.log("descript:", description);
  
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
//   while (Math.abs(geojson.lngLat.lng - coordinates[0]) > 180) {
//   coordinates[0] += geojson.features[0].geometry.coordinates > coordinates[0] ? 360 : -360;
// }

// Populate the popup and set its coordinates
// based on the feature found.
popup.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});

map.on('mouseleave', 'places', function() {
map.getCanvas().style.cursor = '';
popup.remove();
});