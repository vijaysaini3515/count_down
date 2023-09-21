

let end_date = "28 september 2023 05:32:40 PM";
document.getElementById("end-date").innerHTML = end_date;

let inputs = document.querySelectorAll("input");

let clock = ()=>{
    let end = new Date(end_date)
    let now = new Date();
    console.log(end)
    console.log(now)
    let diff = (end-now)/1000;
    if(diff<0)return;
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

clock()

setInterval(()=>{
    clock()
},1000)