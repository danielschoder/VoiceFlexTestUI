//concurrently "http-server -a localhost -p 8080"
import { VoiceFlexServer } from "./shared/logic/VoiceFlexServer.js";
import { Pages } from "./shared/logic/Pages.js";
import { LoadPage } from "./shared/logic/LoadPage.js";
var _server = new VoiceFlexServer();
var _pages = new Pages();
var _loadPage = new LoadPage(_server, _pages);
document.getElementById('startTestButton').addEventListener('click', async function () {
    document.getElementById('testStarted').innerHTML = "Test started";
    document.getElementById('scenario1').innerHTML = await _loadPage.getScenario1();
    document.getElementById('scenario2').innerHTML = await _loadPage.getScenario2();
    document.getElementById('scenario3').innerHTML = await _loadPage.getScenario3();
    document.getElementById('scenario4').innerHTML = await _loadPage.getScenario4();
    document.getElementById('scenario5').innerHTML = await _loadPage.getScenario5();
    document.getElementById('scenario6').innerHTML = await _loadPage.getScenario6();
    document.getElementById('testFinished').innerHTML = "Test finished";
});
//# sourceMappingURL=app.js.map