class Student{
    constructor(kind, isUnlocked, previousType, nextType, undergradCost, mastersCost, phDCost){
        this.kind=kind
        this.isUnlocked=isUnlocked
        this.previousType=previousType
        this.nextType=nextType
        this.undergradCost=undergradCost
        this.mastersCost=mastersCost
        this.phDCost=phDCost
    }

    unlockNextStudent(undergrads, masters, PhDs){
        if (undergrads>=this.undergradCost(this.nextTitle()) && masters>=this.mastersCost(this.nextTitle) && PhDs>=this.phDCost(this.nextTitle)){
            this.nextTitle.isUnlocked=true;
        }
        else{
            this.nextTitle.isUnlocked=false;
        }
    }
}