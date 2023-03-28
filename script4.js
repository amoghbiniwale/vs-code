console.log("hello");

//Array method
const scores =[10,20,30,40,50,60,55];

const filterScore=scores.filter((score)=>{
    return score>30;
});

console.log(filterScore);

// let newScore = [];
// for(i=0,j=0,i<scores.length;i++){
//     if(scores[i]>30){
//         newScore[j++]=scores[i];
//     }
// }
// console.log(newScore);

const evenNumber = scores.filter((even)=>{
    return even % 2 ==0;
})

console.log(evenNumber);

const users=[
{
    name:"amogh",
    premium:true
},
{
    name:"sankalp",
    premium:false
},
{
    name:"akshay",
    premium:false
},
{
    name:"tejas",
    premium:false
}
];

const premiumUser=users.filter((user)=>{
    return user.premium;
})

console.log(premiumUser);

const products=[
    {
        name:"parle-G",
        price:100
    },
    {
        name:"coke",
        price:40
    },
    {
        name:"maza",
        price:40
    },
    {
        name:"Aloo bhujia",
        price:10
    }  
];

const newProduct=products.filter((product)=>{
    return product.price>=40;
});
console.log(newProduct);

const number =[10,20,30,40,50,60,55];
const squre=number.map((n)=>{
    return n*n;
});

console.log(squre);

const increaseProductPrice= products.map((product)=>{
    return {
        name:product.name,
        price:product.price+(product.price*0.1)
    }
});
console.log(increaseProductPrice);

//reduce
//value always saves in acc
const values=[12,23,43,45,55,67,78];
const sum=values.reduce((acc,val)=>{
    return  acc+val;
},1)    
console.log(sum);

const players=[
    {
        name:"sachin",
        score:10
    },
    {
        name:"virat",
        score:18
    },
    {
        name:"rohit",
        score:45
    },
    {
        name:"sachin",
        score:7
    },
    {
        name:"gill",
        score:100
    }
];

const sachinScore=players.reduce((acc,player)=>{
    if(player.name=="sachin"){
        return acc+player.score;
    }
    return acc;    
},0)
console.log(sachinScore);

const totalScore=players.filter((player)=>{
    return player.name=="sachin"
}).reduce((acc,player)=>{
    return acc+player.score;
},0)
console.log(totalScore);

//find 
const marks=[12,23,43,45,55,67,78,10,20];
const highestMark=marks.find(mark=>{
    return mark>40;
})
console.log(highestMark);

//sort
const sortMark=marks.sort()
console.log(sortMark);

const sortMarks = marks.sort((m1,m2)=>{
    return m1-m2;
});

console.log(sortMark);

const sortedproducts = products.sort((p1,p2)=>{
    return p1.price - p2.price;
})


const discountProduct = products.filter(product=>{
   return product.price>40;
}).map((product)=>{
    return {
        name:product.name,
        price:product.price-product.price*0.2
    }
}).sort((p1,p2)=>{
    return p1.price-p2.price;
});
console.log(discountProduct);