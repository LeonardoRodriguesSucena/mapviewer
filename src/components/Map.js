import React from 'react'
import styles from "../styles/map.module.css";
import MarkerModalComponent from '../components/MarkerModal.js'

import { useJsApiLoader, GoogleMap, Marker, 
    TrafficLayer,
    TransitLayer, 
    BicyclingLayer,
    Autocomplete

} from '@react-google-maps/api';


//map size in screen
const containerStyle = {
  width: '100%',
  height: '92vh'
};

//initial center of map
const mapCenter = {
  lat: 29.984,
  lng: -1.786
};

//Case Study markers
//using UTM 36N (Universal Transverse Mercator)
let defaultMarkers = [
  { id: "1A", lat: 29.9846, lng: 1.7863, meta_depth:5,     meta_layer:3,  easting:164465.645, northing:197713.476 },
  { id: "2B", lat: 29.9563, lng: 1.7910, meta_depth:5,     meta_layer:6,  easting:161313.227, northing:198240.94 },
  { id: "3C", lat: 31.8500, lng: 1.5072, meta_depth:21,    meta_layer:1,  easting:372072,     northing:166621 },
  { id: "4D", lat: 32.0598, lng: 1.1018, meta_depth:3.23,  meta_layer:10, easting:395391,     northing:121794 },
  { id: "5E", lat: 29.5860, lng: 1.4450, meta_depth:4,     meta_layer:3,  easting:120000,     northing:160000 },
];

//This list have 5 options of styles to be applied on map
const mapStyles = {
    default: [],
    silver: [
      {
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#bdbdbd" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#dadada" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9c9c9" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
    ],
    night: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
    retro: [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9b2a6" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dcd2be" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ae9e90" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#93817c" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#a5b076" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#447530" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fdfcf8" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#f8c967" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e9bc62" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#e98d58" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ color: "#db8555" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#806b63" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8f7d77" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ebe3cd" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#b9d3c2" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#92998d" }],
      },
    ],
    grey: [{
        featureType: "all",
        elementType: "all",
        stylers: [{ saturation: -100 }, { gamma: 0.50 }]
    }],
};

const libraries = ['places']

