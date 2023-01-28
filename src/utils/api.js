// функция проверки возврата фетч
const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.json.status}`)
}

class Api {
    constructor ({baseURL, headers}){
        this._headers = headers;
        this._baseURL = baseURL;       
    }

    getProductsList(){
        return fetch(`${this._baseURL}/products`, {
            headers: this._headers
        }).then(onResponce)
    };
    
    getUsersInfo(dataUser) {
        return fetch(`${this._baseURL}/users/me`, {
            headers: this._headers
            
        }).then(onResponce)
    };

    setUserInfo(dataUser) {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(dataUser) 
        }).then(onResponce)
    };

    search(searchQuerry) {
        // в качестве значения searchQuerry будет приниматься, то что передается в функцию search
        return fetch(`${this._baseURL}/products/search/?query=${searchQuerry}`, {
            headers: this._headers
        }).then(onResponce)  
    }

    changeLikeProduct(productId, isLike) {
        return fetch(`${this._baseURL}/products/likes/${productId}`, {
            // если стоит лайк, то он будет удален, если нет, то удален
            method: isLike ? "DELETE" : "PUT",
            headers: this._headers
        }).then(onResponce)
    }

}

const config ={
    baseURL: 'https://api.react-learning.ru',
    headers: {
        'content-type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNjU5Yjk4YjAzOGY3NzlkMGMiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NDgsImV4cCI6MTY5OTQ0Nzk0OH0.0nzvf_Hh1V68Vh1XPSIo0OvKySzZW8tVi2SIJsv6yzc'
    }
}

const api = new Api(config);

export default api;