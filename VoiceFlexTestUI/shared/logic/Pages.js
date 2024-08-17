export var Page;
(function (Page) {
    Page[Page["Scenario1"] = 0] = "Scenario1";
    Page[Page["Scenario2"] = 1] = "Scenario2";
    Page[Page["Scenario3"] = 2] = "Scenario3";
    Page[Page["Scenario4"] = 3] = "Scenario4";
})(Page || (Page = {}));
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