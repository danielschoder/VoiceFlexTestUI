//Open in Terminal
//concurrently "http-server -a localhost -p 8080"

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('startTestButton');

    if (button) {
        button.addEventListener('click', () => {
            let reportP = document.getElementById('testReport');
            if (reportP == null) { return; }
            reportP.innerHTML = "Test started";
        });
    }
});