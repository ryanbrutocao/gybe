mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1dG9jYW8iLCJhIjoiY2p5dnE2c2RhMHI0czNqbXJtMHN1YTQ3eiJ9.COtpwPhOluVHKVN1oZdSwg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
center: [-79.373895, 10.566320],
zoom: 1.4
});




var age;

var sitesArr = [
  
  // ["Charles River, Boston",42.352874, -71.103053, "http://gybenet.com/cha/sen/rgb.html"],
  // ["Diamond Lake", 33.682725, -117.013607, "http://gybenet.com/dia/sen/rgb.html" ],
  ["Abelardo L Rodriguez Mexico Reservoir, Mexico", 29.066531, -110.907572, "http://gybenet.com/alr/sen/rgb.html", "http://wikimapia.org/9420500/Abelardo-L-Rodriguez-Reservoir"], // not a good link, find something better. Also, is this the correct body of water?
  ["Baton Rouge, LA", 30.446719, -91.197261, "http://gybenet.com/bat/sen/rgb.html", "https://en.wikipedia.org/wiki/Baton_Rouge,_Louisiana"],
  // ["bar", lat, lon, "http://gybenet.com/bar/sen/rgb.html", "webLink"],
  // ["bld", lat, lon, "http://gybenet.com/bld/sen/rgb.html", "webLink"],
  ["Boddington, Australia", -32.797701, 116.476967, "http://gybenet.com/bod/sen/rgb.html", "https://en.wikipedia.org/wiki/Boddington,_Western_Australia"],
  ["Bull Run Reservoir, OR", 45.484654, -122.071313, "http://gybenet.com/bul/sen/rgb.html", "https://en.wikipedia.org/wiki/Bull_Run_River_(Oregon)"],
  ["El Capitan, San Diego, CA", 32.883988, -116.808364, "http://gybenet.com/cap/sen/rgb.html", "https://en.wikipedia.org/wiki/El_Capitan_Dam"],
  // ["cha", lat, lon, "http://gybenet.com/cha/sen/rgb.html", "webLink"],
  // ["chr", lat, lon, "http://gybenet.com/chr/sen/rgb.html", "webLink"],
  // ["cht", lat, lon, "http://gybenet.com/cht/sen/rgb.html", "webLink"],
  ["Collinsville, CA", 38.073458, -121.850100, "http://gybenet.com/col/sen/rgb.html", "https://en.wikipedia.org/wiki/Collinsville,_California"],
  ["Cougar Reservoir, OR", 44.101631, -122.229920, "http://gybenet.com/cor/sen/rgb.html", "https://en.wikipedia.org"],
  ["Detroit Reservoir, OR", 44.714250, -122.244410, "http://gybenet.com/det/sen/rgb.html", "https://en.wikipedia.org/wiki/Detroit_Lake"],
  ["Dexter Reservoir, OR", 43.913507, -122.785281, "http://gybenet.com/dex/sen/rgb.html", "https://en.wikipedia.org/wiki/Dexter_Reservoir"],
  // ["dia", lat, lon, "http://gybenet.com/dia/sen/rgb.html", "webLink"],
  ["Discovery Bay, WA", 47.993711, -122.883282, "http://gybenet.com/dis/sen/rgb.html", "https://en.wikipedia.org/wiki/Discovery_Bay,_Washington"],
  ["Dunedin, New Zealand", -45.883323, 170.515066, "http://gybenet.com/dun/sen/rgb.html", "https://en.wikipedia.org/wiki/Dunedin"],
  // ["dww", lat, lon, "http://gybenet.com/dww/sen/rgb.html", "webLink"],
  ["Tiburon, CA", 37.885760, -122.476494, "http://gybenet.com/eos/sen/rgb.html", "https://en.wikipedia.org/wiki/Tiburon,_California"],
  ["Eureka Platform, CA", 33.502194, -118.173687, "http://gybenet.com/eur/sen/rgb.html", "https://www.scubadiving.com/photos/go-diving-southern-californias-oil-rig-reefs"],
  // ["ewe", lat, lon, "http://gybenet.com/ewe/sen/rgb.html", "webLink"],
  ["Geren Island, OR", 44.794042, -122.764460, "http://gybenet.com/ger/sen/rgb.html", "https://www.cityofsalem.net/Pages/salem-water-source.aspx"], 
  // ["gra", lat, lon, "http://gybenet.com/gra/sen/rgb.html", "webLink"],
  ["Grizzly Bay, CA", 38.125285, -122.044448, "http://gybenet.com/gri/sen/rgb.html", "https://en.wikipedia.org/wiki/Grizzly_Bay"],
  // ["grv", lat, lon, "http://gybenet.com/grv/sen/rgb.html", "webLink"],
  ["Hood Canal, WA", 47.602468, -122.961074, "http://gybenet.com/hoo/sen/rgb.html", "https://en.wikipedia.org/wiki/Hood_Canal"],
  ["Hopatcong Lake, NJ", 40.949438, -74.633434, "http://gybenet.com/hop/sen/rgb.html", "https://en.wikipedia.org/wiki/Lake_Hopatcong"],
  ["Indian River, FL", 28.211405, -80.645729, "http://gybenet.com/ind/sen/rgb.html", "https://en.wikipedia.org/wiki/Indian_River_(Florida)"],
  // ["Adriatic Sea", 43.243398, 17.010662 ,"http://gybenet.com/jad/sen/rgb.html", "https://en.wikipedia.org/wiki/Adriatic_Sea"], oceancolor link is not working
  // ["jak", lat, lon, "http://gybenet.com/jak/sen/rgb.html", "webLink"],
  ["Jordan Lake (Cape Fear), NC", 35.712295, -79.036954, "http://gybenet.com/jor/sen/rgb.html", "https://en.wikipedia.org/wiki/Jordan_Lake"],
  ["Lady Bird Lake, Austin, TX", 30.246772, -97.718286, "http://gybenet.com/ldy/sen/rgb.html", "https://en.wikipedia.org/wiki/Lady_Bird_Lake"],
  ["San Louis Reservoir, CA", 37.052383, -121.124112, "http://gybenet.com/lui/sen/rgb.html", "http://www.parks.ca.gov/?page_id=558"],
  // ["mac", lat, lon, "http://gybenet.com/mac/sen/rgb.html", "webLink"],
  ["McKenzie River, OR", 44.148945, -122.579255, "http://gybenet.com/mck/sen/rgb.html", "https://en.wikipedia.org/wiki/McKenzie_River_(Oregon)"],
  // ["nbt", lat, lon, "http://gybenet.com/nbt/sen/rgb.html", "webLink"],
  ["Bahua de Ohuira, Sinaloa, Mexico", 25.633838, -108.991550, "http://gybenet.com/ohu/sen/rgb.html", "http://www.weatherbase.com/weather/weather-summary.php3?s=925099&cityname=Bah%EDa+de+Ohuira%2C+Sinaloa%2C+Mexico&units="], //not a good link, find something better
  ["Oroville Reservoir, CA", 39.556976, -121.456147, "http://gybenet.com/oro/sen/rgb.html", "https://en.wikipedia.org/wiki/Lake_Oroville"], 
  ["Perth (Swan Lake), Australia", -31.964123, 115.856724, "http://gybenet.com/per/sen/rgb.html", "https://en.wikipedia.org/wiki/Swan_River_(Western_Australia)"], 
  // ["pro", lat, lon, "http://gybenet.com/pro/sen/rgb.html", "webLink"],
  // ["pyr", lat, lon, "http://gybenet.com/pyr/sen/rgb.html", "webLink"],
  ["Rocky Bay, WA", 47.356457, -122.794400,"http://gybenet.com/rok/sen/rgb.html", "https://www.doh.wa.gov/CommunityandEnvironment/Shellfish/GrowingAreaRestoration/ShellfishProtectionDistrictsLibrary/OrganizedbySPD/BurleyFilucyRockySPD"], // not a great link, govt site about protection district
  ["Ross Island, OR", 45.489956, -122.659128,"http://gybenet.com/ros/sen/rgb.html", "https://en.wikipedia.org/wiki/Ross_Island_(Oregon)"],
  ["Samish Bay, WA", 48.597725, -122.475547,"http://gybenet.com/sam/sen/rgb.html", "http://www.samishisland.net/about.html"], 
  ["Laguna del Sauce, Uruguay", -34.825800, -55.066876, "http://gybenet.com/sau/sen/rgb.html", "https://en.wikipedia.org/wiki/Laguna_del_Sauce"],
  ["Selbay, MD", 38.911591, -76.510946, "http://gybenet.com/sel/sen/rgb.html", "https://en.wikipedia.org/wiki/Selby-on-the-Bay,_Maryland"], 
  ["San Francisco Bay & Delta, CA", 38.102135, -122.050026, "http://gybenet.com/sfb/sen/rgb.html", "https://en.wikipedia.org/wiki/San_Francisco_Bay"],
  ["Silverwood Lake, CA", 34.291468, -117.325807, "http://gybenet.com/sil/sen/rgb.html", "https://en.wikipedia.org/wiki/Silverwood_Lake"],
  // ["sn", lat, lon, "http://gybenet.com/sn/sen/rgb.html", "webLink"],
  ["Stennis Space Center, MS", 30.352250, -89.645983, "http://gybenet.com/ssc/sen/rgb.html", "https://en.wikipedia.org/wiki/John_C._Stennis_Space_Center"],
  // ["stg", lat, lon, "http://gybenet.com/stg/sen/rgb.html", "webLink"],
  ["Lake Tana, Ethiopia", 12.009332, 37.298897, "http://gybenet.com/tan/sen/rgb.html", "https://en.wikipedia.org/wiki/Lake_Tana"], 
  ["Tana River, Kenya", -0.463446, 39.635899, "http://gybenet.com/tar/sen/rgb.html", "https://en.wikipedia.org/wiki/Tana_River_(Kenya)"],
  ["Valle de Bravo, Mexico", 19.192422, -100.155311, "http://gybenet.com/vdb/sen/rgb.html", "https://en.wikipedia.org/wiki/Valle_de_Bravo"],
  ["San Vicente, San Diego, CA", 32.920935, -116.923524, "http://gybenet.com/vic/sen/rgb.html", "https://en.wikipedia.org/wiki/San_Vicente_Dam"], 
  ["Lake Washington, FL", 28.142239, -80.742237, "http://gybenet.com/was/sen/rgb.html", "https://en.wikipedia.org/wiki/Lake_Washington_(Florida)"],
  ["Willow Creek Dam, OR", 45.346630, -119.544009, "http://gybenet.com/wil/sen/rgb.html", "https://en.wikipedia.org/wiki/Willow_Creek_Dam_(Oregon)"],
  ["Laguna de Yuriria, Guanajuato, Mexico", 20.250905, -101.133857, "http://gybenet.com/yur/sen/rgb.html", "https://es.wikipedia.org/wiki/Laguna_de_Yuriria"],
  
//   ["Diamond Lake", 33.682725, -117.013607, "http://gybenet.com/dia/sen/rgb.html", "webLink"],
//   ["Pyramid Lake", 40.050989, -119.545272, "http://gybenet.com/pyr/sen/rgb.html" , "webLink"],
//   ["Puget Sound", 47.726929, -122.504591,"", "webLink"],
//   ["Salt Lake", 41.013424, -112.400531 ,"", "webLink"],
//   ["Charles River, Boston",42.352874, -71.103053, "http://gybenet.com/cha/sen/rgb.html", "webLink"],

]
function math (){
  var dotColor;
var randNum =Math.floor(Math.random()*Math.floor(10));
if (randNum < 4){
  console.log("age is less than 4");
var dotColor = "redDot"
return dotColor;
} else if (randNum >=4 && randNum <= 7) {
console.log("age is between 4 and 7");
var dotColor = "yellowDot";
return dotColor;


} else {
console.log("age is greater than 7");
var dotColor = "blueMarker";
}
return dotColor
}

for (let i=0; i<sitesArr.length; i++){
  console.log(sitesArr[i][3].split(".com/")[1].split("/")[0]); //this is currently targeting the 3 digit site code. Assuming we can use this for our data to grab for recent dirty water
}

function populate() {
  // var age = math()
  
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
          alt_link: sitesArr[i][4],
          // age: math()// currently calls the math function... should instead call the function for getting time since last bad water. that function returns a number which converts the dot to a color coordinated to the time. 
        }
      },
    ]
  };
  // add markers to map
  geojson.features.forEach(function(marker) {
    
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = math();
    
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h1>'+ marker.properties.age + '</h1>'+'<h3>' + marker.properties.title + '</h3><a href="' + marker.properties.link + '">' +"Water Quality Maps" +'</a>' + '<br><a href="' + marker.properties.alt_link + '">' +"Additional Information Here" +'</a></p>'))
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
  

popup.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});

map.on('mouseleave', 'places', function() {
map.getCanvas().style.cursor = '';
popup.remove();
});