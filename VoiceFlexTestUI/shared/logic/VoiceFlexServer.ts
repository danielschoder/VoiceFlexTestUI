import { AccountCreateDto, AccountDto, AccountUpdateStatusDto, ErrorDto, PhoneNumberAssignDto, PhoneNumberCreateDto, PhoneNumberDto } from "../models/VoiceFlex.js";

export class VoiceFlexServer {

    public async postAccount(account: AccountCreateDto): Promise<AccountDto> {
        return await this.postToServer<AccountCreateDto, AccountDto>(`https://voiceflex-daniel.azurewebsites.net/api/accounts`, account);
    }

    public async getAccountWithPhoneNumbers(id: string): Promise<AccountDto> {
        return await this.getFromServer<AccountDto>(`https://voiceflex-daniel.azurewebsites.net/api/accounts/${id}/phonenumbers`);
    }

    public async patchAccount(account: AccountUpdateStatusDto): Promise<AccountDto> {
        return await this.patchToServer<AccountUpdateStatusDto, AccountDto>(`https://voiceflex-daniel.azurewebsites.net/api/accounts/${account.id}`, account);
    }

    public async postPhoneNumber(phoneNumber: PhoneNumberCreateDto): Promise<PhoneNumberDto> {
        return await this.postToServer<PhoneNumberCreateDto, PhoneNumberDto>(`https://voiceflex-daniel.azurewebsites.net/api/phonenumbers`, phoneNumber);
    }

    public async patchPhoneNumber(phoneNumber: PhoneNumberAssignDto): Promise<PhoneNumberDto> {
        return await this.patchToServer<PhoneNumberAssignDto, PhoneNumberDto>(`https://voiceflex-daniel.azurewebsites.net/api/phonenumbers/${phoneNumber.id}`, phoneNumber);
    }

    public async deletePhoneNumber(id: string): Promise<string> {
        return await this.deleteFromServer(`https://voiceflex-daniel.azurewebsites.net/api/phonenumbers/${id}`);
    }

    private async postToServer<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> {
        const headers: Headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        const request: RequestInit = { method: 'POST', headers: headers, body: JSON.stringify(data) };

        const response = await fetch(url, request);
        if (!response.ok) {
            let error = (await response.json()) as ErrorDto;
        }

        return (await response.json()) as TResponse;
    }

    private async getFromServer<T>(url: string): Promise<T> {
        const headers: Headers = new Headers()
        headers.set('Content-Type', 'application/json')
        headers.set('Accept', 'application/json')
        const request: RequestInfo = new Request(url, { method: 'GET', headers: headers })

        const response = await fetch(request);
        if (!response.ok) {
            let error = (await response.json()) as ErrorDto;
        }

        return (await response.json()) as T;
    }

    private async patchToServer<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> {
        const headers: Headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        const request: RequestInit = { method: 'PATCH', headers: headers, body: JSON.stringify(data) };

        const response = await fetch(url, request);
        if (!response.ok) {
            let error = (await response.json()) as ErrorDto;
        }

        return (await response.json()) as TResponse;
    }

    private async deleteFromServer(url: string): Promise<string> {
        const headers: Headers = new Headers();
        headers.set('Accept', 'application/json');
        const request: RequestInit = { method: 'DELETE', headers: headers };

        const response = await fetch(url, request);
        if (!response.ok) {
            let error = (await response.json()) as ErrorDto;
        }

        return "";
    }
}
