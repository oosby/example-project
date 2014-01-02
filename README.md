Example AMD Module project
================

Example project using AMD Modules. Uses a submodule to pull in the PSD AMD Module Repo. 

1) Clone example-project repo using --recursive, which also pulls in the submodules
```
git clone --recursive https://github.com/trhoppe/example-project.git
```
2) Install Grunt CLI (only needs to be done once per computer, not per project)
```
sudo npm install -g grunt-cli
```
3) Install NPM Modules 
```
sudo npm install
```
4) Run grunt
```
grunt
```

This will automatically find the AMD module dependencies, pull the correct code from the /modules/ folder (pulled in via submodules) and compile everything together

5) View the index.html file located in src/main/webapp/ and open console

TODO: Include this into a Brightspot CMS built and run grunt using the maven plugin