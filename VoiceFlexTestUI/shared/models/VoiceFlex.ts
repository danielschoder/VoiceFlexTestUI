export class AccountCreateDto {
    description: string;
    status: number;

    constructor(description: string, status: number) {
        this.description = description;
        this.status = status;
    }
}

export class AccountUpdateStatusDto {
    id: string;
    status: number;

    constructor(id: string, status: number) {
        this.id = id;
        this.status = status;
    }
}

export class PhoneNumberCreateDto {
    number: string;

    constructor(number: string) {
        this.number = number;
    }
}

export class PhoneNumberAssignDto {
    id: string;
    accountId: string;

    constructor(id: string, accountId: string) {
        this.id = id;
        this.accountId = accountId;
    }
}

export interface AccountDto {
    id: string;
    description: string;
    status: number;
    phoneNumbers: Array<PhoneNumberDto>;
}

export interface PhoneNumberDto {
    id: string;
    number: string;
    accountId: string;
}

export interface ErrorDto {
    code: string;
    message: string;
}
