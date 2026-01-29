const { app, BrowserWindow } = require('electron')
const path = require('path') // 🔥 THIS LINE WAS MISSING

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        icon: path.join(__dirname, 'assets/foxlogo.png'),
        autoHideMenuBar: true,
    })

    win.maximize()
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)
