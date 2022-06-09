### **RELEXPACK - React Electron Express Webpack boilerplate**

---

This is a minimalistic boilerplate for developing desktop applications using Electron and ReactJS, along with ExpressJS and Webpack.

This is built on top of [rexpack](https://github.com/bengrunfeld/rexpack), with some changes to accomodate Electron.

#### Usage

Installation

    git clone https://github.com/Vishnu-Dhanabalan/relexpack.git
    cd relexpack
    npm install

Start developing

    npm run dev

Electron app will open up with hot reloading support. Configure settings using `configs/config.project.js` file

Build the app

    npm run package

The build can be found in the `electron-build` folder. Customize the `package.json` script for your needs.

#### Useful packages installed

- Styled Components
