export class VoiceFlexServer {
    async getAccountWithPhoneNumbers(accountId) {
        return await this.getFromServer(`https://voiceflex-daniel.azurewebsites.net/api/accounts/${accountId}/phonenumbers`);
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
}
//# sourceMappingURL=VoiceFlexServer.js.map