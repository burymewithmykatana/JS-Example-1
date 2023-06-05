let text="name:w123-company:benz,name:samand-company:irankhodro,name:gallardo-company:lamborghini,name:206-company:pegouet";

var objs=text.split(",");
var cars=document.getElementById("cars");

for(let i=0;i<objs.length;i++){
    //Seperate data from the text.
    carProperties=objs[i].split("-");
    carName=carProperties[0].split(":")[1];
    carCompany=carProperties[1].split(":")[1];
    var para = document.createElement("p");
    var nam= document.createElement("h1");
    para.textContent=carCompany;
    nam.textContent=carName;

    console.log(i);
    //console.log(carCompany);
    var li = document.createElement("li");
    
    li.appendChild(nam);
    li.appendChild(para);
    console.log(li);
    cars.appendChild(li);
}
//console.log(objs);
