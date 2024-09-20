#!/usr/bin/env node

const yargs = require('yargs');

// Function to generate a random password
function generatePassword(length, useNumbers, useCaps, useSymbols) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = lowercase;
    if (useNumbers) characters += numbers;
    if (useCaps) characters += caps;
    if (useSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Setup command-line arguments using yargs
const argv = yargs
    .option('length', {
        alias: 'l',
        description: 'Specify the length of the password',
        type: 'number',
        default: 8
    })
    .option('numbers', {
        alias: 'n',
        description: 'Include numbers in the password',
        type: 'boolean',
        default: false
    })
    .option('caps', {
        alias: 'c',
        description: 'Include capital letters in the password',
        type: 'boolean',
        default: false
    })
    .option('symbols', {
        alias: 's',
        description: 'Include symbols in the password',
        type: 'boolean',
        default: false
    })
    .help('help')
    .alias('help', 'h')
    .argv;

// Generate password based on provided flags
const password = generatePassword(argv.length, argv.numbers, argv.caps, argv.symbols);
console.log(`Generated password: ${password}`);