console.log("bob is coming")
// CORS方法获取数据
const xhr = new XMLHttpRequest()
xhr.open('GET','http://localhost:8888/friends.json')
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4){
        if (xhr.status<400 && xhr.status>=200){
            console.log(xhr.response)
        }
    }
}
xhr.send()

// JSONP方法获取数据

const JSONP = url => {
    return new Promise((resolve, reject) => {
        let callbackName =`getJsonpData${Math.random()}`
        window[callbackName] = data => {
            resolve(data)
        }
        const scriptElement = document.createElement('script')
        scriptElement.src = `${url}?callback=${callbackName}`
        document.body.append(scriptElement)
        scriptElement.onload = ()=>{
            scriptElement.remove()
        }
        scriptElement.onerror = () => {
            reject('加载失败')
        }
    })
}

JSONP('http://localhost:8888/friends.js').then(res => {
    console.log(res)
})
