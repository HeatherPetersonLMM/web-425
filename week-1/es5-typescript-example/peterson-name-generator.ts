let firstName: string = 'Heather';
let lastName: string = 'Peterson';

// whoami function
function myName(firstName: string, lastName: string): string {
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(myName(firstName, lastName));