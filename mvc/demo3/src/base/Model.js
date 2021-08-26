import EventBus from "./EventBus";

class Model extends EventBus{
    constructor(options) {
        super() // 执行父类构造方法
        // data在生成的对象里
        Array.of('data', 'create', 'delete', 'update', 'get').forEach(key => {
            if(key in options){
                this[key] = options[key]
            }
        })
    }

    // 方法在原型里
    create(){
        // 可选链语法 console?.error?.('你还没有实现 create')
        console && console.error && console.error('你还没有实现 create')
    }
    delete(){
        console && console.error && console.error('你还没有实现 delete')
    }
    update(){
        console && console.error && console.error('你还没有实现 update')
    }
    get(){
        console && console.error && console.error('你还没有实现 get')
    }
}

export default Model
