export function MapMarker() {
    return (<Marker
        position={[trail_points[i].lat, trail_points[i].long]}
        alt={i}
        eventHandlers={{
            click: (e) => {
                console.table(e);
                console.log("*************************************************************i " + e);
                props.setCurrentMarker(e.sourceTarget.options.alt);
            }
        }}
        icon={new icon({ iconUrl: i==props.currentMarker ? "./marker-red.png" : "./marker.png", iconsize: [25, 41], iconanchor: [12, 41] })}>
    </Marker>);
}