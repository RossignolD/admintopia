$(function () {
  showNumber("numberOfRegistrars", Registrar);
  showNumber("numberOfUndergrads", Undergrad);
});
function addAdmins(kind, numberToAdd) {
  kind.numberOf = kind.numberOf + numberToAdd;
  return kind.numberOf;
}

function addStudents(kind, numberToAdd) {
  kind.numberOf = kind.numberOf + numberToAdd;
  return kind.numberOf;
}

function showNumber(myID, kind) {
  return (document.getElementById(myID).innerHTML = kind.numberOf);
}

function removeStudents(kind, numberToBeRemoved, id) {
  if (kind.numberOf - numberToBeRemoved < 0) {
    return "Cannot create negative number of students!";
  } else {
    kind.numberOf = kind.numberOf - numberToBeRemoved;
    showNumber(id, kind);
    return kind.numberOf;
  }
}

function hireAdmin(myKind, kindID, buttonID) {
  if (myKind.undergradCost > Undergrad.numberOf) {
    toggleAdminButton(myKind, buttonID);
  } else {
    addAdmins(myKind, 1);
    removeStudents(Undergrad, myKind.undergradCost, "numberOfUndergrads");
    // removeStudents(Masters, myKind.mastersCost, "numberOfMasters");
    // removeStudents(PhDStudent, myKind.phDCost, "numberOfPhDs");
    showNumber(kindID, myKind);
    showNumber("numberOfUndergrads", Undergrad);
    if (myKind.undergradCost > Undergrad.numberOf) {
      toggleAdminButton(myKind, buttonID);
    }
    return console.log(myKind.numberOf);
  }
}

