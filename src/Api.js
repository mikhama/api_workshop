class Api {
    constructor(key, text) {
        this.baseUrl = 'https://newsapi.org/v2/';
        this.head = 'everything';
        this.params = {
            q: text,
            from: '2018-10-19',
            sortBy: 'publishedAt',
            apiKey: key,
        };
    }

    makeUrl() {
        const { q, from, sortBy, apiKey } = this.params;
        return `https://newsapi.org/v2/everything?q=${q}&from=${from}&sortBy=${sortBy}&apiKey=${apiKey}`;
    }

    request() {
        return fetch(this.makeUrl()).then(res => res.json(), rej => rej);
    }
}
