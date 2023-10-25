class Student{
  constructor(
    kind,
    isUnlocked,
    numberOf,
    previousType,
    nextType,
    undergradCost,
    mastersCost,
    phDCost
  ) {
    this.kind = kind;
    this.isUnlocked = isUnlocked;
    this.numberOf = numberOf;
    this.previousType = previousType;
    this.nextType = nextType;
    this.undergradCost = undergradCost;
    this.mastersCost = mastersCost;
    this.phDCost = phDCost;
  }
  unlockStudent(){
    if (
      this.undergradCost < Undergrad.numberOf &&
      this.mastersCost <= Masters.numberOf &&
      this.phDCost <= PhDStudent.numberOf
    ) {
      this.isUnlocked = true;
      return true;
    } else {
      this.isUnlocked = false;
      return false;
    }
  }


}


var Undergrad = new Student("Undergrad", true, 0, null, Masters, 0, 0, 0);
var Masters = new Student("Masters", false, 0, Undergrad, PhDStudent, 10, 0, 0);
var PhDStudent = new Student("PhD", false, 0, Masters, null, 0, 10, 0);

function toggleStudentButton(title, buttonID) {
  title.unlockStudent();

  if (title.isUnlocked == true) {
    document.getElementById(buttonID).removeAttribute("disabled");
    return "done";
  } else
  {
    document.getElementById(buttonID).setAttribute("disabled", "");
    return "not unlocked";
  }
}

function checkAvailabilityStudents(type, buttonID) {
  if (type.undergradCost < Undergrad.numberOf) {
    toggleStudentButton(type, buttonID);
  } else if (type.undergradCost == Undergrad.number) {
    toggleStudentButton(type, buttonID);
    toasts.push({
      title: "Success Toast",
      content: "My notification description.",
      dismissAfter: "3s"
    });
    return console.log("success");
  } else {
    toggleStudentButton(type, buttonID);
  }
}

$(function () {
  document.getElementById("masters").disabled = "true";
  document.getElementById("phD").disabled = "true";

  document.getElementById("numberOfUndergrads").innerHTML = showNumber(
    "numberOfUndergrads",
    Undergrad
  );
  document.getElementById("numberOfMasters").innerHTML = showNumber(
    "numberOfMasters",
    Masters
  );
  document.getElementById("numberOfPhDStudents").innerHTML = showNumber(
    "numberOfPhDStudents",
    PhDStudent
  );
});
