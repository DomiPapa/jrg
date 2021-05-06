window.dom = {
    // 增
    create(string) {
        // 创建节点 
        let template = document.createElement('template')
            // 去除文本
        template.innerHTML = string.trim()
            // template 中的元素需要通过content属性获取
        return template.content.firstChild
    },
    after(node, node2) {
        // 新增弟弟
        node.parentNode.insertBefore(node2,node.nextSibling)
    },
    before(node, node2) {
        // 新增哥哥
        node.parentNode.insertBefore(node2,node)
    },
    append(parent, child) {
        // 新增儿子
        parent.appendChild(child)
    },
    wrap(node, string) {
        // 新增爸爸
        let parent = this.create(string)
        this.before(parent,node)
        this.append(parent,node)
    },
    // 删
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        const list = []
        let  x  = node.firstChild
        while(x) {
            list.push(this.remove(x))
            x = node.firstChild
        }
        return list
    },
    // 改 
    attr(node, name, value) {
        // 修改节点属性
        if (arguments.length === 3) {
            // 改属性
            node.setAttribute(name ,value)
        } else if(arguments.length === 2) {
            // 查属性
            return node.getAttribute(name)
        }
    },
    text(node, string) {
        if (arguments.length === 2) {
            // 设置内容
            if('innerText' in node){
                // 适配ie
                node.innerText = string 
            }else{
                // 其他浏览器
                node.textContent = string 
            }

        } else if(arguments.length === 1) {
            if('innerText' in node){
                // 适配ie
                return node.innerText 
            }else{
                // 其他浏览器
                return node.textContent 
            }
        } 
    },
    html(node, string) {
        if (arguments.length === 2) {
            // 设置内容     
            node.innerHTML = string 
        } else if(arguments.length === 1) {
            // 查找内容
            return node.innerHTML  
        } 
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // 读
                return node.style[name]
            } else if(name instanceof Object) {
                const object = name
                for (const key in object) {
                    if (Object.hasOwnProperty.call(object, key)) {
                        node.style[key] = object[key]
                    }
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    // 查
    find(selector, scope) {
        return (scope ||　document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children).filter( n => 
            n !== node )
    },
    next(node) {
        let x = node.nextSibling
        while(x && x.nodeType === 3){
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while(x && x.nodeType === 3){
            x = x.previousSibling
        }
        return x
    },
    each(nodes, fn) {
        Array.from(nodes).forEach(element => {
            fn.call(null, element)
        })
    },
    index(node) {
        const list = node.parentNode.children
        for (let i = 0; i < list.length; i++) {
            if (node === list[i]) {
                return i           
            }   
        }
        return -1
    }
}