import $ from "jquery";
import EventBus from "./EventBus";

class View extends EventBus{
    constructor(options) {
        super()
        Object.assign(this, options)
        this.el = $(this.el)
        this.render(this.data)
        this.autoBindEvents()
        this.on('update:num',()=>{
            this.render(this.data)
        })
    }

    autoBindEvents(){
        // 根据哈希表绑定事件
        for (const key in this.events) {
            const keyArr = key.split(' ')
            const eventName = keyArr[0]
            const cssSelector = keyArr[1]
            this.el.on(eventName, cssSelector, this.methods[this.events[key]])
        }
    }
}
export default View
