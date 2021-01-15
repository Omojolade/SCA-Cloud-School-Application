#!/usr/bin/env node

const os = require('os')
const { exec } = require('child_process')
const path = require('path')
const http = require('http');

//Widely known OS platform
const getRootDir = path.parse(process.cwd()).root
const isMacOs = os.platform() === 'darwin';
const isWin = os.platform() === "win32";
const isLinux = os.platform() === 'linux';

/**
 * Execute utility function to exec command .
 * @param {String} cmd
 * @param {String} software
 * @return {void}
 */
const addSoftwareUtilityFunction = (cmd, software) => {
    exec(`${software} --version`, function(err, stdout, stderr) {
        console.log("output: ", stdout);
        if (stdout === "" || !stdout) {
            exec(`${cmd} ${software}`, function(err, stdout, stderr) {
                console.log("output: ", stdout);
            })
        }
    });
}

//This function shows the command to install node, curl, wget on three OS Platform(Mac0S,Linux,Windows)
const addSoftware = () => {
    if (isLinux) {
        addSoftwareUtilityFunction("sudo apt-get install", "node")
        addSoftwareUtilityFunction("sudo apt-get install", "curl")
        addSoftwareUtilityFunction("sudo apt-get install", "wget")
    } else if (isMacOs) {
        exec(`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`, function(err, stdout, stdderr) {})

        addSoftwareUtilityFunction("sudo brew install", "node")
        addSoftwareUtilityFunction("sudo brew install", "curl")
        addSoftwareUtilityFunction("sudo brew install", "wget")
    } else if (isWin) {

        http.get("http://ftp.gnu.org/gnu/wget/wget-1.11.4.tar.gz", response => response.pipe(fs.createWriteStream(getRootDir + "/Users/Downloads/wget-1.11.4.tar.gz")))

        https.get("https://curl.se/windows/dl-7.74.0_2/curl-7.74.0_2-win32-mingw.zip", response => response.pipe(fs.createWriteStream(getRootDir + "/Users/Downloads/curl-7.74.0_2-win32-mingw.zip")))

        https.get("https://nodejs.org/dist/v14.15.4/node-v14.15.4.tar.gz", response => response.pipe(fs.createWriteStream(getRootDir + "/Users/Downloads/node-v14.15.4.tar.gz")))

    } else {
        console.log("OS CANNOT BE FOUND")
    }
}

/*This function checks if any of the software (node, wget, curl) exist on your computer. 
If it exists, it shows the version, if not, the software will install */

const checkVersion = (version) => {
    exec(version, (err, stdout) => {
        if (err) {
            console.log("command not found");
            console.log("Installing " + version + "...");
        }
        if (stdout != "") {
            console.log(`${stdout}`)
        } else {
            addSoftware()
        }
    });
}

checkVersion("wget --version")