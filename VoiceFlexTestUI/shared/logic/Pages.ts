import { AccountDto } from "../models/VoiceFlex.js";

export class Pages {

    public Scenario1(account: AccountDto): string {
        let html = "<div>";
        html += "<h3>Scenario 1: Create account</h3>";
        html += "<p>";
        html += account.id;
        html += "</p>";
        html += "<p>";
        html += account.description;
        html += "</p>";
        html += "</div>";
        return html;
    }

    public Scenario2(account: AccountDto): string {
        let html = "<div>";
        html += "<h3>Scenario 2: Create phone number</h3>";
        html += "<p>";
        html += account.id;
        html += "</p>";
        html += "<p>";
        html += account.description;
        html += "</p>";
        html += "</div>";
        return html;
    }

    public Scenario3(account: AccountDto): string {
        let html = "<div>";
        html += "<h3>Scenario 3: Assign phone number to account</h3>";
        html += "<p>";
        html += account.id;
        html += "</p>";
        html += "<p>";
        html += account.description;
        html += "</p>";
        html += "</div>";
        return html;
    }

    public Scenario4(account: AccountDto): string {
        let html = "<div>";
        html += "<h3>Scenario 4: Show phone number(s) of an account</h3>";
        html += "<p>";
        html += account.description;
        html += "</p>";
        html += "<ul>";
        for (const phoneNumber of account.phoneNumbers) {
            html += `<li>${phoneNumber.number}</li>`;
        }
        html += "</ul>";
        html += "</div>";
        return html;
    }
}
