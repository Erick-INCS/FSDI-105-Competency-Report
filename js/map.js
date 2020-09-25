var map = L.map('map').setView([32.572042, -116.645386], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([32.572042, -116.645386]).addTo(map)
    .bindPopup('The fashion pet')
    .openPopup();