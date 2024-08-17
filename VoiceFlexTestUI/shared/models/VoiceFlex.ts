export interface AccountDto {
    id: string;
    description: string;
    phoneNumbers: Array<PhoneNumberDto>;
}

export interface PhoneNumberDto {
    id: string;
    number: string;
}
