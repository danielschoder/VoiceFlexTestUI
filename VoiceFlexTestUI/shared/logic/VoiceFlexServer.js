export class VoiceFlexServer {
    async getAccountWithPhoneNumbers(accountId) {
        return await this.getFromServer(`https://voiceflex-daniel.azurewebsites.net/api/accounts/${accountId}/phonenumbers`);
    }
    async postAccount(account) {
        return await this.postToServer(`https://voiceflex-daniel.azurewebsites.net/api/accounts`, account);
    }
    async getFromServer(url) {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        const request = new Request(url, { method: 'GET', headers: headers });
        return fetch(request)
            .then(res => res.json())
            .then(res => { return res; });
    }
    async postToServer(url, data) {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        const request = { method: 'POST', headers: headers, body: JSON.stringify(data) };
        //return fetch(url, request)
        //    .then(res => res.json())
        //    .then(res => { return res as T; });
        const response = await fetch(url, request);
        if (!response.ok) {
            let error = (await response.json());
        }
        return (await response.json());
    }
}
//# sourceMappingURL=VoiceFlexServer.js.map