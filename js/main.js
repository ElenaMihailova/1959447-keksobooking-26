import { generateArrayAdvertisments } from './data.js';
import { createCardElement, renderCard } from './map.js';
import {disableMapFilters} from './filter-form.js';
//TODO
import './form-validation.js';


/** Массив объявлений */
const advertisments = generateArrayAdvertisments(10);

/** Создание карточки */
const cardElements = advertisments.map(createCardElement);

/** Отрисовать на карте 1 карточку */
renderCard(cardElements[0]);

/**При открытии страница находится в неактивном состоянии */
// disableForm();
// disableMapFilters();

//Блокировка формы с фильтрами
disableMapFilters();
