import { AccountCreateDto } from "../models/VoiceFlex.js";
import { Page } from "./Pages.js";
export class LoadPage {
    _server;
    _pages;
    constructor(server, pages) {
        this._pages = pages;
        this._server = server;
    }
    // "Action -> data + html" catalogue
    async getHtml(action) {
        if (action == Page.Scenario1) {
            return await this.getScenario1();
        }
        if (action == Page.Scenario4) {
            return await this.getScenario4();
        }
        return "page not found";
    }
    // Get data and html
    async getScenario1() {
        let account = new AccountCreateDto("Roger Waters", 1);
        let _account = await this._server.postAccount(account);
        return this._pages.Scenario1(_account);
    }
    ;
    async getScenario4() {
        let _account = await this._server.getAccountWithPhoneNumbers("36B5B29E-7984-4274-87BB-91FF2FC72C69");
        return this._pages.Scenario4(_account);
    }
    ;
}
//# sourceMappingURL=LoadPage.js.map