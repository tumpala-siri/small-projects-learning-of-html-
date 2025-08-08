const num = document.getElementById("num");
const res = document.getElementById("result")
let temp;
function  CFconversion(event){
    event.preventDefault();
    temp = +(num.value)
    temp = temp  * (9/5) + 32;
    res.textContent = temp.toFixed(1) + "°F"

}
function  FCconversion(event){
    event.preventDefault();
    temp = +(num.value)
    temp = (temp-32)  * (5/9) ;
    res.textContent = temp.toFixed(1) + "°C"

}

document.getElementById("cf").addEventListener("click", CFconversion);
document.getElementById("fc").addEventListener("click", FCconversion)