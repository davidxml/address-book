/* Types and interfaces in typescript

--->  An interface describes an object's structure. It suits object-oriented design.
                  #### Properties ####
    1.    Extension: Extends other interfaces using extends.
    2.    Merging: Merges duplicate definitions automatically.
    3.    Focus: Limited strictly to object structures.
*/

interface Student {
    name: string;
    matricNo: number;       
}

// Multiple interfaces can be made with the same name nd the both of them merge automatically 

interface Student {
    name: string;
    dept: string;
    gender: string;
} // Student now has a name, matricNo, dept, gender.

// Etension property
interface Person {
    name: string;
}

interface Employee extends Person {
    salary: number;
}

const worker: Employee = {
    name: "David",
    salary: 4000000
};

// Merging property 
interface User {
    name: string;
}

interface User {
    id: string;
}

const admin: User = {    // This automatically requires a name and an id 
    name: "David",
    id: "0001",  // starting an number with a leading zero (0001) makes it default to octal we either  default to string or just type 1
}


/* ---> A type creates a definition alias. It handles primitives, unions, and tuples.
                ##### Properties #####
                Flexibility: Defines primitives, arrays, or unions.
                Extension: Combines types using intersections (&).
                Static: Throws errors on duplicate definitions. 
*/

// Extension Property (does not have the extends keyword uses & instead)
type Animal= {
    name: string;
}

type Dog = Animal & {
    breed: string;
}

const Pet: Dog = {   // Because of the extension property pet now requires both a name and a breed 
    name: "Perfect",
    breed: "PitBull"
}



