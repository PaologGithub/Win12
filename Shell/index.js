const electron = require('electron');
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
}
electron.app.on('ready', () => {
    createWindow()
})