// ./src/queries/get-articles.js

const GetArticles = `
query {
    Articles {
        items {
            _id
            _slug
            title
            excerpt
        }
        
    }
}
`

export default GetArticles
