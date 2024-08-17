export class AccountCreateDto {
    description: string;
    status: number;

    constructor(description: string, status: number) {
        this.description = description;
        this.status = status;
    }
}

export class PhoneNumberDto {
    id: string;
    number: string;

    constructor(id: string, number: string) {
        this.id = id;
        this.number = number;
    }
}

export interface AccountDto {
    id: string;
    description: string;
    phoneNumbers: Array<PhoneNumberDto>;
}

export interface ErrorDto {
    code: string;
    message: string;
}
