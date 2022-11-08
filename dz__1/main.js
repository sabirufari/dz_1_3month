let phoneInput = document.querySelector('.phoneInput')
let phoneButton = document.querySelector('.button')
let result = document.querySelector('#result')
// let regExp = /\w/g


let regExp = /^\+996\d{3} \d{2}-\d{2}-\d{2}$/ig



// console.log(userName.replace(regExp,'*'))
phoneButton.addEventListener('click',() => {
  if(regExp.test(phoneInput.value)){
    result.innerText = 'Success'
    result.style.color  = 'green'
    alert('success')
    }else {
    result.innerText = 'Failed'
    result.style.color = 'red'
    alert('error')
    }
})

let inpInn = document.querySelector('#Inn')
let CheckInn = document.querySelector('.checkInn')
let checkR = document.querySelector('#CheckResult')


let inn = /^[0-2]\d{13}$/ig

CheckInn.addEventListener('click',() => {
    if(inn.test(inpInn.value)){
    checkR.innerText = 'Success'
    checkR.style.color  = 'green'
    }else {
    checkR.innerText = 'Failed'
    checkR.style.color = 'red'
    alert('error')
}
})