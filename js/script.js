let distanza = parseInt( prompt("km di distanza dalla destinazione"));
console.log(distanza);
let età = parseInt(prompt("inserire età"));
console.log(età);

if (isNaN(distanza)){
    alert ('ricaricare pagina')
} else if (isNaN(età)){
    alert ('ricaricare pagina')
} else {
    console.log('avanza')
}


let costoViaggio = distanza * 0.21
console.log(costoViaggio);

if (età < 18){
    costoViaggio = (costoViaggio - (costoViaggio * 0.2))
    console.log (costoViaggio)
} else if (età > 65){
    costoViaggio = (costoViaggio - (costoViaggio * 0.4))
    console.log (costoViaggio)
} else {
    console.log (costoViaggio)
}

let decimalcosto = costoViaggio.toFixed(2);

if (isNaN(decimalcosto)){
    document.getElementById("price").innerHTML = 'ricarica pagina'
} else {
    document.getElementById("price").innerHTML = (`il costo del tuo viaggio è di ${decimalcosto} euro`)
}


