import { AccountDto} from "../models/VoiceFlex.js";

export enum Page {
    Scenario4
}

export class Pages {

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
