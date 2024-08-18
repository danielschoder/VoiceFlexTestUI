export class AccountCreateDto {
    description;
    status;
    constructor(description, status) {
        this.description = description;
        this.status = status;
    }
}
export class PhoneNumberCreateDto {
    number;
    constructor(number) {
        this.number = number;
    }
}
export class PhoneNumberAssignDto {
    id;
    accountId;
    constructor(id, accountId) {
        this.id = id;
        this.accountId = accountId;
    }
}
//# sourceMappingURL=VoiceFlex.js.map