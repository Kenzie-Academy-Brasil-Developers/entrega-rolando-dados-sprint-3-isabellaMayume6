//iniciando os dados e o array count
let dado1=0
let dado2=0
let count=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//box de dados e de barras
const segsec = document.getElementById('container')
const primsec = document.getElementById('container1')
function sumOfDices(result){
    let elemento = document.createElement("div")
    let texto = document.createTextNode(result)
    elemento.appendChild(texto)
    primsec.appendChild(elemento)
}
for (let i = 0; i<=1000; i++){
    dado1 = Math.floor(Math.random() * 6 + 1)
    dado2 = Math.floor(Math.random() * 6 + 1)
    let result = (dado1) + (dado2)
    count[result - 2] +=1
}
for(let i =0; i<=10; i++){
    sumOfDices(( (`${i+2} : ${count[i]}`)))

}
    
 for (let i = 0; i<=10; i++){
    let tamanho= count[i]/2
    let elemento= document.createElement('div')
    segsec.appendChild(elemento)
    elemento.style.width = tamanho + '%'
    elemento.style.height = '15px'
    elemento.style.backgroundColor = '#00FFFF'
    elemento.style.marginTop = '8px';
    elemento.style.marginBottom = '8px';
 }