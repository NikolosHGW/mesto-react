const BASE_URL = 'https://auth.nomoreparties.co';

function getPromise(email, password, endPoint) {
  return fetch(`${BASE_URL}${endPoint}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password,
      email
    })
  })
    .then(res => {
      console.log(res.status);
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка. Status: ${res.status}; Status text: ${res.statusText}`);
    });
}

export function register(email, password) {
  return getPromise(email, password, '/signup');
}

export function authorize(email, password) {
  return getPromise(email, password, '/signin');
}
