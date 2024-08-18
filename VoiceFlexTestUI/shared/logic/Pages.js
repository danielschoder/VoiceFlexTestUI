export class Pages {
    Scenario1(account, timeTaken) {
        return this.htmlDiv(this.htmlH3H5("Scenario 1: Create account", timeTaken) +
            this.AccountHtml(account));
    }
    Scenario2(phoneNumber, timeTaken) {
        return this.htmlDiv(this.htmlH3H5("Scenario 2: Create phone number", timeTaken) +
            this.PhoneNumberHtml(phoneNumber));
    }
    Scenario3(phoneNumber, timeTaken) {
        return this.htmlDiv(this.htmlH3H5(`Scenario 3: Assign phone number to account`, timeTaken) +
            this.PhoneNumberHtml(phoneNumber));
    }
    Scenario4(account, timeTaken) {
        return this.htmlDiv(this.htmlH3H5(`Scenario 4: Show phone number(s) of account`, timeTaken) +
            this.AccountHtml(account) +
            this.PhoneNumbersHtml(account.phoneNumbers));
    }
    Scenario5(id, timeTaken) {
        return this.htmlDiv(this.htmlH3H5(`Scenario 5: Delete phone number`, timeTaken) +
            `<p>deleted id: ${id}</p>`);
    }
    Scenario6(account, timeTaken) {
        return this.htmlDiv(this.htmlH3H5(`Scenario 6: Suspend account`, timeTaken) +
            this.AccountHtml(account));
    }
    AccountHtml(account) {
        return `<p>id: ${account.id}</p>` +
            `<p>description: <b>${account.description}</b></p>` +
            `<p>status: <b>${account.status}</b></p>`;
    }
    PhoneNumberHtml(phoneNumber) {
        return `<p>id: ${phoneNumber.id}</p>` +
            `<p>number: <b>${phoneNumber.number}</b></p>` +
            `<p>accountId: <b>${phoneNumber.accountId}</b></p>`;
    }
    PhoneNumbersHtml(phoneNumbers) {
        let html = `<ul>`;
        for (const phoneNumber of phoneNumbers) {
            html += `<li>id: ${phoneNumber.id} number: <b>${phoneNumber.number}</b></li>`;
        }
        return html + `</ul>`;
    }
    htmlDiv(html) {
        return `<div>${html}</div>`;
    }
    htmlH3H5(h3Text, timeTaken) {
        return `<br /><h5>${new Date().toISOString()} - ${timeTaken}ms</h5><h3>${h3Text}</h3>`;
    }
}
//# sourceMappingURL=Pages.js.map