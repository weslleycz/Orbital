const { app, BrowserWindow } = require("electron");
const config = require("./configs/config.project");

const server = require("./dist/server");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: config.electron.width,
    height: config.electron.height
  });

  mainWindow.loadURL("http://localhost:" + config.server.port);

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  app.quit();
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});
