// posts --< 

export async function GET(request){
    // handle request for /api/users
    // Retrive users from the database or any data source

    const users = [
        {id:1, name:"john"},
        {id:1, name:"john"},
        {id:1, name:"john"}
    ]
} 

// Send the users ad response

return new Response(JSON.stringify(users));