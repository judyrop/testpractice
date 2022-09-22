// const scriptURL = 'http://developers.gictsystems.com/api/dummy/submit/'
// const form = document.forms['submit-to-url']
// const msg = document.getElementById("msg")

// form.addEventListener('submit',e =>{
//     e.preventDefault()
//    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//      .then(response => {msg.innerHTML = "message sent successfully"})
//      .catch(error => console.error('Error!', error.message))
// // })
$(document).ready(function(){
// var submit = document.getElementById("submit");
// submit.addEventListener("click",addRow);
// var row =1;
// function addRow(){
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var address = document.getElementById("address").value;
//     if(!name || !email || !phone || !address){
//         alert("Please in all the fields");
//       return;
//     }
//     var table = document.getElementById("tableList");
//     var newRow = table.insertRow(row);
//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);
//     var cell3 = newRow.insertCell(2);
//     var cell4 = newRow.insertCell(3);

//     cell1.innerHTML = name;
//     cell2.innerHTML = email;
//     cell3.innerHTML = phone;
//     cell4.innerHTML = address;

//     row++;
// };

let popUp = document.getElementById("popUp");
function openPopUp()
    popUp.classList.add("popUp");

function closePopUp(){
    popUp.classList.remove("popUp");
}
});