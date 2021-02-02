const numbers=[2,3,4,5,6,7,8];

// const output=[];
// for(let i=0;i<numbers.length;i++){
//     const element=numbers[i];
//     const result = element * element;
//     output.push(result)
// }


function square(element){
    return element*element;
}

const result=numbers.map(function(element,index,array){
    return element*element;
     
})

const result2 = numbers.map(element => element * element);

const bigger=numbers.filter((element)=>{
    return element>5;
})


const isThere=numbers.find(element=>{
    return element>5;
})
console.log(isThere);



