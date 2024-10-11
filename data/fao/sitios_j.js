
var MarkerOptionsSitios = {
    radius: 8,
    fillColor: "#ff7f00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// // Contenido del popup para cada feature
function popupContentSitios(feature) {
    return (
        "<div id='Estilo1'><h3>Sitios para Modelos </h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<div id='Estilo3a'>" +
        "<b> Nombre : </b>" + feature.properties.id + "<br>" +
        // "<b> Habitantes (Censo 2010): </b>" + feature.properties.HABITANTES + "<br>" +
        // "<b> Tipo de asentamiento: </b>" + feature.properties.tipo_asent + "<br>" +
        // "<br>" +
        // "<b> <i>Fuente de Información:  </b>  INDEC - Censo 2010<br>" +
        // "<b> Fecha de actualización:  </b> - </i>" +
        "</div>"
    )
};
// Función para generar la leyenda
function createLegendSitios() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Sitios seleccionados', color: '' },
            { label: ' ', color: '#ff7f00' },
                    
            // Agrega aquí el resto de estilos con su respectiva etiqueta y color
        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                '<i style="background:' + style.color + '"></i> ' + style.label
            );
        });

        div.innerHTML = labels.join('<br>');
        return div;
    };

    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        if (map.hasLayer(SitiosSeleccionados)) {
            legend.addTo(map);
        } else {
            legend.remove();
        }
    }
// Eliminar la leyenda al inicio
legend.remove();
    // Escucha el cambio de estado de la capa
    map.on('overlayadd overlayremove', toggleLegend);
}


var sitios = 
{
    "type": "FeatureCollection",
    "name": "pto_seleccionados",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 9.0, "x": -63.667775624699999, "y": -26.9978160822, "fna": "Departamento Figueroa", "nam": "Figueroa", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -63.667775624681305, -26.99781608219158 ] } },
    { "type": "Feature", "properties": { "id": 10.0, "x": -63.818886276900002, "y": -28.491608617099999, "fna": "Departamento Atamisqui", "nam": "Atamisqui", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -63.818886276867708, -28.491608617058233 ] } },
    { "type": "Feature", "properties": { "id": 11.0, "x": -62.1812606644, "y": -27.9141178464, "fna": "Departamento Juan Felipe Ibarra", "nam": "Juan Felipe Ibarra", "NOMBRE_ECO": "Chaco Humedo", "precipitac": 1000.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -62.181260664350155, -27.914117846441705 ] } },
    { "type": "Feature", "properties": { "id": 12.0, "x": -63.891799380099997, "y": -25.867428735800001, "fna": "Departamento Pellegrini", "nam": "Pellegrini", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -63.891799380125747, -25.867428735809675 ] } }
    ]
    }
    
