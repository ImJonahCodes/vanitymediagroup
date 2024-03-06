// ./src/lib/prepr.js 

export async function Prepr(query, variables) {
    const response = await fetch("https://graphql.prepr.io/69a030b3ab0bb15e93420881336203a9dc34dce9e5781acdd576b495df7d153c", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
    })
    return response
}