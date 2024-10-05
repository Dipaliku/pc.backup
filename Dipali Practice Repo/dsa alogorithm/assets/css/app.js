const cl = console.log;

// finding no. of occrance of the given array element 

let arr = [10,20,30,10,30,20,50,40,10,60,70,80,40,10]
cl(arr)

let arrELeObj={
    // 10 : 1 + 1 +1 +1,
    // 20 : 1 + 1 ,
    // 30 : 1 + 1,
    // 50 : 1,
    // 40:1 +1 ,
    // 60:1,
    // 70:1,
    // 80:1,
}

// forEach
arr.forEach(count =>{
    if(arrELeObj[count]){
        arrELeObj[count] += 1
    }
    else{
        arrELeObj[count] = 1
    }
})

cl(arrELeObj)

// ternary operator

// arr.forEach(count => arrELeObj[count] ? ++arrELeObj[count] : (arrELeObj[count] = 1))

// cl(arrELeObj)

//  GENERIC function 

const findCount = (arr) => {
    let arrELeObj = {}

    arr.forEach(count => arrELeObj[count] ? ++arrELeObj[count] : (arrELeObj[count] = 1))

    return arrELeObj;
}

cl(findCount(arr))


// const findcount = (arr) => {

//    let  result = arr.reduce((acc,cv) => {
//         if(acc[cv]){
//             acc[cv] += 1
//         }else{
//             acc[cv] = 1
//         }
//     })
//          return result;
// }
// findcount(arr)
// cl(result)

// finding count of specific no.
const  findcount = (arr , countNo) =>{
    let obj = {}

     arr.forEach(arr => {
        obj[arr] ? ++obj[arr] : (obj[arr] = 1)
     })
         return obj[countNo]
    }

let count = 'given no. occured : ' + findcount(arr,10) + ' times';
cl(count)

//.........................title case....................................//

const cl = console.log;

let strToDo = 'i love javaScript'

// let info = 'love'
// result = info[0].toUpperCase() + info.slice(1).toLowerCase()
// cl(result)

let arr = strToDo.toLowerCase().split(" ")
cl(arr)

// by concating it
let result = '';

arr.forEach(word => {
    // cl(word)
    result += word[0].toUpperCase() + word.slice(1).toLowerCase() + " "
})
cl(result.trim())

// by pushing it into array 
let resultArr = []

arr.forEach(word => {
    resultArr.push(word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ')
})
cl(resultArr.join(''))

// by generic function 

const titleCase = (str) => {
     let arr = str.toLowerCase().split()
     cl(arr)
      
     let result = ''
     arr.forEach(word => result +=  word[0].toUpperCase() + word.substring(1) + " ")
     
     return result;
}
titleCase(strToDo)

cl(result.trim())

//  by map HOF

let resultMap = arr.map(word => {
    // cl(word)
    return (word[0].toUpperCase() + word.slice(1) + " ")
})
cl(resultMap.join('').trim())


// by map with generic func 

const mapResult = (str) =>{
    let result = strToDo.toLowerCase().split()
    cl(result)

    result = result.map(word => word[0].toUpperCase() + word.slice(1)).join('')
}
mapResult(strToDo)
cl(result)

//  by map with generic func refactor

// const MapResult = (str) => {
//     return str.toLowerCase().split()
//                .map(word => word[0].toUpperCase() + word.slice(1))
// }
// cl(MapResult(strToDo).join(''))

//  by replace method 

const replaceResult = (arr) => {
    let result = arr.map(word => {
        return word.replace(word[0] , word[0].toUpperCase())
    })

    return result ;
}
replaceResult(arr)
cl(result)