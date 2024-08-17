import { AccountDto } from "../models/VoiceFlex.js";

export class VoiceFlexServer {

    public async getAccountWithPhoneNumbers(accountId: string): Promise<AccountDto> {
        return await this.getFromServer<AccountDto>(`https://voiceflex-daniel.azurewebsites.net/api/accounts/${accountId}/phonenumbers`);
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
}
