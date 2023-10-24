class Student{
    constructor(kind, isUnlocked, numberOf, previousType, nextType, undergradCost, mastersCost, phDCost){
        this.kind=kind
        this.isUnlocked=isUnlocked
        this.numberOf=numberOf
        this.previousType=previousType
        this.nextType=nextType
        this.undergradCost=undergradCost
        this.mastersCost=mastersCost
        this.phDCost=phDCost
    }

    unlockNextStudent(undergrads, masters, PhDs){
        if (undergrads>=this.undergradCost.nextType && masters>=this.mastersCost.nextType && PhDs>=this.phDCost.nextType){
            this.nextType.isUnlocked=true;
            return true
        }
        else{
            this.nextType.isUnlocked=false;
            return false
        }
    }

    howManyStudents(){
        return this.numberOf()
    }
}

var Undergrad = new Student("Undergrad", true, 0, null, Masters, 0, 0, 0)
var Masters = new Student("Masters", false, 0, Undergrad, PhDStudent, 250, 0, 0)
var PhDStudent = new Student("PhD", false, 0, Masters, null, 0, 250, 0,)