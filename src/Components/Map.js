import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
	return (
		<section className='section leaflet-container'>
			<MapContainer
				center={[41.481485, -71.310328]}
				zoom={12}
				scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[41.481485, -71.310328]}>
					<Popup>
						<h3>Modern Art Gallery</h3>
						<address>
							99 King Street <br />
							Newport <br />
							RI 02840 <br />
							United States of America
						</address>
					</Popup>
				</Marker>
			</MapContainer>
		</section>
	);
};

export default Map;
