import ValidaCPF from "./validaCPF";
import GeraCPF from "./geraCPF";



const botao = document.querySelector('.myButton')

    botao.addEventListener('click', function(){
        const gera = new GeraCPF()
        const cpfGerado = document.querySelector('.cpf-gerado')
        cpfGerado.innerHTML = gera.geraNovoCpf()
    })
        
    

console.log(botao)