 var form =document.querySelector("form").addEventListener("submit",myfun);
 var details = JSON.parse(localStorage.getItem("userdata"))|| []
  
function myfun(){
    event.preventDefault();
    document.querySelector("form").value;
    var datastoring = {
        card_number:document.querySelector("#cardnumber").value,
        CVV:document.querySelector("#CVV").value,
        date:document.querySelector("#expiry").value,
        name:document.querySelector("#name").value,
    }
    
    alert("card details are stored")
    window.location.href="card.html"

    localStorage.setItem("userdata", JSON.stringify(datastoring));
}