// Not sure I'll use this since the token needs to be retrieved in a particular way
export async function createMessage(message: string){ 
    JSON.stringify(message);
    const token = JSON.parse("insert user token here");
    console.log("")
    try {
        const res = await fetch('https://localhost:7201/api/Messages', {
            method: 'POST',
            headers: {
                Authorization:"Bearer " + token,
            },
            body: message
        })
        const result = await res.json();
        return result;
    }
    catch (error: any){
        console.log(error);
    }

}
