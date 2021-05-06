const div1 = dom.create(`<div>第一个div</div>`)
const div2 = dom.create(`<div>第二个div</div>`)
const div22 = dom.create(`<div>第二二个div</div>`)
const div23 = dom.create(`<div>第二三个div</div>`)
dom.after(tag, div1)
dom.before(tag, div2)
dom.append(div2, div22)
dom.append(div2, div23)
dom.wrap(tag, `<template></template>`)

console.log(dom.empty(empty))

dom.attr(div2, 'title', '我是老二')
console.log(`title: ${dom.attr(div2, 'title')}`)
dom.text(test,'这是设置的test内容')
dom.style(test, {color:'red',border:'1px solid red'})
dom.style(test, 'border')
dom.style(div2, 'border', '2px solid blue')
dom.class.add(test2, 'aqua')
dom.class.add(test2, 'burlywood')
dom.class.add(div22, 'burlywood')
dom.class.remove(test2, 'burlywood')
console.log(dom.class.has(test2, 'aqua'))

const fn = () => {
    console.log('点击了')
}

dom.on(test2,'click', fn)
dom.off(test2, 'click', fn)

console.log(dom.find('.burlywood',div2)[0])
console.log(dom.parent(div22))
console.log(dom.children(siblings))
console.log(dom.siblings(s2)) 
console.log(dom.next(s2)) 
console.log(dom.previous(s2)) 
dom.each(siblings.children, n=>{
    dom.style(n, {border:'1px solid grey'})
}) 
console.log(dom.index(s2))

console.log(document.body)
