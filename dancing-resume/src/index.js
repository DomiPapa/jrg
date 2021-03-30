const container = document.querySelector('.container')
const style = document.querySelector('#style')
let resumeString = `/*你好我是张博。
下面我来打一个太极:
*/
.tj-box{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
.tj-box::before{
    content: '';
    display: block;
    width: 50%;
    height: 50%;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: black;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
.tj-box::after{
    content: '';
    display: block;
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: white;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`
// container.innerHTML = resumeString
let i = 0
let step = () =>{
    console.log(resumeString[i])
    container.innerHTML = resumeString.substring(0,i).replace(/\n/g,'</br>').replace(/\s/g,'&nbsp')
        style.innerHTML = resumeString.substring(0,i)
    window.scrollTo(0,9999 )
    container.scrollTo(0,9999 )
    if(i<resumeString.length){
        i++
        setTimeout(step, 50);
    }
}
step()


//console.log(container)