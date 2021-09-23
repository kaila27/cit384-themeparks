var parkLogo = document.getElementById("parkLogo");
var parkAbout = document.getElementById("parkAbout");
var parkName = document.getElementById("parkName");
var parkSafety = document.getElementById("parkSafety");
var foodHeader = document.getElementById("foodHeader");
var rideHeader = document.getElementById("rideHeader");

const disneySafety =
  "Certain theme parks, hotels, restaurants and other locations are limited in capacity and subject to restricted availability or even closure based on guidance from health experts and government officials. Furthermore, certain attractions, experiences, services and amenities are modified, have limited availability or remain closed. Park admission and offerings are not guaranteed.As a result of the impact of COVID-19 on operations, FASTPASS and Disney MaxPass services are suspended for the time being and are not available for purchase or use. We will share future updates at a later date.Magic Morning and Extra Magic Hour offerings are unavailable as we plan to manage attendance. We will share any updates on these offerings at a later date.";
const sixSafety =
  "Prior to visiting the park, all guests will be asked to carefully review our health policy, which requires all attendees to have been healthy for at least 14 days prior to their visit. All guests over the age of 2 and all team members will be required to wear face masks covering the nose and mouth throughout their time on the property (exceptions apply in pools and on waterpark attractions). Mask Break Zones are available. Napkins, knives, and forks will now be securely stored and provided to guests with their meal, as required or on request. To maximize the sanitization of our ride queue rails, we’ll provide and encourage the use of hand sanitizer at the entrance of all ride queues. Depending on the experience, we’ll also make hand sanitizer available at ride exits.";
const universalSafety =
  "Universal Studios Hollywood is now open. In accordance with government guidelines, to visit you must either be a California resident or an out-of-state visitor who is fully vaccinated (at least 14 days after final dose was administered) for COVID-19 with a vaccine authorized for emergency use by the FDA or WHO (proof of COVID-19 vaccination and photo ID will be required for park entry by out-of-state visitors, click here for requirements). Unfortunately, at this time, we can only welcome out-of-state visitors age 16 and over as children are not eligible for vaccination. Party size for all visitors is limited to a maximum of three households.";

var rideDisney = [
  "Splash Mountain",
  "Rise of the Resistance",
  "Space Mountain",
  "Autatopia",
  "Indiana Jones"
];
var foodDisney = ["Churros", "Pretzels", "Pizza", "Soda", "Popcorn"];
var rideUniversal = [
  "Jurassic World",
  "The Mummy",
  "The Simpsons Ride",
  "Transformers The Ride",
  "The Wizarding World Of Harry Potter"
];
var foodUniversal = [
  "Jurassic Cafe",
  "Duff Gardens",
  "Studio Scoop",
  "Grab a Snack",
  "Gru's Lab Cafe"
];
var rideSixFlags = [
  "Tatsu",
  "X2",
  "Drop of Doom",
  "Scream",
  "Twisted Colossus"
];
var foodSixFlags = [
  "Big belly Burger",
  "Chicken Coupe",
  "Funnel Cake Factory",
  "Chop Six",
  "Carlini's Pizzeria"
];
const disneyAbout =
  "Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955. It is the only theme park designed and built to completion under the direct supervision of Walt Disney.";

function updateDisney() {
  var map = new Microsoft.Maps.Map("#myMap", {
    center: new Microsoft.Maps.Location(33.81286, -117.91904),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 16,

    disableZooming: true,
    disablePanning: true,
    disableMapTypeSelectorMouseOver: true,
    showDashboard: false
  });
  parkSafety.innerHTML = disneySafety;
  parkName.innerHTML = "Disneyland";
  foodHeader.innerHTML = "Food";
  rideHeader.innerHTML = "Ride";
  parkLogo.innerHTML =
    '<img id="logo" src="https://cdn.glitch.com/6e6bb965-c354-4348-85af-0fcde702eb29%2FScreen%20Shot%202021-05-13%20at%207.50.58%20PM.png?v=1620960667116" />';
  parkAbout.innerHTML =
    "Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955. It is the only theme park designed and built to completion under the direct supervision of Walt Disney.";

  parkName.style = "font-family: 'Dancing Script', cursive;";
  updatePark(foodDisney, "food");
  updatePark(rideDisney, "ride");
}

function updateSix() {
  var map = new Microsoft.Maps.Map("#myMap", {
    center: new Microsoft.Maps.Location(34.42418, -118.59761),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 16,
    disableZooming: true,
    disablePanning: true,
    disableMapTypeSelectorMouseOver: true,
    showDashboard: false
  });
  parkSafety.innerHTML = sixSafety;
  parkName.innerHTML = "Six Flags California";
  parkLogo.innerHTML =
    '<img id="logo" src="https://cdn.glitch.com/6e6bb965-c354-4348-85af-0fcde702eb29%2FScreen%20Shot%202021-05-13%20at%207.53.23%20PM.png?v=1620960808405" />';
  foodHeader.innerHTML = "Food";
  rideHeader.innerHTML = "Ride";
  parkAbout.innerHTML =
    "Six Flags Entertainment Corporation, more commonly known as Six Flags or as Six Flags Theme Parks, is an American amusement park corporation, headquartered in Arlington, Texas. It has properties in Canada, Mexico, and the United States.";
  parkName.style = "font-family: 'Arvo', serif; font-size: 60px;";
  updatePark(foodSixFlags, "food");
  updatePark(rideSixFlags, "ride");
}
function updateUniversal() {
  var map = new Microsoft.Maps.Map("#myMap", {
    center: new Microsoft.Maps.Location(34.13715, -118.35346),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 16,
    disableZooming: true,
    disablePanning: true,
    disableMapTypeSelectorMouseOver: true,
    showDashboard: false
  });
  parkSafety.innerHTML = universalSafety;
  parkName.innerHTML = "Universal Studios";
  foodHeader.innerHTML = "Food";
  rideHeader.innerHTML = "Ride";
  parkLogo.innerHTML =
    '<img id="logo" src="https://cdn.glitch.com/6e6bb965-c354-4348-85af-0fcde702eb29%2FScreen%20Shot%202021-05-13%20at%207.52.34%20PM.png?v=1620960764131" />';
  parkAbout.innerHTML =
    "Universal Studios Hollywood is a film studio and theme park in the San Fernando Valley area of Los Angeles County, California. About 70% of the studio lies within the unincorporated county island known as Universal City while the rest lies within the city limits of Los Angeles, California.";
  parkName.style = "font-family: 'Goblin One', cursive; font-size: 50px;";
  updatePark(foodUniversal, "food");
  updatePark(rideUniversal, "ride");
}

$(document).ready(function() {
  $(".ui.dropdown").dropdown();
});
$(".dropdown").on("click", function() {
  getValue();
});

function getValue() {
  if ($("#dropdown").dropdown("get text") == "Disneyland") {
    updateDisney();
  } else if ($("#dropdown").dropdown("get text") == "Six Flags California") {
    updateSix();
  } else if ($("#dropdown").dropdown("get text") == "Universal Studios") {
    updateUniversal();
  }
}

function updatePark(park, item) {
  var n;
  for (n = 0; n <= 4; n++) {
    document.getElementById(item + n).innerHTML = park[n];
  }
}
