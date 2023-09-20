// Promise

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = {name:'Prerna', age: 23}

            const error = false;
            if(!error){
                resolve(data);
            }
            else{
                reject('fetching error');
            }
        },100)
    })
}
fetchData()
.then(data=>{
    console.log('success', data)
})

.catch(error=>{
    console.log('error', error);
})