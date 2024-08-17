import { VoiceFlexServer } from "./VoiceFlexServer.js";
import { Page, Pages } from "./Pages.js";

export class LoadPage {
    private _server: VoiceFlexServer;
    private _pages: Pages;

    constructor(server: VoiceFlexServer, pages: Pages) {
        this._pages = pages;
        this._server = server;
    }

    // "Action -> data + html" catalogue

    public async getHtml(action: number, id: string): Promise<string> {
        if (action == Page.Scenario4) { return await this.getScenario4(id); }
        return "page not found";
    }

    // Get data and html

    private async getScenario4(accountId: string): Promise<string> {
        let _account = await this._server.getAccountWithPhoneNumbers(accountId);
        return this._pages.Scenario4(_account);
    };
}
