class News {
    constructor (articles) {
        this.articles = articles;
    }

    render() {
        const main = document.querySelector('main');

        let html = '';
        this.articles.forEach(element => {
            html += `
            <div class="wrapper">
                <div class="wrapper__article">
                    <h1 class="wrapper__title">${element.title}</h1>
                    <article class="wrapper__paragraf">${element.content}</article>
                </div>
                <div class="wrapper__img">
                <img
                    src="${element.urlToImage}"
                    alt="${element.title}"
                />
                </div>
            </div>
            `;    
        });

        const magic = document.querySelector('#magic');
        magic.addEventListener('click', () => {
            main.innerHTML = html;
        });
    }
}