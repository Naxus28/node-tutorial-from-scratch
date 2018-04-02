#  Accessing the exported functions -- 3 types of requires

 ## 1) use relative path if we created the file

```let circle = require('./index');```

 ## 2) call the module by name if it is part of node core or if you installed and external module using npm

 ```let fs = require('fs');``` 


 ## 3) install external module 'colors' by running 'npm i colors' and then require module

 ```let externalModule = require('externalModule');```


> Note1: node will look at the global modules (the ones that come with the node installation) first and use that module, even if we have a local module by that name. If it doesn't find the module in the node core library, node looks at the local "node_modules" folder, meaning the node_modules within the current directory. If it doesn't find the module in the current directory (/Users/gabrielferraz/Desktop/practice/node-tutorial-from-scratch), node will traverse up the directories looking for the module in a node_modules folder. 
i.e. if the module is not found in '/Users/gabrielferraz/Desktop/practice/node-tutorial-from-scratch/node_modules'
node will look for '/Users/gabrielferraz/Desktop/practice/node_modules', then '/Users/gabrielferraz/Desktop/node_modules', and continue all the way up the root unless the module is found


> Note2: when we require a module we don't need to add the '.js/.json/.node' file extesions. Node will first look for a '.js' file (say colors.js), then a '.json' file, (which it treats as a json file), and finally a '.node' file, which it treats as a compiled file. This happens for external modules as well as for files we create (i.e. in this directory. if we "require('node-env')" node will require 'node-env.js', not 'node-env.json')


> Note3: if a package will be used from the command line, we need to install it globally using flag '-g'. i.d. npm install -g gulp. If thd module is only needed for a project, install it in the node_modules of that project (simple install without the flag -g)


> Note4: we can download a module from the node website or from github. If the module comes from npm, we use the package name and npm to install (i.e. 'npm install winston'). If the module comes github we need to provide the repository url and a pound sign followed by the branch: 'https://github.com/winstonjs/winston#master' or 'https://github.com/winstonjs/winston/tarball/master'
