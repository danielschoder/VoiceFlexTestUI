import { AccountCreateDto } from "../models/VoiceFlex.js";
var accountId;
export class LoadPage {
    _server;
    _pages;
    constructor(server, pages) {
        this._pages = pages;
        this._server = server;
    }
    async getScenario1() {
        let account = new AccountCreateDto("Roger Waters", 1);
        let _account = await this._server.postAccount(account);
        accountId = _account.id;
        return this._pages.Scenario1(_account);
    }
    ;
    async getScenario2() {
        let _account = await this._server.getAccountWithPhoneNumbers(accountId);
        return this._pages.Scenario1(_account);
    }
    ;
    async getScenario3() {
        let _account = await this._server.getAccountWithPhoneNumbers(accountId);
        return this._pages.Scenario1(_account);
    }
    ;
    async getScenario4() {
        let _account = await this._server.getAccountWithPhoneNumbers(accountId);
        return this._pages.Scenario4(_account);
    }
    ;
}
//# sourceMappingURL=LoadPage.js.map