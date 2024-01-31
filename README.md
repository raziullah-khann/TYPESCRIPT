# Installation Of Tools or Environment
1.install NodeJs
2.install Vs Code

# Install Typescript in your System Locally or globally
  --> npm install -g typescript  =>(global install)
  --> npm i typescript --save-dev  => (local install) 

# Run manually file
  --> tsc <filename> => it convert ts into js file
  --> In index.html file always import js file bcs typescript can't run in browser
  --> node <filename>

# Setting Up code editor
1.install some extension
  --> ESLint, Material Icon Theme, path Intelligence, Prettier-code formatter, TsLint

# Setting Up project
  -->npm init / npm initi -y  => create a package.json file
  -->npm install --save-dev lite-server => It automatically reload on browser
  -->in package.json set a script { "start": "lite-server"}

# Compile Whole project at a time not compile manually
--> tsc <filename> --watch / tsc <filename> -w
--> tsc --init => create a tsconfig.json file => after initialize typescript project run only
-->tsc => whole typescript file compile automattically 
--> Now last thing you set some changes in tsconfig.json file according to your need

# Run project
--> npm start
