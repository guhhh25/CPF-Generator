import GeraCPF from './modules/geraCPF'
import botaoCPF from './modules/botaoCPF'

import './assets/css/style.css';


(function(){
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.geraNovoCpf()
})()