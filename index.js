class Student
{   static studentNum = 0
    static studentLst = []

    constructor(name,age,phoneNumber,marks)


    {   this.minMarks = 40
        this.eligibleAge = 18
        this.name  = name
        this.age = age
        this.phoneNumber = phoneNumber
        this.marks = marks
        Student.studentNum+=1
        let count = Student.studentNum
        this.studentObj ={}
        this.studentObj[count] = this.name
        Student.studentLst.push(this.studentObj)
        
        
    }
    checkEligibility()
    {
        return ()=>{
            if(this.age>this.eligibleAge && this.marks>this.minMarks)
            {
                console.log(`${this.name} is eligible for placements`)
            
                // console.log(Student.studentLst)
            }
            else (console.log(`${this.name} is not eligible for placements`))
            
        }
    }
    
    static checkStudentNums()
    {   
        console.log(`Number of registered students is ${Student.studentNum}`)
    }
      
}
const Student_01 = new Student('Sourab',23,797522211,35)
const Student_02 = new Student('Vinay',24,897522211,41)
const Student_03 = new Student('Vineet',24,997522211,75)
const Student_04 = new Student('Ashutosh',24,697522211,58)
const Student_05 = new Student('Mahesh',24,887522211,60)
Student_05.checkEligibility()()
//Student.displayEligibleLst()