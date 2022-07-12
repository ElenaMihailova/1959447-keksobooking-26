import {disableForm, enableForm} from './form.js';
import {createCardElement} from './cards.js';

const formElement = document.querySelector('.ad-form');

disableForm();

// Отрисована карта, страница активна
const map = L.map('map-canvas')
  .on('load', () => {
    enableForm();
  })
  .setView({
    lat: 35.68952,
    lng: 139.69199,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// Отрисована метка
const pinIconElement = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// eslint-disable-next-line no-unused-vars
const pinIconSimilarElement = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);

const pinMarkerElement = L.marker(
  {
    lat: 35.68952,
    lng: 139.69199,
  },
  {
    draggable: true,
    icon: pinIconElement,
  },
);

pinMarkerElement.addTo(map);

pinMarkerElement.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  formElement.querySelector('#address').value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

/** Создание метки и прикрепление объявления к ней */
const createMarker = (paramPoint) => {
  const {lat, lng} = paramPoint.location;
  const marker = L.marker({
    lat,
    lng,
  }, {
    pinIconElement
  });
  marker.addTo(markerGroup).bindPopup(createCardElement(paramPoint));
};

const addPoints = (paramData) => {
  paramData.forEach((paramPoint) => {
    createMarker(paramPoint);
  });
};
// todo не подтягивается специальная метка, к главной нет объявления.

//не подключено
markerGroup.clearLayers();

export {addPoints, markerGroup};
