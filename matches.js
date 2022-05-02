// write js code here corresponding to matches.html
var masaiArr=JSON.parse(localStorage.getItem("favourites"));
var fav=JSON.parse(localStorage.getItem("schedule"))||[]
//console.log(masaiArr);
display(fav);
function handlebyfilter(){
    var selector=document.querySelector("#filterVenue").value;
    var filterList=fav.filter(function(ele){
        return ele.venue==selector
    })
    console.log(filterList);
    display(filterList)
}


function display(data){
   document.querySelector("tbody").innerHTML="";
    data.forEach(function(element,index){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=element.matchNumber;
        var td2=document.createElement("td");
        td2.innerText=element.teamA;
        var td3=document.createElement("td");
        td3.innerText=element.teamB;
        var td4=document.createElement("td");
        td4.innerText=element.date;
        var td5=document.createElement("td");
        td5.innerText=element.venue;
        var td6=document.createElement("td");
       td6.innerText="Add as Favourites";
       td6.style.color="green";
       td6.style.cursor="pointer";
       td6.addEventListener("click",function(){
           favourtesFun(element);
       
       })
       tr.append(td1,td2,td3,td4,td5,td6);
       document.querySelector("tbody").append(tr);
    });
    function favourtesFun(ele){
        masaiArr.push(ele);
        console.log(masaiArr)
        localStorage.setItem("favourites",JSON.stringify(masaiArr));
        //window.location.reload();
    }
}