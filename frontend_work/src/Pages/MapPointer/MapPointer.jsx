
import { AdvancedMarker, APIProvider, InfoWindow, Map, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

const MapPointer = ({ points }) => {
    const [markerRef, marker] = useAdvancedMarkerRef(true);

    return (
        <>
            <APIProvider apiKey={'AIzaSyDmCAnXJg525Oi2pLmp6X1aIRvgoUFs3Fo'}>
                <Map defaultCenter={{ lat: 51.506, lng: -0.184 }} defaultZoom={10} mapId="e47e3dc438967ab5">
                    {points.map(point => {
                        return (<>
                            <AdvancedMarker position={point} ref={markerRef} collisionBehavior='OPTIONAL_AND_HIDES_LOWER_PRIORITY' onClick={() => ""} />
                            <InfoWindow anchor={marker}>Infowindow Content</InfoWindow>
                        </>)
                    })}
                </Map>
            </APIProvider>
        </>
    )
}

export default MapPointer;