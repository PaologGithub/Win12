const electron = require("electron");
const remote = require("@electron/remote/main");

remote.initialize()

function createWindow() {
    const win = new electron.BrowserWindow({
        width:400,
        height:600,
        titleBarStyle: "hidden",
        webPreferences:{nodeIntegration:true, contextIsolation: false}
    })
    win.loadFile("index.html")
    win.setMenu(null)
    remote.enable(win.webContents)
    win.setResizable(false);
    //win.webContents.openDevTools();
}

electron.app.on("ready", () => {
    createWindow();
})

electron.ipcMain.on("closed", () => {
    electron.app.quit()
}) 