const numeros = [4, 21, 36, 8]
const string = [`batata`, `cebola`, `abobora`] 
const misto = [22, true, `edifício`]
const copianumeros = numeros.slice()
const copiastring = string.slice()
const copiamisto = misto.slice()
//1º parte
copianumeros.push(789)
console.log("array original", numeros)
console.log("copia com novo número", copianumeros)
//2º parte
copiastring.pop()
console.log("array original", string)
console.log ("copia com exclusão do último ítem", copiastring)
//3ºparte
copiamisto.splice(1,1)
console.log ("array original", misto)
console.log ("copia com exclusão do segundo ítem", copiamisto)