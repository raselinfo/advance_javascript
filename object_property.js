const students=[
    {
        id:21,
        name:"Rasel Hossain"
    },
    {
        id:22,
        name:"Rabina Akther"
    }, 
    {
        id:23,
        name:"Sakib Hasan"
    },
    {
        id:24,
        name:"Mehedi Hasan"
    },

]

const names=students.map((element)=>{
    return element.name;
})


const ids=students.map((element)=>{
    return element.id;
})

const bigger=students.filter(element=>{
    return element.id>21
})

const bigger2=students.find(element=>{
    return element.id>21;
})
console.log(bigger2);
