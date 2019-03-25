class RickandmortyAPI {
    constructor() {

    }

    getCharacterList(query) {
        return fetch('https://rickandmortyapi.com/api/'+query, {method: 'get'})
            .then(response => {
                if (response.ok)
                    return response.json();
                return Promise.reject('API responded ' + response.status)
            })
    }

}

export default new RickandmortyAPI();
