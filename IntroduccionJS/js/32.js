// Async / await 

function descargarNuevosClientes(){
    return new Promise(resolve=>{
        console.log('Descargando clientes... espere...');
        setTimeout(()=>{
            resolve('Los Clientes fueron descargados')
        },5000)
    })
}

function descargarNuevosUltimosPedidos(){
    return new Promise(resolve=>{
        console.log('Descargando pedidos... espere...');
        setTimeout(()=>{
            resolve('Los pedidos fueron descargados')
        },3000)
    })
}

async function app(){
    try {
        // const clientes  = await descargarNuevosClientes()
        // const pedidos = await descargarNuevosUltimosPedidos()
        // console.log(clientes);

        
        const resultado = await Promise.all([descargarNuevosClientes(), descargarNuevosUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app()

console.log('este codigo no se bloquea');