export class Pages {
    Scenario1(account) {
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
    Scenario2(account) {
        let html = "<div>";
        html += "<h3>Scenario 2</h3>";
        html += "<p>";
        html += account.id;
        html += "</p>";
        html += "<p>";
        html += account.description;
        html += "</p>";
        html += "</div>";
        return html;
    }
    Scenario3(account) {
        let html = "<div>";
        html += "<h3>Scenario 3</h3>";
        html += "<p>";
        html += account.id;
        html += "</p>";
        html += "<p>";
        html += account.description;
        html += "</p>";
        html += "</div>";
        return html;
    }
    Scenario4(account) {
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
//# sourceMappingURL=Pages.js.map