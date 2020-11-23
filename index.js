const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;

// process.env.NODE_ENV = 'production';

let mainWindow;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    // In production
    /*mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/public/index.html'),
        protocol: 'file:',
        slashes: true
    }));*/
    // In development
    mainWindow.loadURL('http://localhost:3000');

    mainWindow.on('closed', ()=>{
        app.quit();
    })

    // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Menu.setApplicationMenu(mainMenu);
});

ipcMain.on('send:msg', (e, msg)=>{
    // console.log(msg);
})