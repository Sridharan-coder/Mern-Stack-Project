
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';

const MapPointer = () => {

    const points = [
        { lat: 51.506, lng: -0.184 },
        { lat: 51.508, lng: -0.175 },
        {  lat: 51.505, lng: -0.164 }
    ];

    return (
        <>

            <APIProvider apiKey={'AIzaSyDmCAnXJg525Oi2pLmp6X1aIRvgoUFs3Fo'}>
                <Map defaultCenter={ {lat: 51.506, lng: -0.184} } defaultZoom={10} mapId="e47e3dc438967ab5">
                    {points.map(point =>{
                       return <AdvancedMarker position={point} />
                     })} 
                    
                </Map>
            </APIProvider>

        </>
    )

}

export default MapPointer;