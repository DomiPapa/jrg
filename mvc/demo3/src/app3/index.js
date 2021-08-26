import './app3.css'
import $ from 'jquery'
const $square = $('#square')

let status = localStorage.getItem('app3.hasStatus') === '1'

$square.toggleClass('active',status)

$square.on('click',()=>{
    status = localStorage.getItem('app3.hasStatus') === '1'
    if (status){
        $square.removeClass('active')
        localStorage.setItem('app3.hasStatus','0')
    }else{
        $square.addClass('active')
        localStorage.setItem('app3.hasStatus','1')
    }
})
