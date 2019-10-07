const passwords = require('./passwords.json')
const copyPaste = require('copy-paste')

const inquiry = process.argv[2]

if (passwords.hasOwnProperty(inquiry)) {
    const username = passwords[inquiry]['username']
    const password = passwords[inquiry]['password']

    console.log(`Your username is ${username}`)
    console.log(`Your password is ${password}`)
    copyPaste.copy(password)
} else if (inquiry === 'all') {
    console.log(passwords)
} else {
    console.log(`There is no account name ${inquiry}`)
}
