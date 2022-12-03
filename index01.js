class Student {
    constructor(name, age, marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return (minMarks)  => {

            console.log('inside egligibleForCurrentCompany' , this)
            if(this.agemarks > minMarks && this.age > minPlacementAge){
                console.log(this.name + "is ready for placements")
            } else {
                console.log(this.name + "is not ready for placements")
            }
        }
    }
}

const Vishu = new Student('vishu', 25, 80);
const Rohan = new Student('Rohan', 17, 39)

Vishu.setPlacementAge(18)(80);