#!/usr/bin/env node

import passwords from './passwords.json'
import copyPaste from 'copy-paste'
import dotenv from 'dotenv'
import SimpleCrypto from "simple-crypto-js"

dotenv.config();

const _secretKey = process.env.KEY
 
const simpleCrypto = new SimpleCrypto(_secretKey);

const inquiry = process.argv[2]

if (passwords.hasOwnProperty(inquiry)) {
    const username = passwords[inquiry]['username']
    const password = simpleCrypto.decrypt(passwords[inquiry]['password'])

    console.log(`Your username is ${username}`)
    console.log(`Your password is ${password}`)
    copyPaste.copy(password)
} else if (inquiry === 'all') {
    console.log(passwords)
} else {
    console.log(`There is no account name ${inquiry}`)
}
