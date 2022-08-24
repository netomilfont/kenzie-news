import News from "./render.js"

export class ApiRequests {

    static BASEURL = "https://kenzie-news-api.herokuapp.com/api"
    static headers = {
        "Content-Type":"application/json"
    }
    static async getAllNews() {
        const news = await fetch(`${this.BASEURL}/news`, {
            method: "GET",
            headers: this.headers 
        })
        .then(res => res.json())
        .then(res=> News.renderNewsList(res))
        .catch(err => console.log(err))

        return news
    }

}

console.log(ApiRequests.getAllNews())
