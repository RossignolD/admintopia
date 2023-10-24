$(function() {
    showNumber('numberOfRegistrars', Registrar)
    showNumber('numberOfUndergrads', Registrar)
  });
function addOneMoreAdmin(kind){
    kind.numberOf++
    return kind.numberOf
}

function addOneMoreStudent(kind){
    kind.numberOf++
    console.log(kind.numberOf)
    return kind.numberOf
}


function showNumber(id, kind){
    document.getElementById(id).innerHTML=kind.numberOf;

}
