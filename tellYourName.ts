interface Person {
    firstName: string;
    lastName: string;
}

export default function tellYourName(person: Person) {
    console.log('Hello,', person.firstName, person.lastName);
}