class Admin {
  constructor(
    title,
    isUnlocked,
    numberOf,
    previousTitle,
    nextTitle,
    undergradCost,
    mastersCost,
    phDCost,
    buttonID,
    counterID
  ) {
    this.title = title;
    this.isUnlocked = isUnlocked;
    this.numberOf = numberOf;
    this.previousTitle = previousTitle;
    this.nextTitle = nextTitle;
    this.undergradCost = undergradCost;
    this.mastersCost = mastersCost;
    this.phDCost = phDCost;
    this.buttonID = buttonID;
    this.counterID = counterID;
  }

  howManyAdmins() {
    return this.numberOf();
  }

  unlockAdmin() {
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

var Registrar = new Admin(
  "Registrar",
  false,
  0,
  null,
  CommitteeMember,
  100,
  0,
  0,
  "registrar",
  "numberOfRegistrars"
);
var CommitteeMember = new Admin(
  "Committee Member",
  false,
  0,
  Registrar,
  CommitteeChair,
  1000,
  0,
  0,
  "committeemember",
  "numberOfCommitteeMembers"
);
var CommitteeChair = new Admin(
  "Committee Chair",
  false,
  0,
  CommitteeMember,
  AssistantDean,
  5000,
  0,
  0,
  "committeechair",
  "numberOfCommitteeChairs"
);
var AssistantDean = new Admin(
  "Assistant Dean",
  false,
  0,
  CommitteeChair,
  DeanOfCollege,
  15000,
  0,
  0,
  "assistantdean",
  "numberOfAssistantDeans"
);
var DeanOfCollege = new Admin(
  "Dean of College",
  false,
  0,
  AssistantDean,
  AssociateViceProvost,
  25000,
  0,
  0,
  "deanofcollege",
  "numberOfDeans"
);
var AssociateViceProvost = new Admin(
  "Associate Vice-Provost",
  false,
  0,
  DeanOfCollege,
  ViceProvost,
  30000,
  10,
  0,
  "associateviceprovost",
  "numberOfAVP"
);
var ViceProvost = new Admin(
  "Vice-Provost",
  false,
  0,
  AssociateViceProvost,
  Provost,
  35000,
  25,
  0,
  "viceprovost",
  "numberOfViceProvosts"
);
var Provost = new Admin(
  "Provost",
  false,
  0,
  ViceProvost,
  ProViceChancellor,
  40000,
  50,
  10,
  "provost",
  "numberOfProvosts"
);
var ProViceChancellor = new Admin(
  "Pro-Vice-Chancellor",
  false,
  0,
  Provost,
  ViceChancellor,
  450000,
  100,
  25,
  "provicechancellor",
  "numberOfPVC"
);
var ViceChancellor = new Admin(
  "Vice-Chancellor",
  false,
  0,
  ProViceChancellor,
  Chancellor,
  50000,
  500,
  100,
  "vicechancellor",
  "numberOfVC"
);
var Chancellor = new Admin(
  "Chancellor",
  false,
  0,
  ViceChancellor,
  null,
  60000,
  1000,
  250,
  "chancellor",
  "numberOfChancellors"
);

const toasts = new Toasts({
  offsetX: 20, // 20px
  offsetY: 20, // 20px
  gap: 20, // The gap size in pixels between toasts
  width: 300, // 300px
  duration: ".5s", // Transition duration
  dimOld: true, // Dim old notifications while the newest notification stays highlighted
  position: "top-right", // top-left | top-center | top-right | bottom-left | bottom-center | bottom-right
});

function toggleAdminButton(title) {
  title.unlockAdmin();

  if (title.isUnlocked == true) {
    document.getElementById(title.buttonID).removeAttribute("disabled");
    return "done";
  } else title.isUnlocked == false;
  {
    document.getElementById(title.buttonID).setAttribute("disabled", "");
    return "not unlocked";
  }
}

function checkAvailabilityAdmins(kind) {
  if (kind.undergradCost < Undergrad.numberOf) {
    toggleAdminButton(kind, kind.buttonID);
  } else if (kind.undergradCost == Undergrad.numberOf) {
    toggleAdminButton(kind, kind.buttonID);
    toasts.push({
      title: "Human Resources Notification",
      content: "One or more " + kind.title + "s" + " may be hired now.",
      dismissAfter: "3s",
      width: 500,
    });
  } else {
    toggleAdminButton(kind, kind.buttonID);
  }
}

$(function () {
  document.getElementById("registrar").disabled = "true";
  Student.instances.forEach((el) => {
    document.getElementById(el.counterID).innerHTML = showNumber(
      el.counterID,
      el
    );
  });
});
