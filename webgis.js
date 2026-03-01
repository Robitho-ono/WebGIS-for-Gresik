const gresikCoords = [-7.157114, 112.656006];
const map = L.map('map').setView(gresikCoords, 11);

const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);
const satelitLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
});

// Menyiapkan "Kamar Kosong" untuk Layer Tematik Geografis
// Nanti file .geojson hasil QGIS/SAGA milikmu akan dimasukkan ke sini
const administrasiLayer = L.layerGroup();
const morfologiLayer = L.layerGroup();
const geologiLayer = L.layerGroup();
const kelerenganLayer = L.layerGroup();

// Membuat Kontrol Layer (Tombol centang di pojok kanan atas)
const baseMaps = {
    "Peta Jalan (OSM)": osmLayer,
    "Peta Satelit (Esri)": satelitLayer
};

const overlayMaps = {
    "Batas Administrasi": administrasiLayer,
    "Morfologi": morfologiLayer,
    "Geologi": geologiLayer,
    "Kelerengan (DEM)": kelerenganLayer
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

/* ====================================================================
BAGIAN INI ADALAH CONTOH CARA MEMANGGIL DATA GEOJSON NANTINYA
(Kodenya saya matikan dulu agar tidak error karena filenya belum ada)
====================================================================

fetch('administrasi_gresik.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: { color: "blue", weight: 2 }
        }).addTo(administrasiLayer);
    });
*/