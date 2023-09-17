

async function op(){
    console.log('step 1')
    setTimeout(()=>{
        console.log("setp2")
    },1000)
    console.log('step3')
}
op()