function MapComponent() {
  
    const { isLoaded } = useJsApiLoader(
      {
        id: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: libraries
      })
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID

    const [map, setMap] = React.useState(null)

    const [markers, setMarkers] = React.useState([])
    const [selectedMarker, setSelectedMarker] = React.useState(null);
    
 
    const [layers, setLayers] = React.useState([])

    const [mapStyle, setMapStyle] = React.useState([])
    const [mapStyleSelected, setMapStyleSelected] = React.useState('')

    //input values latitude and longitude
    const [latInputValue, setLatInputValue] = React.useState('');
    const [lngInputValue, setLngInputValue] = React.useState('');
    const [autocomplete, setAutocomplete] = React.useState(null);


    //get the markers saved in local storage
    const loadMarkersFromLocalStorage = () => {
        const savedMarkers = localStorage.getItem('markers');
        if(savedMarkers)
        {
            let markers = JSON.parse(savedMarkers)
            if (markers.length > 0)
                setMarkers(markers);
        }
    };
    
    //select the style to be applied in the map
    //set the style name selected
    const setSelectedStyle = (styleName) =>
    {
        setMapStyleSelected(styleName);
        setMapStyle(mapStyles[styleName]);
        console.log(styleName);
    }
    
    //load the map and the markers saved in local storage
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(mapCenter);
        setMap(map)
        loadMarkersFromLocalStorage();
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    //On Marker click, set the selected marker
    const onMarkerClick = point => {
        setSelectedMarker(point);
    };

    //toogle to add or remove map layer 'Traffic', 'Transit', Bicycling...
    const changeLayer = (layerType) => {
        setLayers(prevLayers => {
            //Remove the layer if it already exists in the list
            if (prevLayers.includes(layerType)) {
              return prevLayers.filter(layer => layer !== layerType);
            } else {
            return [...prevLayers, layerType];
            }
        });
    }

    //Function to generate unique ID to be used in Marker's ID
    function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    }

    const onLoadAutoComplete = (autocomplete) => {
      console.log('autocomplete: ', autocomplete);
      setAutocomplete(autocomplete);
    };
  
    const onPlaceChanged = () => {
      if (autocomplete !== null) {
        let place = autocomplete.getPlace()
        console.log(place);
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();
        setLatInputValue(formatLatLong(latitude))
        setLngInputValue(formatLatLong(longitude))
        addMarker(latitude,longitude)
      } else {
        console.log('Autocomplete is not loaded yet!');
      }
    };

  const addMarker = (latitude, longitude) => {

    if(!isValidLatitudeLongitude(latitude, longitude))
    {
      alert('Invalid Latitude & Longitude!\nPlease insert:\nFor Latitude = -85.052 to 85.052\nFor Longitude = -180 to 180')
      return;
    }

    //check if the marker already exists with this lat & long
    //if it already exists, just return
    let markerFound = markers.find(m=>m.lat == latitude && m.lng == longitude)
    if (markerFound){
      console.log(`addMarker => Marker already exists lat:${latitude} lgn:${longitude}`)
      return;
    }

    //formating the latitude & longitude to max of 5 decimal places
    const lat_value = formatLatLong(latitude);
    const lng_value =  formatLatLong(longitude);
    console.log(`addMarker => lat:${lat_value} lng:${longitude}`)

    //preparing the new Maker
    let newMarker = { id: generateUUID() , lat: lat_value, lng: lng_value, meta_depth:0,  meta_layer:0,  easting:0, northing:0 }

    //adding the new Marker and updating the local storage
    setMarkers(prev => {
        let markers = [...prev, newMarker]
        localStorage.setItem('markers', JSON.stringify(markers));
        return markers;
    });

    //focus the map near to the new marker
    map.panTo({ lat: newMarker.lat, lng: newMarker.lng })
  }

  const formatLatLong = (value) => {
    return parseFloat(parseFloat(value).toFixed(5));
  } 

  function isValidLatitudeLongitude(lat, lng) {
    if ((lat.length <= 0) || (lng.length <= 0))
      return false;

    //validating the latitude and longitude
    //the max values for google maps are: lat(-85.052 to 85.052) and long(-180 to 180)
    //more than these values, the marker will me placed out of the map
    //isFinite(value) will return false if the value was not a number
    return (
            (isFinite(lat) && Math.abs(lat) <= 85.052 ) && 
            (isFinite(lng) && Math.abs(lng) <= 180)
    );
  }

  //reset the marker, only The 5 Case Study markers will be added
  const resetToDefaultMarkers = () => {
    setMarkers(defaultMarkers);
    map.panTo({ lat: defaultMarkers[0].lat, lng: defaultMarkers[0].lng })
    localStorage.setItem('markers', JSON.stringify(defaultMarkers));
  }

  //delete the marker and update the local storage
  const deleteMarker = (markerToRemove) => {
    setMarkers(prevMarkers => {
        if (prevMarkers.includes(markerToRemove)) {
           let markers = prevMarkers.filter(marker => marker !== markerToRemove);
           localStorage.setItem('markers', JSON.stringify(markers));
           return markers;
        } 
      });

  }

  // Regular expression to allow only numbers, '.', '-', and '+'
  const regex = /^[0-9.\-+]*$/;
  const handleLatChange = (event) =>{
    const { value } = event.target;
    if (regex.test(value))
      setLatInputValue(value);
    else
      return;
  }
  const handleLngChange = (event) =>{
    const { value } = event.target;
    if (regex.test(value)) 
      setLngInputValue(value);
    else
      return;
  }

  return isLoaded ? (
      <>
      <div className={styles.divmenu_parent}>        
        <div id="div_layersType" className={styles.divmenu}>
            <b>Layers: </b>
                <input type="checkbox" id="cb_trafficLayer"   defaultChecked={layers.includes('traffic')}    onClick={() => changeLayer('traffic')} />Traffic
                <input type="checkbox" id="cb_transitLayer"   defaultChecked={layers.includes('transit')}    onClick={() => changeLayer('transit')} />Transit
                <input type="checkbox" id="cb_bicyclingLayer" defaultChecked={layers.includes('bicycling')}  onClick={() => changeLayer('bicycling')} />Bicycling
        </div>

        <div id="div_markers" className={styles.divmenu}>
            <b>Markers: </b>
                Latitude:  <input id="txt_lat" type="text" value={latInputValue} className={styles.txt_lat_lgn} onChange={handleLatChange} maxLength="9"/>&nbsp;
                Longitude: <input id="txt_lng" type="text" value={lngInputValue} className={styles.txt_lat_lgn} onChange={handleLngChange} maxLength="10"/>&nbsp;
                <input type="button" value="+" title="Add a marker"
                  onClick={() =>  { 
                                    addMarker(latInputValue, lngInputValue);
                                    //reseting the inputs
                                    setLatInputValue('')
                                    setLngInputValue('')
                                  }
                  }
                className={styles.button} />
                &nbsp;
                <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoadAutoComplete}>
                  <input id='txt_autocomplete' maxLength="100" className={styles.txt_autocomplete}></input>
                </Autocomplete>
        </div>


        <div className={styles.divmenu_right}>
          <span className={styles.info_icon} 
            title='You can add markers by right-clicking on the map!'
            onClick={(e) => alert('You can add markers by right-clicking on the map!')}>Help?</span>
          <input type="button" value="Default Markers" title="reset to default markers!" onClick={() => resetToDefaultMarkers()} className={styles.button_reset} />
        </div>

      </div>
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={7}
        onLoad={onLoad}
        onUnmount={onUnmount}
        mapId={mapId}
        options={{
            //changing map style
            styles: mapStyle,
          }}
        
        onRightClick={(event) => { 
            {/* add markers when clicking on map */}
            addMarker(event.latLng.lat(), event.latLng.lng())
        }}
      >
        {/* generating the markers */}
        {markers.map(point => (
            <Marker key={point.id} 
                    position={{ lat: point.lat, lng: point.lng }} 
                    onClick={() => onMarkerClick(point)} />
                            )
                    )
        }

        {/* generating 1 modal component, will be displayed when selectedMarker exists */}
        <MarkerModalComponent marker={selectedMarker}
                     onDelete={() => deleteMarker(selectedMarker)}
                     onClose={() => setSelectedMarker(null)}
        />

        {/* generating the map layers */}
        {layers && layers.map(layer => {
          switch(layer) {
            case 'traffic':
              return <TrafficLayer autoUpdate key="layer_traffic" />;
            case 'transit':
              return <TransitLayer key="layer_transit" />;
            case 'bicycling':
              return <BicyclingLayer key="layer_bicycling" />;
            default:
              return null;
          }
        })}
                
      </GoogleMap>
      </>

  ) : <></>
}

export default MapComponent