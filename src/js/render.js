export default class News {

    static renderNewsList (array) {
        const ul = document.querySelector(".container__cards")

        array.forEach((product) => {
            const card = News.createCardNews(product)
            
            ul.appendChild(card)
        })
    }

    static createCardNews (product) {
        const liCard = document.createElement("li")
        const divImage = document.createElement("div")
        const img = document.createElement("img")
        const divInfoCard = document.createElement("div")
        const spanCardHashtag = document.createElement("span")
        const h3CardTitle = document.createElement("h3")
        const pCardDescription = document.createElement("p")
        const spanCardFonte = document.createElement("span")

        img.src = product.imagem
        spanCardHashtag.innerText = product.categoria
        h3CardTitle.innerText = product.titulo
        pCardDescription.innerText = product.resumo
        spanCardFonte.innerText = `Fonte: ${product.fonte}`

        img.classList.add("imgHidden")
        divImage.classList.add("divImageNews")
        divInfoCard.classList.add("divInfoNews")
        liCard.classList.add("card")
        spanCardHashtag.classList.add("card__hashtag")

        divImage.append(img)
        divInfoCard.append(spanCardHashtag, h3CardTitle, pCardDescription, spanCardFonte)
        liCard.append(divImage, divInfoCard)

        return liCard

    }

}