class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialData() {
    return Promise.all([this.getUser(), this.getInitialCards()]);
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  setUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._handleServerResponse);
  }

  addNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._handleServerResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  unlikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (!isLiked) {
      return this.unlikeCard(cardId);
    } else {
      return this.likeCard(cardId);
    }
  }

  updateAvatar(avatarLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    }).then(this._handleServerResponse);
  }
}

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "b6c48350-073f-4ba1-b66b-777746c5da2d",
    "Content-Type": "application/json",
  },
});

export default api;

// const userInfo = new UserInfo({
//   nameSelector: ".profile__title",
//   jobSelector: ".profile__subtitle",
//   avatarSelector: ".profile__image",
// });

// api
//   .getInitialData()
//   .then(([userData, initialCards]) => {
//     userInfo.setUserInfo({
//       name: userData.name,
//       job: userData.about,
//       avatar: userData.avatar,
//     });
//     cardsList.renderItems(initialCards);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
