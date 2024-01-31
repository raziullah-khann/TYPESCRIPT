let myFavNum: any = 5;
myFavNum = 'Hello';

console.log(myFavNum);

//Unknown  --> it safer as compare to any
let myFavNum1: unknown = 55;
myFavNum1 = true;
if(typeof myFavNum1 === 'boolean') {
    console.log("Hello Typescript");    
}

// async function fetchData(): Promise<unknown> {
//     const response = await fetch('https://catfact.ninja/fact');
//     const data = await response.json();
//     return data;
// }

// console.log(fetchData());


// async function processData() {
//     const response = await fetchData();

//     if(typeof response === 'object') {
//         console.log(response);  
//     }
// }

async function fetchData(): Promise<unknown> {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error accordingly
        throw error; // Optional: rethrow the error if needed
    }
}

// Example usage
async function fetchDataAndLog() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        // Handle errors from fetchData or log them
        console.error('Error in fetchDataAndLog:', error);
    }
}

// Call the function
fetchDataAndLog();
