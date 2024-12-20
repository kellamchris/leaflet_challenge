// create a map object
let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 5
});

// create tile layer for base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// fetch the data
let url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson`;

d3.json(url).then(function(response) {
    createFeatures(response.features);
});

// create function to iterate through data and add markers and heatmap points
function createFeatures(earthquakeData) {
    let heatArray = [];

    earthquakeData.forEach(feature => {
      // get the earthquake's coordinates, magnitude, and depth
      let coordinates = [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
      let magnitude = feature.properties.mag;
      let depth = feature.geometry.coordinates[2];
  
      // set color and size markers
      let color = getColor(depth);
      let radius = magnitude * 4;
  
      // create a circle marker
      L.circleMarker(coordinates, {
        radius: radius,
        fillColor: color,
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      }).bindPopup(`<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${magnitude}<br>Depth: ${depth} km</p>`)
      .addTo(myMap);
      
      // add coordinates and magnitude to heatmap array
      if (coordinates) {
        heatArray.push([coordinates[0], coordinates[1], magnitude]);
      }
    });

    // create heatmap layer and add to map
    L.heatLayer(heatArray, {
      radius: 25,
      blur: 15,
      maxZoom: 10
    }).addTo(myMap);
}

// assign colors based on depth of earthquake
function getColor(depth) {
    return depth > 90 ? "red" :
           depth > 70 ? "orange" :
           depth > 50 ? "gold" :
           depth > 30 ? "yellow" :
           depth > 10 ? "lightgreen" :
                        "green";
}

// add a legend
let legend = L.control({position: "bottomright"});

legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend");

  // add background and border styling
  div.style.backgroundColor = "white";
  div.style.padding = "10px";
  div.style.border = "2px solid black";
  div.style.borderRadius = "5px";
  
  let depths = [0, 10, 30, 50, 70, 90];
  let colors = ["green", "lightgreen", "yellow", "gold", "orange", "red"];

  // loop through depths and create colored squares with labels
  for (let i = 0; i < depths.length; i++) {
    div.innerHTML +=
      `<i style="background:${colors[i]}; width:18px; height:18px; display:inline-block; margin-right:5px;"></i> ` +
      `${depths[i]}${(depths[i + 1] ? '&ndash;' + depths[i + 1] : '+')}<br>`;
  }

  return div;
};

legend.addTo(myMap);
