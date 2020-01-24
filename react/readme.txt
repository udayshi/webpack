#install webpack (make sure it not on webpack folder)
npm install -D webpack webpack-cli

#Babel
npm install -D babel-loader @babel/core @babel/preset-env

#React enable
npm install -D @babel/preset-react

.bablerc
---------------
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

#Install react ,react-dom
npm i react react-dom