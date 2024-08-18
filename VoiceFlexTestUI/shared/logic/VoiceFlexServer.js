export class VoiceFlexServer {
    async postAccount(account) {
        return await this.postToServer(`https://voiceflex-daniel.azurewebsites.net/api/accounts`, account);
    }
    async getAccountWithPhoneNumbers(id) {
        return await this.getFromServer(`https://voiceflex-daniel.azurewebsites.net/api/accounts/${id}/phonenumbers`);
    }
    async patchAccount(account) {
        return await this.patchToServer(`https://voiceflex-daniel.azurewebsites.net/api/accounts/${account.id}`, account);
    }
    async postPhoneNumber(phoneNumber) {
        return await this.postToServer(`https://voiceflex-daniel.azurewebsites.net/api/phonenumbers`, phoneNumber);
    }
    async patchPhoneNumber(phoneNumber) {
        return await this.patchToServer(`https://voiceflex-daniel.azurewebsites.net/api/phonenumbers/${phoneNumber.id}`, phoneNumber);
    }
    async deletePhoneNumber(id) {
        return await this.deleteFromServer(`https://voiceflex-daniel.azurewebsites.net/api/phonenumbers/${id}`);
    }
    async postToServer(url, data) {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        const request = { method: 'POST', headers: headers, body: JSON.stringify(data) };
        const response = await fetch(url, request);
        if (!response.ok) {
            let error = (await response.json());
        }
        return (await response.json());
    }
    async getFromServer(url) {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        const request = new Request(url, { method: 'GET', headers: headers });
        const response = await fetch(request);
        if (!response.ok) {
            let error = (await response.json());
        }
        return (await response.json());
    }
    async patchToServer(url, data) {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        const request = { method: 'PATCH', headers: headers, body: JSON.stringify(data) };
        const response = await fetch(url, request);
        if (!response.ok) {
            let error = (await response.json());
        }
        return (await response.json());
    }
    async deleteFromServer(url) {
        const headers = new Headers();
        headers.set('Accept', 'application/json');
        const request = { method: 'DELETE', headers: headers };
        const response = await fetch(url, request);
        if (!response.ok) {
            let error = (await response.json());
        }
        return "";
    }
}
//# sourceMappingURL=VoiceFlexServer.js.map