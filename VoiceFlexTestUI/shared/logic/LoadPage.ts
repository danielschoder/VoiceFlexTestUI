import { AccountCreateDto } from "../models/VoiceFlex.js";
import { Page, Pages } from "./Pages.js";
import { VoiceFlexServer } from "./VoiceFlexServer.js";

export class LoadPage {
    private _server: VoiceFlexServer;
    private _pages: Pages;

    constructor(server: VoiceFlexServer, pages: Pages) {
        this._pages = pages;
        this._server = server;
    }

    // "Action -> data + html" catalogue

    public async getHtml(action: number): Promise<string> {
        if (action == Page.Scenario1) { return await this.getScenario1(); }
        if (action == Page.Scenario4) { return await this.getScenario4(); }
        return "page not found";
    }

    // Get data and html

    private async getScenario1(): Promise<string> {
        let account = new AccountCreateDto("Roger Waters", 1);
        let _account = await this._server.postAccount(account);
        return this._pages.Scenario1(_account);
    };

    private async getScenario4(): Promise<string> {
        let _account = await this._server.getAccountWithPhoneNumbers("36B5B29E-7984-4274-87BB-91FF2FC72C69");
        return this._pages.Scenario4(_account);
    };
}
