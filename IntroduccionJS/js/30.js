// promise

const usuarioAutenticado = new Promise((resolve, reject)=>{
    const auth = false
    if(auth){
        resolve('Usuario autenticado') // El primise se cumple
    }else{
        reject(' no se pudo iniciar sesion') // El promise no se cumple
    }
})

usuarioAutenticado
    .then(resultado =>console.log(resultado))
    .catch(error =>console.log(error))

// en los promises existen 3 valores
// Pending: no se ha cumplido pero tampoco se ha rechazado
// Fullfilled: ya se cumplio
// Reject: se ha rechazado o no se pudo cumplir