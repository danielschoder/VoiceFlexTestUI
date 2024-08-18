export class Pages {
    Scenario1(account) {
        return this.htmlDiv(this.htmlH3H5("Scenario 1: Create account") +
            this.AccountHtml(account));
    }
    Scenario2(phoneNumber) {
        return this.htmlDiv(this.htmlH3H5("Scenario 2: Create phone number") +
            this.PhoneNumberHtml(phoneNumber));
    }
    Scenario3(phoneNumber) {
        return this.htmlDiv(this.htmlH3H5(`Scenario 3: Assign phone number to account`) +
            this.PhoneNumberHtml(phoneNumber));
    }
    Scenario4(account) {
        return this.htmlDiv(this.htmlH3H5(`Scenario 4: Show phone number(s) of account`) +
            this.AccountHtml(account) +
            this.PhoneNumbersHtml(account.phoneNumbers));
    }
    Scenario5(id) {
        return this.htmlDiv(this.htmlH3H5(`Scenario 5: Delete phone number`) +
            `<p>deleted id: ${id}</p>`);
    }
    Scenario6(account) {
        return this.htmlDiv(this.htmlH3H5(`Scenario 6: Suspend account`) +
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
    htmlH3H5(h3Text) {
        return `<h3>${h3Text}</h3><h5>${new Date().toISOString()}</h5>`;
    }
}
//# sourceMappingURL=Pages.js.map