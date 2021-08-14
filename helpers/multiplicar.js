const fs = require('fs');
const { argv } = require('process');
const colors = require('colors');
const crearArchivo = async(base = 5, listar= false, hasta= 10) =>{
    try{
        console.clear();
        if(listar){
            console.log(colors.green("==================="))
            console.log(colors.red(`Tabla del: ${ base }`))
            console.log(colors.green("==================="))
        }
        let salida, consola = '';
        for (let i = 0; i <= hasta; i++){
            consola += `${base} ${ 'X'.red} ${i} ${'='.red} ${base*i}\n`;   
            salida += `${base} X ${i} = ${base*i}\n`;  
        }
        if(listar){
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return(`tabla ${ base }.txt creada`);

    }catch(err){
        throw err; 
    }
}
module.exports = {
   crearArchivo
}