console.log("已经加载主体js --> main.js")

// 读取默认page1数据
const pageController = (()=>{

    let currentPage = 1
    
    const xhrReq = new XMLHttpRequest()

    xhrReq.open('GET', `/page${currentPage}.json`)

    xhrReq.addEventListener('readystatechange', ()=>{
        if(xhrReq.readyState===4){
            console.log('下载完成')
            if(xhrReq.status>=200 && xhrReq.status<300){
                const data = JSON.parse(xhrReq.response)
                const ulElementString = `<ul id="ulContainer">${data.map(item => {
                    return `<li>${item.id}</li>`
                }).join('')}</ul>`
                pageContainer.innerHTML = pageContainer.innerHTML.replace('{{page1}}',ulElementString)

                currentPage++
            }else{
                console.log('加载json失败')
            }
        }
    })

    xhrReq.send()

    // 返回操作分页的api

    return {
        handleGetNextPage(){
            const xhrReq = new XMLHttpRequest()

            xhrReq.open('GET', `/page${currentPage}.json`)
        
            xhrReq.addEventListener('readystatechange', ()=>{
                if(xhrReq.readyState===4){
                    console.log('下载完成')
                    if(xhrReq.status>=200 && xhrReq.status<300){
                        const data = JSON.parse(xhrReq.response)
                        let fragment = document.createDocumentFragment();

                        data.forEach(item => {
                            let li = document.createElement('li')
                            li.textContent = item.id
                            fragment.appendChild(li)
                        });

                        ulContainer.appendChild(fragment)

                        currentPage++

                    }else{
                        console.log('加载json失败')
                    }
                }
            })
        
            xhrReq.send()

        }
    }

})()


const handleGetNextPage = () => {
    const xhrReq = new XMLHttpRequest()

    xhrReq.open('GET', '/style2.css')

    xhrReq.addEventListener('readystatechange', ()=>{
        if(xhrReq.readyState===4){
            console.log('下载完成')
            if(xhrReq.status>=200 && xhrReq.status<300){
                const styleElement = document.createElement('style')
                styleElement.innerHTML = xhrReq.response
                document.head.appendChild(styleElement)  
            }else{
                console.log('加载css失败')
            }
        }
    })

    xhrReq.send()
}

const handleAddStyle = () => {
    const xhrReq = new XMLHttpRequest()

    xhrReq.open('GET', '/style2.css')

    xhrReq.addEventListener('readystatechange', ()=>{
        if(xhrReq.readyState===4){
            console.log('下载完成')
            if(xhrReq.status>=200 && xhrReq.status<300){
                const styleElement = document.createElement('style')
                styleElement.innerHTML = xhrReq.response
                document.head.appendChild(styleElement)  
            }else{
                console.log('加载css失败')
            }
        }
    })

    xhrReq.send()
}

const handleAddJs = () => {
    const xhrReq = new XMLHttpRequest()

    xhrReq.open('GET', '/2.js')

    xhrReq.addEventListener('readystatechange', ()=>{
        if(xhrReq.readyState===4){
            console.log('下载完成')
            if(xhrReq.status>=200 && xhrReq.status<300){
                const jsElement = document.createElement('script')
                jsElement.innerHTML = xhrReq.response
                document.body.appendChild(jsElement) 
            }else{
                console.log('加载js失败')
            }
        }
    })

    xhrReq.send()
}

const handleAddHtml = () => {
    const xhrReq = new XMLHttpRequest()

    xhrReq.open('GET', '/3.html')

    xhrReq.addEventListener('readystatechange', ()=>{
        if(xhrReq.readyState===4){
            console.log('下载完成')
            if(xhrReq.status>=200 && xhrReq.status<300){
                const htmlElement = document.createElement('div')
                htmlElement.innerHTML = xhrReq.response
                document.body.appendChild(htmlElement)
            }else{
                console.log('加载html失败')
            }
        }
    })

    xhrReq.send()
}

const handleAddXml = () => {
    const xhrReq = new XMLHttpRequest()

    xhrReq.open('GET', '/4.xml')

    xhrReq.addEventListener('readystatechange', ()=>{
        if(xhrReq.readyState===4){
            console.log('下载完成')
            if(xhrReq.status>=200 && xhrReq.status<300){
                const dom = xhrReq.responseXML
                const name = dom.getElementsByTagName('name')[0].textContent.trim()
                console.log(name)
            }else{
                console.log('加载xml失败')
            }
        }
    })

    xhrReq.send()
}

const handleAddJSON = () => {
    const xhrReq = new XMLHttpRequest()

    xhrReq.open('GET', '/5.json')

    xhrReq.addEventListener('readystatechange', ()=>{
        if(xhrReq.readyState===4){
            console.log('下载完成')
            if(xhrReq.status>=200 && xhrReq.status<300){
                const data = JSON.parse(xhrReq.response)
                clientName.textContent = data.name
            }else{
                console.log('加载json失败')
            }
        }
    })

    xhrReq.send()
}

addStyleBtn.addEventListener('click', handleAddStyle)
addJsBtn.addEventListener('click', handleAddJs)
addHtmlBtn.addEventListener('click', handleAddHtml)
addXMLBtn.addEventListener('click', handleAddXml)
addJSONBtn.addEventListener('click', handleAddJSON)
getNextPage.addEventListener('click', pageController.handleGetNextPage)