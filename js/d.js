let tip,total,percent,amount;
let err=document.getElementById("error");
document.getElementById("sub").onclick=function(){
    amount=document.getElementById("amount").value;
    percent=document.getElementById("percentage").value;
    if(amount==""){
        err.textContent="please enter amount";
    }
    else if(percent==''){
        err.textContent="please enter percent";
    }
    else{
        tip=(Number(percent)/100)*Number(amount);
        document.getElementById("tip").value=tip;
        total=Number(amount)+Number(tip);
        document.getElementById("total").value=total;
        }
    }
