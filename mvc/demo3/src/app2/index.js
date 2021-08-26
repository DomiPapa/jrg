import './app2.css'
import $ from 'jquery'
// tab-bar
const $tabBar = $('.tab-bar')
const $tabContent = $('.tab-content')

let index = localStorage.getItem('app2.index') || 0

const toggle = index => {
    $tabBar.children().removeClass('selected').eq(index).addClass('selected')
    $tabContent.children().removeClass('active').eq(index).addClass('active')
}

toggle(index)

$tabBar.on('click','li',(e)=>{
    let $clickedLi = $(e.currentTarget)
    index = $clickedLi.index()
    toggle(index)
    localStorage.setItem('app2.index',index)
})

// 加载js第一个元素被点击
// $tabBar.children().eq(0).trigger('click')
