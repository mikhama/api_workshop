class App {
    constructor() {
        this.api = new Api('1f89049df64a4771ab3da67f0787bbd6', 'Front End');
    }

    run() {
        this.api.request().then(({ articles }) => {
            // const news = new News(articles);
            // news.render();
            console.dir(articles);
        });
    }
}
