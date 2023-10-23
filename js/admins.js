export default class Admin{

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
    
    
    unlockNextAdmin(undergrads, masters, PhDs){
        if (undergrads>=this.undergradCost(this.nextTitle()) && masters>=this.mastersCost(this.nextTitle) && PhDs>=this.phDCost(this.nextTitle)){
            this.nextTitle.isUnlocked=true;
        }
        else{
            this.nextTitle.isUnlocked=false;
        }
    }

    howManyAdmins(){
        return this.numberOf
    }
}