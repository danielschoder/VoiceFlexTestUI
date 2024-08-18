import { AccountCreateDto, PhoneNumberAssignDto, PhoneNumberCreateDto } from "../models/VoiceFlex.js";
var accountId;
var phoneNumberId;
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
        let phoneNumber = new PhoneNumberCreateDto("07777666666");
        let _phoneNumber = await this._server.postPhoneNumber(phoneNumber);
        phoneNumberId = _phoneNumber.id;
        return this._pages.Scenario2(_phoneNumber);
    }
    ;
    async getScenario3() {
        let phoneNumber = new PhoneNumberAssignDto(phoneNumberId, accountId);
        let _phoneNumber = await this._server.patchPhoneNumber(phoneNumber);
        return this._pages.Scenario3(accountId, _phoneNumber);
    }
    ;
    async getScenario4() {
        let _account = await this._server.getAccountWithPhoneNumbers(accountId);
        return this._pages.Scenario4(_account);
    }
    ;
    async getScenario5() {
        await this._server.deletePhoneNumber(phoneNumberId);
        return this._pages.Scenario5(phoneNumberId);
    }
    ;
}
//# sourceMappingURL=LoadPage.js.map