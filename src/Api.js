class Api {
    constructor(key, text) {
        this.baseUrl = 'https://newsapi.org/v2/';
        this.head = 'everything';
        this.params = [
            { q: text },
            { from: '2018-10-19' },
            { sortBy: 'publishedAt' },
            { apiKey: key },
        ];
    }

    makeUrl() {
        const params = Object.keys(this.params).map(key => `${key}=${this.params[key]}`);
        return `${this.base}${this.head}?${params.join('&')}`;
    }

    request(text) {
        return fetch(make(text)).then(res => res.json(), rej => rej);
    }
}
export default Api;