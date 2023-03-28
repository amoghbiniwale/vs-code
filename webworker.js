//here we can not use DOM related outputs
self.onmessage=(msg)=>{
    let sum = 0;
    for(let i=0;i<=100000000;i++){
        sum+=i
    }
    postMessage(sum);
}