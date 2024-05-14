import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.scss'
import '/src/open.scss'


export default function Map() {
    const position = [48.12599, -1.64820]; // Set your own coordinates
    return (
        <MapContainer center={position} zoom={17} style={{height: "100vh", width: "100%"}}>
            <TileLayer
                maxZoom={20}
                minZoom={15}
                url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
            />
        </MapContainer>
    );
}

// Old version

/*

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
*/
