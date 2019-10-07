# passwordLockerJS

## Twillo Board
https://trello.com/b/WjMGjNKX/password-locker

## To generate new key and encrpt passwords:

You cannot encpt passwords with an existing key, this will come soon.

build the encrpt file, move passwords.json into the node_modules dir

run encrpt.build.js and a new password.json file will be generated in the build dir.


## To run the program:
```
npm i
```
```
add a passwords.json file in the build folder
```
```
node build/locker accountName
```