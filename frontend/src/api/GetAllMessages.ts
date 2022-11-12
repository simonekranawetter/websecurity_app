export async function getAllMessages(){
    try {
        const res = await fetch('https://localhost:7201/api/Messages', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await res.json();
        console.log('Gandalf!');
        console.log(result);
        return result;
    }
    catch (error: any){
        console.log(error);
    };
}