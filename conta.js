const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let numContas = 0
let valTotal =m 0
let resposta = ""

frm.addEventListener("submit" , (e) => {
    e.preventDefault()

    const descricao = frm.inDescriacao.value
    const valor = Number(frm.inValor.value)

    numContas++
    valTotal = valTotal + valor

    resposta = resposta + descricao + " - r$:" + valor.toFixed(2) + "/n"

    resp1.innerText = `${resposta}------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}

    frm.inDescricao.value= ""
    frm.inValor.value = ""
    frm.inDescricao.focus()
})
