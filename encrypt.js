import passwords from 'passwords.json'
import fs from 'fs'
import SimpleCrypto from 'simple-crypto-js'

const key = SimpleCrypto.generateRandom()
console.log(`This is your new encrption key:
${key}`)
const simpleCryptoObj = new SimpleCrypto(key)

for (let props in passwords) {
    passwords[props].password = simpleCryptoObj.encrypt(passwords[props].password)
}

const newPasswords = JSON.stringify(passwords, null, '\t')

fs.writeFileSync("passwords.json", newPasswords)