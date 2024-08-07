
    let clkbtn=document.getElementById('calculate')
    clkbtn.addEventListener('click',CalculateBMI)


function CalculateBMI(){
    let amount=document.getElementById('amount').value;
    let persons=document.getElementById('persons').value;
    let service=document.getElementById('optionvalue').value;
    console.log(amount,persons,service);
    
    if(amount=="" || persons=="" || service=='Select'){
       document.getElementById('showtip').innerHTML=`<div class="showtip">
            <p>Please Fill the Form Correctly </p>
        </div>`
    }
    else{
        if(persons=='1'){
            document.getElementById('each').style.display='none';
        }
        else{
            document.getElementById('each').style.display='block';
        }
            amount=parseInt(amount);
            service=parseFloat(service);
            persons=parseInt(persons);
            console.log("New",amount,service,persons);
            let total=((amount)*(service))/(persons);
            total=total.toFixed(2);
            console.log(total);
            document.getElementById('showtip').style.display='block';
            document.getElementById('total').innerHTML=total+'$';
        
    }
    
}