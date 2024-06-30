$(function () {
  showNumber(Registrar);
  showNumber(Undergrad);
});
function addAdmins(kind, numberToAdd) {
  kind.numberOf = kind.numberOf + numberToAdd;
  return kind.numberOf;
}

function addStudents(kind, numberToAdd) {
  kind.numberOf = kind.numberOf + numberToAdd;
  return kind.numberOf;
}

function showNumber(kindOfPerson) {
  var kindID = document.getElementById(kindOfPerson.counterID);
  kindID.innerHTML = kindOfPerson.numberOf;
  return kindOfPerson.numberOf;
}

function removeStudents(kind, numberToBeRemoved) {
  if (kind.numberOf - numberToBeRemoved < 0) {
    return "Cannot create negative number of students!";
  } else {
    kind.numberOf = kind.numberOf - numberToBeRemoved;
    showNumber(kind);
    return kind.numberOf;
  }
}

function hireAdmin(myKind) {
  if (myKind.undergradCost > Undergrad.numberOf) {
    toggleAdminButton(myKind);
  } else {
    addAdmins(myKind, 1);

    removeStudents(Undergrad, myKind.undergradCost, "numberOfUndergrads");
    removeStudents(Masters, myKind.mastersCost, "numberOfMasters");
    removeStudents(PhDStudent, myKind.phDCost, "numberOfPhDs");
    showNumber(myKind);
    showNumber(Undergrad);
    // if (myKind.undergradCost > Undergrad.numberOf) {
    //   toggleAdminButton(myKind);
    // }
    return console.log(myKind.numberOf);
  }
  toggleAdminButton(myKind)
}

function admitGradStudent(myKind) {
  if (myKind.undergradCost > Undergrad.numberOf || myKind.mastersCost > Masters.numberOf) {
    toggleStudentButton(myKind);
  } else {
    addStudents(myKind, 1);
    removeStudents(Undergrad, myKind.undergradCost, "numberOfUndergrads");
    removeStudents(Masters, myKind.mastersCost, "numberOfMasters");
    Student.instances.forEach(el => {showNumber(el)
    });
    toggleStudentButton(myKind)
    return console.log(myKind.numberOf);
  }
  toggleStudentButton(myKind)
}

window.setInterval(function(){
	
	addStudents(Undergrad, Registrar.numberOf);
	showNumber(Undergrad);
	showNumber(Masters);
  showNumber(PhDStudent);
  showNumber(Registrar);
  showNumber(CommitteeMember);


  checkAvailabilityMasters();
  checkAvailabilityPhD();
  checkAvailabilityAdmins(Registrar);
  checkAvailabilityAdmins(CommitteeMember);
}, 1000)