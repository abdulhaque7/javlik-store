
const apiKey = 'S3rqHyHsXLJpyT_919c1svA_N0ztYF3DndxGraPSCTI';

const platform = new H.service.Platform({
        'apikey': apiKey
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(
        document.getElementById('map'),
        defaultLayers.vector.normal.map,
    { 
        center: { lat: 28.50130619436116, lng: 77.29248051439512 },
    zoom: 20,
    pixelRatio: window.devicePixelRatio || 1
}
);

const marker = new H.map.Marker({ lat: 28.50130619436116, lng: 77.29248051439512 });
map.addObject(marker);

const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

const ui = H.ui.UI.createDefault(map, defaultLayers);