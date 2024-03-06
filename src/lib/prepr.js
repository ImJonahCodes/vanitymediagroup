// ./src/lib/prepr.js 

export async function Prepr(query, variables) {
    const response = await fetch(process.env.PREPR_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
    })
    return response
}