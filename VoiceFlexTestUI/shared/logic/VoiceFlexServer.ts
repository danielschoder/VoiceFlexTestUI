import { AccountCreateDto, AccountDto, ErrorDto } from "../models/VoiceFlex.js";

export class VoiceFlexServer {

    public async getAccountWithPhoneNumbers(accountId: string): Promise<AccountDto> {
        return await this.getFromServer<AccountDto>(`https://voiceflex-daniel.azurewebsites.net/api/accounts/${accountId}/phonenumbers`);
    }

    public async postAccount(account: AccountCreateDto): Promise<AccountDto> {
        return await this.postToServer<AccountCreateDto, AccountDto>(`https://voiceflex-daniel.azurewebsites.net/api/accounts`, account);
    }

    private async getFromServer<T>(url: string): Promise<T> {
        const headers: Headers = new Headers()
        headers.set('Content-Type', 'application/json')
        headers.set('Accept', 'application/json')
        const request: RequestInfo = new Request(url, { method: 'GET', headers: headers })
        return fetch(request)
            .then(res => res.json())
            .then(res => { return res as T; })
    }

    private async postToServer<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> {
        const headers: Headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        const request: RequestInit = { method: 'POST', headers: headers, body: JSON.stringify(data) };
        //return fetch(url, request)
        //    .then(res => res.json())
        //    .then(res => { return res as T; });

        const response = await fetch(url, request);
        if (!response.ok) {
            let error = (await response.json()) as ErrorDto;
        }

        return (await response.json()) as TResponse;
    }
}
