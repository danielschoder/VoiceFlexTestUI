import { AccountDto, PhoneNumberDto } from "../models/VoiceFlex.js";

export class Pages {

    public Scenario1(account: AccountDto): string {
        return this.htmlDiv(
            this.htmlH3H5("Scenario 1: Create account") +
            this.AccountHtml(account));
    }

    public Scenario2(phoneNumber: PhoneNumberDto): string {
        return this.htmlDiv(
            this.htmlH3H5("Scenario 2: Create phone number") +
            this.PhoneNumberHtml(phoneNumber));
    }

    public Scenario3(phoneNumber: PhoneNumberDto): string {
        return this.htmlDiv(
            this.htmlH3H5(`Scenario 3: Assign phone number to account`) +
            this.PhoneNumberHtml(phoneNumber));
    }

    public Scenario4(account: AccountDto): string {
        return this.htmlDiv(
            this.htmlH3H5(`Scenario 4: Show phone number(s) of account`) +
            this.AccountHtml(account) +
            this.PhoneNumbersHtml(account.phoneNumbers));
    }

    public Scenario5(id: string): string {
        return this.htmlDiv(
            this.htmlH3H5(`Scenario 5: Delete phone number`) +
            `<p>deleted id: ${id}</p>`);
    }

    public Scenario6(account: AccountDto): string {
        return this.htmlDiv(
            this.htmlH3H5(`Scenario 6: Suspend account`) +
            this.AccountHtml(account));
    }

    private AccountHtml(account: AccountDto): string {
        return `<p>id: ${account.id}</p>` +
            `<p>description: <b>${account.description}</b></p>` +
            `<p>status: <b>${account.status}</b></p>`;
    }

    private PhoneNumberHtml(phoneNumber: PhoneNumberDto): string {
        return `<p>id: ${phoneNumber.id}</p>` +
            `<p>number: <b>${phoneNumber.number}</b></p>` +
            `<p>accountId: <b>${phoneNumber.accountId}</b></p>`;
    }

    private PhoneNumbersHtml(phoneNumbers: PhoneNumberDto[]): string {
        let html = `<ul>`;
        for (const phoneNumber of phoneNumbers) {
            html += `<li>id: ${phoneNumber.id} number: <b>${phoneNumber.number}</b></li>`;
        }
        return html + `</ul>`;
    }

    private htmlDiv(html: string): string {
        return `<div>${html}</div>`;
    }

    private htmlH3H5(h3Text: string): string {
        return `<h3>${h3Text}</h3><h5>${new Date().toISOString()}</h5>`
    }
}
