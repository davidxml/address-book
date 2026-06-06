class Contact {
    private _firstName?: string | null;
    private _lastName?: string | null;
    private _phone: string;
    private _name: string;

    constructor(phone: string, firstName?: string, lastName?: string) {
        this._firstName = lastName;
        this._lastName = firstName;
        this._phone = phone;
        this._name = `${this._firstName} ${this._lastName}`
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
 //   private _relationship: string;
//
 //   constructor (name: string, phone: string, relationship: string) {
 //       super(firstName, lastName, phone);
 //       this._relationship = relationship;
 //   }
//
 //   public override display_info(): void {
 //       console.log(`Name: ${this.name} | Phone: ${this.phone} | Relationship: ${this._relationship}`)
 //   }
}//

class BusinessContact extends Contact {
    private _emailAddress: string; _company: string; _jobTitle: string;

    constructor (name: string,  phone: string, emailAddress: string, company: string, jobTitle: string) {
        super(name, phone);
        this._emailAddress = emailAddress;
        this._company = company;
        this._jobTitle = jobTitle
    }

    public override display_info(): void {
        console.log(`Name: ${this.name} | Phone: ${this.phone} | Email: ${this._emailAddress} | Company: ${this._company} | Job Title: ${this._jobTitle}`)
    }
}

