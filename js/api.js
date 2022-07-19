// отправка и получение данных getDat sendData - две функции
// import {displayMessageError, displayMessageSuccess } from './message.js';

const getData = (onSuccess, onFail) => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail('Произошла ошибка при загрузке. Попробуйте ещё раз.');
    });
};

// TODO body сделать 1-ым Nikolay
const sendData = (body, onSuccess, onFail) => {
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Форма не отправлена. Попробуйте еще раз.');
      }
    })
    .catch(() => {
      onFail('Форма не отправлена. Попробуйте еще раз.');
    });
};


export {getData, sendData};
