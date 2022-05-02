var dvTempo
var btnStart
var btnPause
var btnReset
var tempo = 0
var id

init()

function init(){
  dvTempo = document.getElementById("tempo")
  
  btnStart = document.getElementById("start")
  btnStart.onclick = start
  
  btnPause = document.getElementById("pause")
  btnPause.disabled = true
  btnPause.onclick = pause

  btnReset = document.getElementById("reset")
  btnReset.disabled = true
  btnReset.onclick = reset
}

function update(){
  tempo = tempo + 0.1
  dvTempo.innerHTML = tempo.toFixed(1) + "s"
}
function start(){
    id = setInterval(update, 100)
    btnStart.disabled = true
    btnPause.disabled = false
    btnReset.disabled = false
}
function pause(){
    btnStart.disabled = false
    btnPause.disabled = true
    clearInterval(id)
}
function reset(){
    btnStart.disabled = false
    btnPause.disabled = true
    btnReset.disabled = true
  
    clearInterval(id)
    tempo = 0
    dvTempo.innerHTML = "0.0s"
}