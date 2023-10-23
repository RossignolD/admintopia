$(function() {
    showNumber('numberOfRegistrars', Registrar)
  });
function addOneMoreAdmin(kind){
    kind.numberOf=kind.numberOf+1
    console.log(kind.numberOf)
    return kind.numberOf
}

function showNumber(id, kind){
    document.getElementById(id).innerHTML=kind.numberOf;

}

