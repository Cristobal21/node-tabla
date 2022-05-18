const fs = require('fs')
const color = require('colors')


const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida = ''
        let consola = ''

        for ( let i = 1; i <= hasta; i++ ){
            salida  += `${ base } x ${ i } = ${ base * i }\n`
            consola += `${ base } ${ 'x'.yellow } ${ i } ${ '='.yellow } ${ base * i }\n`
        }

        if ( listar ) {
            console.log(color.yellow('============='))
            console.log('Tabla del: '.green, color.red( base ))
            console.log(color.yellow('============='))
            console.log( color.blue(consola) )
        }
        

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)

        return `tabla-${ base }`;

    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}