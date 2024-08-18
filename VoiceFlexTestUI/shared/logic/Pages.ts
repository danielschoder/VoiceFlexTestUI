import { AccountDto, PhoneNumberDto } from "../models/VoiceFlex.js";

export class Pages {

    public Scenario1(account: AccountDto, timeTaken: number): string {
        return this.htmlDiv(
            this.htmlH3H5("Scenario 1: Create account", timeTaken) +
            this.AccountHtml(account));
    }

    public Scenario2(phoneNumber: PhoneNumberDto, timeTaken: number): string {
        return this.htmlDiv(
            this.htmlH3H5("Scenario 2: Create phone number", timeTaken) +
            this.PhoneNumberHtml(phoneNumber));
    }

    public Scenario3(phoneNumber: PhoneNumberDto, timeTaken: number): string {
        return this.htmlDiv(
            this.htmlH3H5(`Scenario 3: Assign phone number to account`, timeTaken) +
            this.PhoneNumberHtml(phoneNumber));
    }

    public Scenario4(account: AccountDto, timeTaken: number): string {
        return this.htmlDiv(
            this.htmlH3H5(`Scenario 4: Show phone number(s) of account`, timeTaken) +
            this.AccountHtml(account) +
            this.PhoneNumbersHtml(account.phoneNumbers));
    }

    public Scenario5(id: string, timeTaken: number): string {
        return this.htmlDiv(
            this.htmlH3H5(`Scenario 5: Delete phone number`, timeTaken) +
            `<p>deleted id: ${id}</p>`);
    }

    public Scenario6(account: AccountDto, timeTaken: number): string {
        return this.htmlDiv(
            this.htmlH3H5(`Scenario 6: Suspend account`, timeTaken) +
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

    private htmlH3H5(h3Text: string, timeTaken: number): string {
        return `<br /><h5>${new Date().toISOString()} - ${timeTaken}ms</h5><h3>${h3Text}</h3>`
    }
}
