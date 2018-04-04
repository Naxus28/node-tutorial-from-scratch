# File System [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html)

The file system module allows you to access the file system. All functions have a synchronous and asynchronous version.

## SYNCHRONOUS FUNCTIONS
These are well suited for app initialization, where you would want all config files to have been initialized before you start running the app.


## ASYNCHRONOUS FUNCTIONS
To be used when the app is running so we take advantage of node's non-blocking threading system. 

> Stay away from synchronous operations when app is running.
