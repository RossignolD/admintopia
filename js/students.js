class Student {
  static instances = [];
  constructor(
    kind,
    isUnlocked,
    numberOf,
    previousType,
    nextType,
    undergradCost,
    mastersCost,
    buttonID,
    counterID
  ) {
    this.kind = kind;
    this.isUnlocked = isUnlocked;
    this.numberOf = numberOf;
    this.previousType = previousType;
    this.nextType = nextType;
    this.undergradCost = undergradCost;
    this.mastersCost = mastersCost;
    this.buttonID = buttonID;
    this.counterID = counterID;
    Student.instances.push(this);
  }
  unlockStudent() {
    if (
      this.undergradCost < Undergrad.numberOf &&
      this.mastersCost <= Masters.numberOf
    ) {
      this.isUnlocked = true;
      return true;
    } else {
      this.isUnlocked = false;
      return false;
    }
  }
}

var Undergrad = new Student(
  "Undergraduate",
  true,
  1,
  null,
  Masters,
  0,
  0,
  "undergrad",
  "numberOfUndergrads"
);
var Masters = new Student(
  "Masters",
  false,
  0,
  Undergrad,
  PhDStudent,
  10,
  0,
  "masters",
  "numberOfMasters"
);
var PhDStudent = new Student(
  "PhD",
  false,
  0,
  Masters,
  null,
  0,
  10,
  "phD",
  "numberOfPhDStudents"
);

function toggleStudentButton(title) {
  title.unlockStudent();

  if (title.isUnlocked == true) {
    document.getElementById(title.buttonID).removeAttribute("disabled");
    return "done";
  } else {
    document.getElementById(title.buttonID).setAttribute("disabled", "");
    return "not unlocked";
  }
}

function checkAvailabilityMasters() {
  if (Masters.undergradCost == Undergrad.numberOf) {
    toggleStudentButton(Masters, Masters.buttonID);
    toasts.push({
      title: "Admissions Notification: Masters",
      content: "One or more Masters students may be admitted now.",
      dismissAfter: "3s",
      width: 500,
    });
    toggleStudentButton(PhDStudent, PhDStudent.buttonID);
  } else {
    toggleStudentButton(Masters, Masters.buttonID);
  }
}

function checkAvailabilityPhD() {
  if (PhDStudent.mastersCost == Masters.numberOf) {
    toggleStudentButton(PhDStudent, PhDStudent.buttonID);
    toasts.push({
      title: "Admissions Notification: PhD",
      content: "One or more PhD students may be admitted now.",
      dismissAfter: "3s",
      width: 500,
    });
    toggleStudentButton(PhDStudent, PhDStudent.buttonID);
  } else {
    toggleStudentButton(PhDStudent, PhDStudent.buttonID);
  }
}

$(function () {
  document.getElementById("masters").disabled = "true";
  document.getElementById("phD").disabled = "true";
  Student.instances.forEach((el) => {
    document.getElementById(el.counterID).innerHTML = showNumber(
      el.counterID,
      el
    );
  });
});
