
const turnOnOff = document.getElementById ('turnOnOff');
const lamp = document.getElementById('lamp')

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1
}
function lampOn (){
    if(!isLampBroken ()){
    lamp.src = './img/ligada.jpg'
    }
}


function lampOff(){
    if(!isLampBroken ()){
    lamp.src = './img/desligada.jpg'
    }
}

function lampOnOff(){
    if(turnOnOff.textContent === 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar'
    }
}
turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)

lamp.addEventListener('dblclick', ()=>{
    const botoes = document.getElementById('botoes')
    const botao = document.createElement("button")
    botao.innerText = 'Consertar';
    botoes.appendChild(botao)
    botao.addEventListener('click', ()=>{
      swal ( " Consertando... " );
      lamp.src = './img/desligada.jpg';
        if(lamp.src='./img/desligada.jpg'){
        botoes.removeChild(botao)
    }})
    
})

lamp.addEventListener('dblclick', lampBroken)
function lampBroken(){
    lamp.src = './img/quebrada.jpg'
    swal({
        title: "Você quebrou a lâmpada",
        text: "Tente Conserta-la!",
        icon: "error",
      });
    
}


