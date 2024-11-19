# USGS Earthquake Visualization
    Christopher Kellam

    Languages, Libraries, Tools Used in the project:
        Languages: JavaScript, HTML, CSS
        Libraries: Leaflet.js
        Deployment: GitHub Pages

**Project Overview**
This project uses earthquake data provided by the United States Geological Survey (USGS) to create an interactive map that visualizes global earthquake activity. The map displays earthquake magnitudes, depths, and locations, helping the public and relevant organizations understand seismic activity and potentially secure funding for research and preparedness.

The dashboard includes:
- A map that shows earthquake locations with markers reflecting magnitude (size) and depth (color).
- Popups with additional information for each earthquake.
- A legend for depth-based color coding.
- An optional overlay of tectonic plates and layer controls for multiple base maps and data overlays.

**1. Data Source**
The earthquake data is sourced from the USGS GeoJSON feed, which updates in real-time with recent earthquake events. To retrieve the data, the URL of the GeoJSON feed for "All Earthquakes from the Past 7 Days" was used. The tectonic plates data, used for additional context, is sourced from GitHub’s tectonic plates dataset.

**2. Visualization Features**
Earthquake Map
The map displays earthquakes as markers on a global scale using Leaflet.js, where:
- Marker Size: Represents the earthquake’s magnitude.
- Marker Color: Indicates earthquake depth (darker colors represent greater depths).
- Popups: Display additional details, including magnitude, location, and depth, when a marker is clicked.
- Legend: A legend is added to the map to clarify the color scheme for earthquake depth, enhancing user comprehension of depth-based data visualization.

    ![Map Example](map1.jpg)

**3. Dynamic Updates**
The visualization dynamically pulls updated earthquake data from the USGS feed every five minutes. The data is parsed and displayed on the map in real-time, providing the most current view of global earthquake activity.

**4. Interactive Map**
A second, interactive map was created that illustrates the relationship between tectonic plates and seismic activity. It includes:
- A tectonic plates overlay, sourced from the GitHub tectonic plates dataset.
- Multiple base maps (satellite, grayscale, and street view).
- Layer controls for toggling between earthquakes, tectonic plates, and different base maps.

    ![Interactive Map Example](map2.jpg)





***Notes***

Part 1
-used ChatGPT for help in making and debugging createFeatures function
-used ChatGPT for help in creating the legend

Part 2
-used ChatGPT to help find a satellite map I can use for another layer
-used ChatGPT for help in making overlays 
-used ChatGPT for help in creating layer control
