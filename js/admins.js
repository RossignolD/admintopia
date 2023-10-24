class Admin{

    constructor(title, isUnlocked, numberOf, previousTitle, nextTitle, undergradCost, mastersCost, phDCost){
        this.title=title
        this.isUnlocked=isUnlocked
        this.numberOf=numberOf
        this.previousTitle=previousTitle
        this.nextTitle=nextTitle
        this.undergradCost=undergradCost
        this.mastersCost=mastersCost
        this.phDCost=phDCost
    }

    howManyAdmins(){
        return this.numberOf()
    }

    unlockAdmin(){
        if(this.undergradCost<Undergrad.numberOf && this.mastersCost<=Masters.numberOf && this.phDCost<=PhDStudent.numberOf){
            this.isUnlocked=true
            return true
        }
        
        else {           
             this.isUnlocked=false
            return false
    }
}
}

var Registrar = new Admin("Registrar", false, 0, null, CommitteeMember, 100, 0, 0);
var CommitteeMember = new Admin("Committee Member", false, 0, Registrar, CommitteeChair, 1000, 0, 0);
var CommitteeChair = new Admin("Committee Chair", false, 0, CommitteeMember, AssistantDean, 5000, 0, 0)
var AssistantDean = new Admin("Assistant Dean", false, 0, CommitteeChair, DeanOfCollege, 15000, 0, 0)
var DeanOfCollege = new Admin("Dean of College", false, 0, AssistantDean, AssociateViceProvost, 25000, 0, 0)
var AssociateViceProvost = new Admin("Associate Vice-Provost", false, 0, DeanOfCollege, ViceProvost, 30000, 10, 0)
var ViceProvost = new Admin("Vice-Provost", false, 0, AssociateViceProvost, Provost, 35000, 25, 0)
var Provost = new Admin("Provost", false, 0, ViceProvost, ProViceChancellor, 40000, 50, 10)
var ProViceChancellor = new Admin("Pro-Vice-Chancellor", false, 0, Provost, ViceChancellor, 450000, 100, 25)
var ViceChancellor = new Admin("Vice-Chancellor", false, 0, ProViceChancellor, Chancellor, 50000, 500, 100)
var Chancellor = new Admin("Chancellor", false, 0, ViceChancellor, null, 60000, 1000, 250)

function toggleAdminButton(title, buttonID){
    title.unlockAdmin();

    if(title.isUnlocked==true){
        document.getElementById(buttonID).removeAttribute("disabled");
        return "done"
    }
    else(title.isUnlocked==false);
    {
        document.getElementById(buttonID).setAttribute("disabled", "");
    return "not unlocked"
    }
}

function checkAvailability(kind, buttonID){
    if(kind.undergradCost < Undergrad.numberOf){
        toggleAdminButton(kind, buttonID)
        console.log("hello")
    }
    else{
        toggleAdminButton(kind, buttonID)
        console.log("goodbye")
    }
    }

$(function() {
    document.getElementById("registrar").disabled="true";
    document.getElementById("numberOfUndergrads").innerHTML=showNumber("numberOfUndergrads", Undergrad)
});