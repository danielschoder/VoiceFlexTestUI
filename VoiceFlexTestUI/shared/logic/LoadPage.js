import { Page } from "./Pages.js";
export class LoadPage {
    _server;
    _pages;
    constructor(server, pages) {
        this._pages = pages;
        this._server = server;
    }
    // "Action -> data + html" catalogue
    async getHtml(action, id) {
        if (action == Page.Scenario4) {
            return await this.getScenario4(id);
        }
        return "page not found";
    }
    // Get data and html
    async getScenario4(accountId) {
        let _account = await this._server.getAccountWithPhoneNumbers(accountId);
        return this._pages.Scenario4(_account);
    }
    ;
}
//# sourceMappingURL=LoadPage.js.map