#!/usr/bin/env node

const passwords = require('./passwords.json')
const copyPaste = require('copy-paste')

const inquiry = process.argv[2]

if (passwords.hasOwnProperty(inquiry)) {
    console.log(`Your username is ${passwords[inquiry]['username']}`)
    console.log(`Your password is ${passwords[inquiry]['password']}`)
    copyPaste.copy(passwords[inquiry]['password'])
} else if (inquiry === 'all') {
    console.log(passwords)
} else {
    console.log(`There is no account name ${inquiry}`)
}
