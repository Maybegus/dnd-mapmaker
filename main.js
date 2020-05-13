const { app, BrowserWindow } = require('electron');

function makeWindow() {
  const window = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  window.loadFile('index.html');
}

app.whenReady().then(makeWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    makeWindow();
  }
});
