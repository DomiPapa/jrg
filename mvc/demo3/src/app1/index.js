import './app1.css'
import $ from 'jquery'
import Model from "../base/Model";
import View from "../base/View";


// 数据层
const m = new Model({
    data:{
        num:Number(localStorage.getItem('app1.num')) || 100,
    },
    update(data) {
        Object.assign(m.data,data)
        localStorage.setItem('app1.num', m.data.num.toString())
        m.trigger("update:num")
    }
})
console.dir(m)

const init = el => {
    // 视图层
    return new View({
        el:el,
        html:`
        <div>
            <div class="screen">{{number}}</div>
            <button class="add1">add1</button>
            <button class="minus1">minus1</button>
            <button class="multiply2">multiply2</button>
            <button class="divide2">divide2</button>
        </div>
    `,
        data:m.data,
        render(data){
            const newEl = $(this.html.replace("{{number}}",data.num.toString()))
            if(this.el.length !== 0){
                this.el.empty()
            }
            newEl.appendTo(this.el)
        },
        events:{
            'click .add1':'add',
            'click .minus1':'minus',
            'click .multiply2':'mul',
            'click .divide2':'div'
        },
        methods:{
            add(){
                m.update({num:m.data.num+1})
            },
            minus(){
                m.update({num:m.data.num-1})
            },
            mul(){
                m.update({num:m.data.num*2})
            },
            div(){
                m.update({num:m.data.num/2})
            }
        }
    })
}
export default init
