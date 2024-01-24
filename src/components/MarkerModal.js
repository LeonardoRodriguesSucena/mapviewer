import React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import WeatherComponent from './Weather' 
import styles from '../styles/markermodal.module.css';

//component to show Marker's information 123
function MarkerModalComponent({ marker, onClose, onDelete}) {
  if(marker)
    return (
        <>
            <div>
                <InfoWindow
                position={{ lat: marker.lat, lng: marker.lng }}
                onCloseClick={onClose}>
                    <div className={styles.info_box}>
                        <h3>Marker {marker.id.slice(0,8)}</h3>
                        Easting: {marker.easting}<br/>
                        Northing: {marker.northing}<br/>
                        Lat: {marker.lat}<br/>
                        Lon: {marker.lng}<br/>
                        Depth [m]: {marker.meta_depth}<br/>
                        Layer amount [-]: {marker.meta_layer}
                        <hr/>
                        <WeatherComponent latitude={marker.lat} longitude={marker.lng}/>
                        <br/>
                        <div className={styles.div_btn}>
                            <button className={styles.btn_delete} onClick={() => {onDelete(marker), onClose()} }
                                title='Click this button to delete the marker.'
                            >Delete</button>
                        </div>
                    </div>
                </InfoWindow>        
            </div>
        </>
    );
}

export default MarkerModalComponent;