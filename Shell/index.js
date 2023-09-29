const electron = require('electron');
const remote = require("@electron/remote/main")
//const fluent = require("@fluentui/web-components");
remote.initialize()
const dialog = electron.dialog;

function createWindow() {
    const win = new electron.BrowserWindow({
        alwaysOnTop: false,
        webPreferences:{nodeIntegration: true, contextIsolation: false}
    })
    win.loadFile('index.html');
    win.fullScreen = true;
    win.setMenu(null);
    win.setFocusable(false);
    remote.enable(win.webContents);
}
electron.app.on('ready', () => {
    createWindow();
})