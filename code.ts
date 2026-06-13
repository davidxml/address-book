class Contact {
    private _firstName: string;
    private _lastName: string;
    private _phone: string;

    constructor( firstName: string, lastName: string, phone: string,) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phone = phone;
    }

    public get name(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    public get phone(): string {
        return this._phone;
    }

    public set phone(newPhone: string) {
        if (newPhone.length >= 7) {
            this._phone = newPhone;
        } else {
            console.log("Invalid Phone number");
        }
    }

    public display_info(): void {
        console.log(`Name: ${this._firstName} ${this._lastName} | Phone: ${this._phone}`);
    }
}

class PersonalContact extends Contact {
    private _relationship: string;

    constructor (firstName: string, lastName: string, phone: string, relationship: string) {
        super(firstName, lastName, phone);
        this._relationship = relationship;
    }

    public override display_info(): void {
        console.log(`Name: ${this.name} | Phone: ${this.phone} | Relationship: ${this._relationship}`)
    }
}

class BusinessContact extends Contact {
    private _emailAddress: string; _company: string; _jobTitle: string;

    constructor (firstName: string, lastName: string, phone: string, emailAddress: string, company: string, jobTitle: string) {
        super(firstName, lastName, phone);
        this._emailAddress = emailAddress;
        this._company = company;
        this._jobTitle = jobTitle
    }

    public override display_info(): void {
        console.log(`Name: ${this.name} | Phone: ${this.phone} | Email: ${this._emailAddress} | Company: ${this._company} | Job Title: ${this._jobTitle}`)
    }
}

class AddressBook {
        private _contacts: Contact[] = [];

        public addContact (contact: Contact): void {
            if (this. _contacts.some(number => number.phone === contact) === true) // I plan to check if the contact is already existing, since numbers are unique, i'd check ith it.
            this._contacts.push(contact)
        }

        public findContact(name: string): Contact | undefined {

        }

}
