

function outerFunc(outerVar){
    return function innerFunc(innerVar){
        console.log(outerVar + innerVar)
    }
}
const func = outerFunc(10)
func(5);