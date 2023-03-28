const func=async()=>{
    // fetch("amogh.json").then((response)=>{
    //     return response.json();
    // }).then(data=>{
    //     console.log(data);
    // }).catch(err=>{
    //     console.log("error",err);
    // })
    const response = await fetch("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students");
    if(response.status!=200){
        throw new Error(": invalid url");
    }
    const data = await response.json();
    // console.log(data);

    // const response1 = await fetch("amogh.json");
    // const data1 = await response1.json();
     return data;

};
func().then((data)=>{
    // console.log(data); 
    printData(data)
}).catch(err=>{
    console.log("could not fetch data"+err);
})

const table = document.querySelector("table")
console.log(table);

const printData=(data)=>{
    
    let html=``
    data.forEach(d => {
        html=`<tr>
        <td>${d.id}</td>
        <td>${d.name}</td>
        <td>${d.rollNo}</td>
        <td>${d.email}</td>
        <td><button>Delete</button></td>
        </tr>`;
        table.innerHTML+=html;
        
    });
}