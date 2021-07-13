var number = 0
$(document).ready(function(){
    number = 1 + Math.floor(Math.random() * 999999999);
    //alert(number);
    document.getElementById('confirmationNum').value = number;
    localStorage.setItem('ConfirmationNumber', number);
    //alert(localStorage.getItem("ConfirmationNumber"));
    });
    
