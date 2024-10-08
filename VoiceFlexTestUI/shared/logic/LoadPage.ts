import { AccountCreateDto, AccountUpdateStatusDto, PhoneNumberAssignDto, PhoneNumberCreateDto } from "../models/VoiceFlex.js";
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
        const startTime = new Date().getTime();
        const account = new AccountCreateDto("Roger Waters", 1);
        const _account = await this._server.postAccount(account);
        accountId = _account.id;
        return this._pages.Scenario1(_account, new Date().getTime() - startTime);
    };

    public async getScenario2(): Promise<string> {
        const startTime = new Date().getTime();
        const phoneNumber = new PhoneNumberCreateDto("07777666666");
        const _phoneNumber = await this._server.postPhoneNumber(phoneNumber);
        phoneNumberId = _phoneNumber.id;
        return this._pages.Scenario2(_phoneNumber, new Date().getTime() - startTime);
    };

    public async getScenario3(): Promise<string> {
        const startTime = new Date().getTime();
        const phoneNumber = new PhoneNumberAssignDto(phoneNumberId, accountId);
        const _phoneNumber = await this._server.patchPhoneNumber(phoneNumber);
        return this._pages.Scenario3(_phoneNumber, new Date().getTime() - startTime);
    };

    public async getScenario4(): Promise<string> {
        const startTime = new Date().getTime();
        const _account = await this._server.getAccountWithPhoneNumbers(accountId);
        return this._pages.Scenario4(_account, new Date().getTime() - startTime);
    };

    public async getScenario5(): Promise<string> {
        const startTime = new Date().getTime();
        await this._server.deletePhoneNumber(phoneNumberId);
        return this._pages.Scenario5(phoneNumberId, new Date().getTime() - startTime);
    };

    public async getScenario6(): Promise<string> {
        const startTime = new Date().getTime();
        const account = new AccountUpdateStatusDto(accountId, 0);
        const _account = await this._server.patchAccount(account);
        return this._pages.Scenario6(_account, new Date().getTime() - startTime);
    };
}
