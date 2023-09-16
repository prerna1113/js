
// function fetchData(){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=> {
//             const data = {name:'John', age:'20'};
//             const error= false;

//             if(!error){
//                 resolve(data);

//             } else {
//                 reject('Error fetching data')
//             }


//         },100)
    
//     })
// }

// fetchData()
// .then (data=> {
//     console.log('successful',data)
// })
// .catch (error=>{
//     console.log('error',error);
// });


function fetchData(){
    return new Promise((resolve,reject)=>{
        const data = {name:'John', age:'20'};
        const error = false;

        if(!error){
            resolve(data);
        }
        else{
            reject('Error fetching data');
        }
    })
}

fetchData()
.then (data=>{
    console.log('successful',data)
})

.catch (error=>{
    console.log('error',error);
})


