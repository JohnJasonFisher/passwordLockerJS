#!/usr/bin/env node

import passwords from 'passwords.json'
import copyPaste from 'copy-paste'

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
