const GetArticleBySlug = `
query ($slug: String) {
   Article (slug: $slug) {
     _id
     title
     excerpt
     cover_image {
      _id
      url
     }
     content {
       __typename
       ... on Text {
         body
         text
       }
       ... on Assets {
         items {
           url
         }
       }
     }
   }
}`

export default GetArticleBySlug
