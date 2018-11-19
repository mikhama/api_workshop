class News {
    constructor (articles) {
        this.articles = articles;
    }

    render(articles) {
        const mainArticle = document.createElement('main');
        const title = document.createElement('h1');
        const container = document.createElement('div');
        const divArt = document.createElement('div');
        const imgArt = document.createElement('image');
        
        container.classList.add('wrapper');
        divArt.classList.add('wrapper__article');
        imgArt.classList.add('wrapper__img');
        
        for (let i = 0;i < articles.length; i++) {
            const article = container.cloneNode(true);
            article.querySelector('.wrapper__img').setAttribute('src', article.); //tbd
            article.querySelector('.wrapper__article').setAttribute('src', article.);
        };

        const html = '';
        articles.forEach(element => {
            html += `

            `
        });

    }
}