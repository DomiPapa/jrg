import './app2.css'
import $ from 'jquery'
// tab-bar
const $nav = $('.tab-bar')
$nav.on('click','li',(e)=>{
    // console.log(e.target)
    // console.log(e.currentTarget)
    let $clickedLi = $(e.currentTarget)
    $clickedLi.addClass('selected').siblings().removeClass('selected')
    let index = $clickedLi.index()
    let $activeContent = $(`.tab-content li:eq(${index})`)
    $activeContent.addClass('active').siblings().removeClass('active')
})

// 加载js第一个元素被点击
$nav.children().eq(0).trigger('click')
