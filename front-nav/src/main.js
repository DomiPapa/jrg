import $ from 'jquery'
// console.log($)
// console.log($('addButton'))

let data = JSON.parse(localStorage.getItem('netData')) ||
[
    { "url":"https://www.acfun.cn/" , "logo":"A" },
    { "url":"https://www.bilibili.com/" , "logo":"B" }
]

const urlFormatter = url => {
    return url.replace(/https:\/\//g, '')
    .replace(/www\./g, '')
    .replace(/http:\/\//g, '')
    .replace(/\/.*/g, '')
}

const render = data => {
    $('ul.siteList>li:not(.lastLi)').remove()
    data.forEach((el,index) => {
        const $lastLi = $('li.lastLi')
        const $li = $(`<li>
            <div class="site">
                <div class="logo">${el.logo}</div>
                <div class="link">${urlFormatter(el.url)}</div>
                <div class="siteIcon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-a-shanchu1"></use>
                    </svg>
                </div>
            </div>
        </li>`).insertBefore($lastLi)
        $li.on('click',event=>{
            window.open(el.url)
            event.stopPropagation()
        })       
        $li.on('click', '.siteIcon', event=>{
            console.log('删除',index)
            event.stopPropagation()
            data.splice(index,1)
            render(data)
        })
    })
}


render(data)


$('.addButton').on('click',() => {
    let url = window.prompt('请输入要添加网站的网址')
    if(!url){
        return
    }
    if(String.prototype.indexOf.call(url, 'http')!==0) {
        url = `https://${url}`
    }
    data.push({
        "url":url, 
        "logo":urlFormatter(url)[0]
    })
    render(data)
})

window.onbeforeunload  = ()=>{
    window.localStorage.setItem('netData', JSON.stringify(data));
}
