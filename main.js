// Calling in electron
const {app, BrowserWindow } = require('electron'); 
const path = require('path');

// Creating interactable window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('renderer/index.html');
};

// Program start
app.whenReady().then(() => {
    createWindow()
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});

// Checking if platform is Mac (To terminate)
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});