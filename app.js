const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors')



console.clear()

console.log(argv)


crearArchivo( argv.b, argv.l, argv.h )
    .then( archivo => console.log(archivo.bgBrightYellow, 'creado') )
    .catch( err => console.log(err))