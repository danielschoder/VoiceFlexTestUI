export class Pages {
    Scenario1(account) {
        let html = "<div>";
        html += "<h3>Scenario 1: Create account</h3>";
        html += `<h5>${this.TimeStamp()}</h5>`;
        html += this.AccountHtml(account);
        html += "</div>";
        return html;
    }
    Scenario2(phoneNumber) {
        let html = "<div>";
        html += "<h3>Scenario 2: Create phone number</h3>";
        html += `<h5>${this.TimeStamp()}</h5>`;
        html += this.PhoneNumberHtml(phoneNumber);
        html += "</div>";
        return html;
    }
    Scenario3(accountId, phoneNumber) {
        let html = "<div>";
        html += `<h3>Scenario 3: Assign phone number to account ${accountId}</h3>`;
        html += `<h5>${this.TimeStamp()}</h5>`;
        html += this.PhoneNumberHtml(phoneNumber);
        html += "</div>";
        return html;
    }
    Scenario4(account) {
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
    Scenario5(id) {
        let html = "<div>";
        html += "<h3>Scenario 5: Delete phone number</h3>";
        html += `<h5>${this.TimeStamp()}</h5>`;
        html += "<p>";
        html += `deleted id: ${id}`;
        html += "</p>";
        html += "</div>";
        return html;
    }
    Scenario6(account) {
        let html = "<div>";
        html += "<h3>Scenario 6: Suspend account</h3>";
        html += `<h5>${this.TimeStamp()}</h5>`;
        html += this.AccountHtml(account);
        html += "</div>";
        return html;
    }
    AccountHtml(account) {
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
    PhoneNumberHtml(phoneNumber) {
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
    TimeStamp() {
        const now = new Date();
        return now.toISOString();
    }
}
//# sourceMappingURL=Pages.js.map