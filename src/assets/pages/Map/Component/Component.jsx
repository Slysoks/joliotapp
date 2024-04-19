import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import file from '../markers.json'
import L from 'leaflet';


function Component() {
    const position = [48.12599,-1.64820]; // Set your own coordinates

    return (
        <MapContainer center={position} zoom={18} style={{height : '100vh'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers />
        </MapContainer>
    );
}

function getIcon(iconName) {
    return new L.Icon({
        iconUrl: `/src/assets/img/icons/map/${iconName}.svg`,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });

}

function Markers () {

    let markers = [];
    let i = 0;

    for (const bat in file) {
        let icon = getIcon(file[bat].icon);
        markers.push(
            <Marker position={[file[bat].coordinates.latitude, file[bat].coordinates.longitude]} key={i} icon={icon}>
                <Popup>
                    <h1>{file[bat].name}</h1>
                    <br/>
                    <h2>{file[bat].description}</h2>
                </Popup>
            </Marker>
        )
        i++;
    }

    return markers;
}

export default Component;