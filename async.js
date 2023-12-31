

// async  function fetchData(){
//     try{
//         const response = await fetch(`https://api.publicapis.org/entries`)
//         const data = await response.json();
//         return data;
//     }
//     catch(error){
//         console.log('Error',error)
//         throw error

//     }
// }
// fetchData()
// .then(data=>{
//     console.log('data',data);
// })
// .catch(error=>{
//     console.log('Error',error);
// })


async function fetchData(){
    try {
        const data = await fetch(`https://api.publicapis.org/entries`);
        const res = await data.json();
        return res;
        
    } catch (error) {
        console.log('Error',error);
        throw error;
        
    }
}

fetchData()
.then(res=>console.log('data',res))
.catch(error=>console.log('Error',error));