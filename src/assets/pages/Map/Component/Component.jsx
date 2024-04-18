import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import file from '../markers.json'
function Component() {
    const position = [48.12599,-1.64820]; // Set your own coordinates

    return (
        <div>
            <MapContainer center={position} zoom={20}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Markers />
            </MapContainer>
        </div>
    );
}

function Markers () {

    let markers = [];
    let i = 0;

    for (const bat in file) {
        markers.push(
            <Marker position={[file[bat].latitude, file[bat].longitude]}>
                <Popup>
                    {file[bat].name}
                    <br />
                    {file[bat].description}
                </Popup>
            </Marker>
        )
        i++;
    }

    return markers;
}

export default Component;