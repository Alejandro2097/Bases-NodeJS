const fs = require('fs');
const { argv } = require('process');
const crearArchivo = async(base = 5, listar= false) =>{
    try{
        console.clear();
        if(listar){
            console.log("===================")
            console.log(`Tabla del: ${ base }`)
            console.log("===================")
        }
        let salida = '';
        for (let i = 0; i <= 10; i++){
            salida += `${base} X ${i} = ${base*i}\n`;   
        }
        if(listar){
            console.log(salida);
        }
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return(`tabla ${ base }.txt creada`);

    }catch(err){
        throw err; 
    }
}
module.exports = {
   crearArchivo
}