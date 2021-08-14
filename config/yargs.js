const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar.'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false,
        describe: 'Muestra la tabla de multiplicar en consola.'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Numero hasta el cual se reproducira la tabla de multiplicar'
    })
    .argv;

module.exports = argv;