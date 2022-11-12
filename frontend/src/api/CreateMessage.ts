export async function createMessage(message: string){
    console.log('Legolas!');
    JSON.stringify(message);

    try {
        const res = await fetch('https://localhost:7201/api/Messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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