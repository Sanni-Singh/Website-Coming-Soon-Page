const days = document.getElementById('days')
const hr = document.getElementById('hr')
const min = document.getElementById('min')
const sec = document.getElementById('sec');

const endDate = "31 December 2024 11:59 PM"

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // console.log("hello world");
    
    
    if(diff < 0) return;

    days.innerText = Math.floor(diff / 3600 / 24);
    hr.innerText = Math.floor(diff / 3600) % 24;
    min.innerText = Math.floor(diff / 60) % 60;
    sec.innerText = Math.floor(diff) %60;
    
}
clock();

setInterval( ()=>{
    clock();
},1000)