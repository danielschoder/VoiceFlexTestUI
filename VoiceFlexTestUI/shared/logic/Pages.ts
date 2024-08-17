import { AccountDto, ErrorDto} from "../models/VoiceFlex.js";

export enum Page {
    Scenario1,
    Scenario2,
    Scenario3,
    Scenario4
}

export class Pages {

    public Scenario1(account: AccountDto): string {
        let html = "<div>";
        html += "<h3>Scenario 1</h3>";
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
        html += "<h3>Scenario 4</h3>";
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
