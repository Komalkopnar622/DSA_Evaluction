// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",masaisubmitfun);

var masaiArr=JSON.parse(localStorage.getItem("schedule"))||[]
function masaisubmitfun(){
    event.preventDefault();
    var masaiobj={
        matchNumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value

    }
    console.log(masaiobj);
    masaiArr.push(masaiobj);
    localStorage.setItem("schedule",JSON.stringify(masaiArr));
}
