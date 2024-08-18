import { AccountDto, PhoneNumberDto } from "../models/VoiceFlex.js";

export class Pages {

    public Scenario1(account: AccountDto): string {
        let html = "<div>";
        html += "<h3>Scenario 1: Create account</h3>";
        html += "<p>";
        html += `id: ${account.id}`;
        html += "</p>";
        html += "<p>";
        html += `description: ${account.description}`;
        html += "</p>";
        html += "</div>";
        return html;
    }

    public Scenario2(phoneNumber: PhoneNumberDto): string {
        let html = "<div>";
        html += "<h3>Scenario 2: Create phone number</h3>";
        html += "<p>";
        html += `id: ${phoneNumber.id}`;
        html += "</p>";
        html += "<p>";
        html += `number: ${phoneNumber.number}`;
        html += "</p>";
        html += "<p>";
        html += `accountId: ${phoneNumber.accountId}`;
        html += "</p>";
        html += "</div>";
        return html;
    }

    public Scenario3(accountId: string, phoneNumber: PhoneNumberDto): string {
        let html = "<div>";
        html += `<h3>Scenario 3: Assign phone number to account ${accountId}</h3>`;
        html += "<p>";
        html += `id: ${phoneNumber.id}`;
        html += "</p>";
        html += "<p>";
        html += `number: ${phoneNumber.number}`;
        html += "</p>";
        html += "<p>";
        html += `accountId: ${phoneNumber.accountId}`;
        html += "</p>";
        html += "</div>";
        return html;
    }

    public Scenario4(account: AccountDto): string {
        let html = "<div>";
        html += "<h3>Scenario 4: Show phone number(s) of an account</h3>";
        html += "<p>";
        html += `id: ${account.id}`;
        html += "</p>";
        html += "<p>";
        html += `description: ${account.description}`;
        html += "</p>";
        html += "<ul>";
        for (const phoneNumber of account.phoneNumbers) {
            html += `<li>number: ${phoneNumber.number}</li>`;
        }
        html += "</ul>";
        html += "</div>";
        return html;
    }

    public Scenario5(id: string): string {
        let html = "<div>";
        html += "<h3>Scenario 5: Delete phone number</h3>";
        html += "<p>";
        html += `deleted id: ${id}`;
        html += "</p>";
        html += "</div>";
        return html;
    }
}
