//ES6
// class Person{
//     constructor(name,age,profession,salary){
//         this.name = name;
//         this.age = age;
//         this.profession = profession;
//         this.salary = salary; 
//     }
//     //inheritance
//     class customer extends Person{
//         constructor(name,age,profession,salary);


    // }

// }
// var x = new Person("Balwin", 60, "Developer", 20000);
// var x1 = new Person("Hima", 14, "software-engineer", 50000);
// prompt("His name is " + x1.name + ", she is " + x1.age + ", she is a " +x1.profession + ", and she makes " +x1.salary);

// alert("My name is " + x.name + ", I am " + x.age + ", I am a " + x.profession + ",and I make " + x.salary);


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    greet(){
        return 'Hello ${this.firstName} ${this.lastName}, How are you doing?'
    }
}//inheritance
class customer extends Person{
    constructor(firstName,lastName,age, phone,membership){
        super(firstName,lastName, age);

        this.phone = phone;
        this.membership = membership;
    }
}
const phil = new Person('Philip','mree');
console.log(phil.greet());
