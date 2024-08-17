//Open in Terminal
//concurrently "http-server -a localhost -p 8080"
import { VoiceFlexServer } from "./shared/logic/VoiceFlexServer.js";
import { Pages } from "./shared/logic/Pages.js";
import { LoadPage } from "./shared/logic/LoadPage.js";
var _server = new VoiceFlexServer();
var _pages = new Pages();
var _loadPage = new LoadPage(_server, _pages);
const button = document.getElementById('startTestButton');
if (button) {
    button.addEventListener('click', async function () {
        let reportDiv = document.getElementById('testReport');
        if (reportDiv == null) {
            return;
        }
        reportDiv.innerHTML = "Test started";
        reportDiv.innerHTML = await _loadPage.getHtml(0, "36B5B29E-7984-4274-87BB-91FF2FC72C69");
    });
}
//# sourceMappingURL=app.js.map