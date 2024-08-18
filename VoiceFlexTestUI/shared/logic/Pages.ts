import { AccountDto, PhoneNumberDto } from "../models/VoiceFlex.js";

export class Pages {

    public Scenario1(account: AccountDto): string {
        let html = "<div>";
        html += "<h3>Scenario 1: Create account</h3>";
        html += `<h5>${this.TimeStamp()}</h5>`;
        html += this.AccountHtml(account);
        html += "</div>";
        return html;
    }

    public Scenario2(phoneNumber: PhoneNumberDto): string {
        let html = "<div>";
        html += "<h3>Scenario 2: Create phone number</h3>";
        html += `<h5>${this.TimeStamp()}</h5>`;
        html += this.PhoneNumberHtml(phoneNumber);
        html += "</div>";
        return html;
    }

    public Scenario3(accountId: string, phoneNumber: PhoneNumberDto): string {
        let html = "<div>";
        html += `<h3>Scenario 3: Assign phone number to account ${accountId}</h3>`;
        html += `<h5>${this.TimeStamp()}</h5>`;
        html += this.PhoneNumberHtml(phoneNumber);
        html += "</div>";
        return html;
    }

    public Scenario4(account: AccountDto): string {
        let html = "<div>";
        html += "<h3>Scenario 4: Show phone number(s) of an account</h3>";
        html += `<h5>${this.TimeStamp()}</h5>`;
        html += this.AccountHtml(account);
        html += "<ul>";
        for (const phoneNumber of account.phoneNumbers) {
            html += `<li>id: ${phoneNumber.id} number: <b>${phoneNumber.number}</b></li>`;
        }
        html += "</ul>";
        html += "</div>";
        return html;
    }

    public Scenario5(id: string): string {
        let html = "<div>";
        html += "<h3>Scenario 5: Delete phone number</h3>";
        html += `<h5>${this.TimeStamp()}</h5>`;
        html += "<p>";
        html += `deleted id: ${id}`;
        html += "</p>";
        html += "</div>";
        return html;
    }

    public Scenario6(account: AccountDto): string {
        let html = "<div>";
        html += "<h3>Scenario 6: Suspend account</h3>";
        html += `<h5>${this.TimeStamp()}</h5>`;
        html += this.AccountHtml(account);
        html += "</div>";
        return html;
    }

    private AccountHtml(account: AccountDto): string {
        let html = "<p>";
        html += `id: ${account.id}`;
        html += "</p>";
        html += "<p>";
        html += `description: <b>${account.description}</b>`;
        html += "</p>";
        html += "<p>";
        html += `status: <b>${account.status}</b>`;
        html += "</p>";
        return html;
    }

    private PhoneNumberHtml(phoneNumber: PhoneNumberDto): string {
        let html = "<p>";
        html += `id: ${phoneNumber.id}`;
        html += "</p>";
        html += "<p>";
        html += `number: <b>${phoneNumber.number}</b>`;
        html += "</p>";
        html += "<p>";
        html += `accountId: <b>${phoneNumber.accountId}</b>`;
        html += "</p>";
        return html;
    }

    private TimeStamp(): string {
        const now = new Date();
        return now.toISOString();
    }
}
