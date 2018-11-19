class ApiNews {
    constructor () {
        this.news = new News;
        this.settings = {
            ApiKey: "1f89049df64a4771ab3da67f0787bbd6";
        }
    }
    makeNews (data) {
        this.news.draw(data.articles)
    }
}

export default News;