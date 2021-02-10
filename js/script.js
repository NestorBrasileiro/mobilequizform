
/*
  Funcionamento dos botões
*/
const sld = [ document.getElementById('sld-0'), document.getElementById('sld-1'), document.getElementById('sld-2')]
function controls(actualPg, newPg){    
    if(newPg < sld.length){
        sld[newPg].classList.remove('hide');
        sld[actualPg].classList.add('hide');
    }
}


//Questão 1

const alternatives = [document.getElementById('btncheck1'), document.getElementById('btncheck2'), document.getElementById('btncheck3'), document.getElementById('btncheck4')];
function showAnswer(number){
  if(number == 2 || number == 3){
    alternatives[number].classList.remove('btn-outline-primary')
    alternatives[number].classList.add('btn-success')
  }
  else {alternatives[number].classList.remove('btn-outline-primary')
        alternatives[number].classList.add('btn-danger')}
}


//questão 2
const answers = [document.getElementById("inputGroupSelect0"), document.getElementById("inputGroupSelect1")]

function checkAnswer(question){
    if(question == 0 && answers[question].value == 4){
      answers[question].classList.remove('is-invalid')
      answers[question].classList.add('is-valid')
    }else if(question == 1 && answers[question].value == 2){
      answers[question].classList.remove('is-invalid')
      answers[question].classList.add('is-valid')
    }
    else{
      answers[question].classList.add('is-invalid')
    }
  }


//funcionamento do modal dos creditos
function openModal(action){
  let modal = document.getElementById('modal-creditos');
  if ( action == 'show'){
      modal.classList.remove ('hide')
  }else modal.classList.add('hide')
}
