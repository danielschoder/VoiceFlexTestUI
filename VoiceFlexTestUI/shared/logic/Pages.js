export var Page;
(function (Page) {
    Page[Page["Scenario4"] = 0] = "Scenario4";
})(Page || (Page = {}));
export class Pages {
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