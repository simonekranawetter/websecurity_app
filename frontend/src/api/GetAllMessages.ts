export async function getAllMessages(){
    try {
        const res = await fetch('https://localhost:7201/api/Messages', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(res)
        const result = await res.json();
        return result;
    }
    catch (error: any){
        console.log(error);
    };
}