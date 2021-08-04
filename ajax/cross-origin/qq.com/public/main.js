console.log('加载qq.js')
const xhr = new XMLHttpRequest()
xhr.open('GET','./friends.json')
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4){
        if (xhr.status<400 && xhr.status>=200){
            console.log(xhr.response)
        }
    }
}
xhr.send()

