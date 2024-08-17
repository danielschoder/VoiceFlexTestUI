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
        let testStarted = document.getElementById('testStarted');
        if (testStarted == null) {
            return;
        }
        let scenario1Div = document.getElementById('scenario1');
        if (scenario1Div == null) {
            return;
        }
        let scenario4Div = document.getElementById('scenario4');
        if (scenario4Div == null) {
            return;
        }
        testStarted.innerHTML = "Test started";
        scenario1Div.innerHTML = await _loadPage.getHtml(0);
        scenario4Div.innerHTML = await _loadPage.getHtml(3);
    });
}
//# sourceMappingURL=app.js.map