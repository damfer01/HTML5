function contar() {
   
   let ini = document.getElementById('txt1')
    let passo = document.getElementById('txtp')
   let fim = document.getElementById('txtf')
 let res = document.getElementById('res')

   if(ini.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
    window.alert( "[ERRO] falta dados ")

   }
   else{
      res.innerHTML = 'contando'
     
     let i = Number(ini.value)
     let f = Number(fim.value)
     let p = Number(passo.value)

     if (i < f){
        //contagem crecente
         for(let c = i ; c <= f; c += p ){
            res.innerHTML +=  ` ${c}   \u{1F449} ` //formação unicode no JS !!!!   funcionar so em crasez ` `
    }
 }else {
     //contagem decresente
  for ( let c = i ; c>= f ; c -= p ){
    res.innerHTML += ` ${c} \u{1F449} `
  }
 }   
res.innerHTML += `\u{1F91A}	`
  }  
     
}
