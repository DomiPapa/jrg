import './app1.css'
import $ from  'jquery'

const $btn1 = $('.add1')
const $btn2 = $('.minus1')
const $btn3 = $('.multiply2')
const $btn4 = $('.divide2')
const $screen = $('.screen')
let number = localStorage.getItem('num') || 100
$screen.text(number)

$btn1.on('click', ()=>{
    number ++
    $screen.text(number)
    localStorage.setItem('num',number)
})

$btn2.on('click', ()=>{
    number --
    $screen.text(number)
    localStorage.setItem('num',number)
})

$btn3.on('click', ()=>{
    number *=2
    $screen.text(number)
    localStorage.setItem('num',number)
})

$btn4.on('click', ()=>{
    number /=2
    $screen.text(number)
    localStorage.setItem('num',number)
})
