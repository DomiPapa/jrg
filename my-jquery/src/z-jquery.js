window.$ = window.jQuery = function(selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if(selectorOrArray instanceof Array) {
        elements = selectorOrArray 
    }
    return Object.assign(Object.create(jQuery.prototype),{
        oldApi:selectorOrArray.oldApi,
        elements
    })
}
jQuery.prototype = {
    constructor: jQuery,
    print(){
        console.log(this.elements)
    },
    find(selector) {
        let res = []
        this.elements.forEach(e => {
            const parts = Array.from(e.querySelectorAll(selector))
            // console.log(parts)
            res = res.concat(parts)
        })
        // 把旧的api存入变量res中，便于返回结果
        res.oldApi = this
        // 返回一个由jQuery重载得到的新api
        return jQuery(res)
    },
    each(fn) {
        this.elements.forEach( (e, index) => {
            fn.call(null, e, index)
        })
        return this
    },
    parent() {
        let resArr = []
        this.each( node => {
            if(resArr.indexOf(node.parentNode)===-1){
                resArr.push(node.parentNode)
            }
        })
        return jQuery(resArr)
    },
    children() {
        let resArr = []
        this.each( node => {
            if(node.children){
                resArr.push(...node.children)
            }
        })
        return jQuery(resArr)
    },
    siblings() {
        let resArr = []
        this.each( node => {
            node.parentNode.children.forEach( child => {
                if(child !== node && resArr.indexOf(child) === -1){
                    resArr.push(child)  
                }
            })  
        })
        return jQuery(resArr)
    },
    end() {
        return this.oldApi   
    },
    index() {},
    next() {},
    prev() {},
    appendTo() {},
    remove() {},
    empty() {},
    addClass(className) {
        this.elements.forEach(e => {
            e.classList.add(className)
        })
        return this
    },
    text() {},
    html() {},
    attr() {},
    css() {},
    on() {},
    off() {}
}