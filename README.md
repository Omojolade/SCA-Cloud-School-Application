# SCA CLOUD SCHOOL APPLICATION

## The CLI application to install software wget, curl, node.js

### Setup
1. open your computer’s command prompt (Windows) or terminal (macOS/Linux). Change the current directory to the folder where you save your documents or projects. Enter the following commands to create a new project folder and initialize the project.

        mkdir SCA_Cloud_School_Appl
        cd SCA_Cloud_School_Appl
        npm init
2. open the SCA_Cloud_School_Appl folder in your favorite text editor. create a folder named bin and add a new file to the bin folder named index.js. Open the index.js file in your text editor and copy the following code.

        #!/usr/bin/env node

3. The first line that begins with #! is usually called a “shebang.”, this first line is also required for Node.js scripts to be installed and run properly on macOS and Windows.

4.  open the package.json file in the root of the project in your text editor. Change the main value to bin/index.js. Add a new key for bin with the following text.

        "bin": {
             "cloudapplication": "./bin/index.js"
         }
### To install dependencies and run the application
 npm install

the goal of writing a script like this is to be able to run it from anywhere. You can do that with the npm install command.

        npm install -g .

This installs your script “globally.”.  You can now run your script by typing cloudapplication at the command line!

        cloudapplication
        
To uninstall your script, run the following command.

npm uninstall -g SCA_Cloud_School_Appl


### To check the if the software exist

checkVersion("curl --version")
checkVersion("wget --version")
checkVersion("node --version")
 
use any of the above and "cloudapplication" in your terminal. If software exist, it shows its version. If not, it will install. 