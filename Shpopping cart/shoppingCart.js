let products = [
    { name: "Parle-G", price: 10 },
    { name: "maza", price: 20 },
    { name: "coke", price: 35 },
    { name: "aloo-bhujia", price: 10 },
  ];
  
  const item = document.getElementById("item");
  const unitPrice = document.querySelector("input");
  item.addEventListener("change", () => {
    const selectedItem = products.find((product) => product.name === item.value);
    unitPrice.value = selectedItem.price;
  });
  const quantity = document.getElementById("quantity");
  const button = document.querySelector("button");
  const table = document.querySelector("table"), sum = 0;
  const prodTableBody = table.querySelector("tbody");
  const removeButtons = table.querySelectorAll("#bt");
  //const finalTotal = document.getElementById("value");
 // const grandTotal = document.getElementById("subT");
  
  button.addEventListener("click", () => {
    const selectedItem = products.find((product) => product.name === item.value);
    const subTotal = selectedItem.price * quantity.value;
  
    const newRow = prodTableBody.insertRow();
    newRow.innerHTML = `
        <td>${selectedItem.name}</td>
        <td>${quantity.value}</td>
        <td>${selectedItem.price}</td>
        <td>${subTotal}</td>
        <td><button id = "bt">Remove</button></td>
        `;
  
    const removeButton = newRow.querySelector("#bt");
    removeButton.addEventListener("click", () => {
      newRow.remove();
    });
  });

function getTotal(){
  let table = document.getElementById("table"), sum = 0;
  for(let i =1;i < table.rows.length;i++){
    sum = sum + parseInt(table.rows[i].cells[3].innerHTML);
  }
  document.getElementById("result").innerHTML = "total value : "+ sum;

}
 

//   // Calculate sum of 'subprice' values using reduce()
//   const sum =
// console.log(sum);
  // function getTotal (){
  //   var totalPrice = document.getElementsByClassName("totalPrice");
  //   totalPrice.forEach(element => {
  //     var sum = sum + element.value;
  //     document.getElementById("value").innerHTML = sum;
  //   });
    
  // }

//   $(function() {

//     var TotalValue = 0;

//     $("tr #totalPrice").each(function(index,value){
//       var currentRow = parseFloat($(this).text());
//       TotalValue += currentRow
//     });

//     document.getElementById('value').innerHTML = TotalValue;

// });
