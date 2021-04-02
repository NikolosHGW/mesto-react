const BASE_URL = 'https://auth.nomoreparties.co';

export default function register(email, password) {
  return fetch(`${BASE_URL}/signup`, {
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
        console.log(res.ok);
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}. ${res.statusText}.`);
    });
}
