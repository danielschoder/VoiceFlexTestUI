import { AccountCreateDto, PhoneNumberAssignDto, PhoneNumberCreateDto } from "../models/VoiceFlex.js";
import { Pages } from "./Pages.js";
import { VoiceFlexServer } from "./VoiceFlexServer.js";

var accountId: string;
var phoneNumberId: string;

export class LoadPage {
    private _server: VoiceFlexServer;
    private _pages: Pages;

    constructor(server: VoiceFlexServer, pages: Pages) {
        this._pages = pages;
        this._server = server;
    }

    public async getScenario1(): Promise<string> {
        let account = new AccountCreateDto("Roger Waters", 1);
        let _account = await this._server.postAccount(account);
        accountId = _account.id;
        return this._pages.Scenario1(_account);
    };

    public async getScenario2(): Promise<string> {
        let phoneNumber = new PhoneNumberCreateDto("07777666666");
        let _phoneNumber = await this._server.postPhoneNumber(phoneNumber);
        phoneNumberId = _phoneNumber.id;
        return this._pages.Scenario2(_phoneNumber);
    };

    public async getScenario3(): Promise<string> {
        let phoneNumber = new PhoneNumberAssignDto(phoneNumberId, accountId);
        let _phoneNumber = await this._server.patchPhoneNumber(phoneNumber);
        return this._pages.Scenario3(accountId, _phoneNumber);
    };

    public async getScenario4(): Promise<string> {
        let _account = await this._server.getAccountWithPhoneNumbers(accountId);
        return this._pages.Scenario4(_account);
    };

    public async getScenario5(): Promise<string> {
        await this._server.deletePhoneNumber(phoneNumberId);
        return this._pages.Scenario5(phoneNumberId);
    };
}
