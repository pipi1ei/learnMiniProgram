// components/my-mul-slot/my-mul-slot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  observers: {
    title(newVal, oldVal){
      console.log(newVal, oldVal)
    }
  },

  externalClasses: ["titleclass"],
  pageLifetimes: {
    show(){
      console.log("页面显示出来")
    },
    hide(){
      console.log("页面隐藏")
    },
    resize(){
      console.log("尺寸发生改变")
    }
  },

  lifetimes: {
    created(){
      console.log("组件被创建")
    },
    attached(){
      console.log("组件被添加到页面中")
    },
    ready(){
      console.log("组件被渲染出来")
    },
    moved(){
      console.log("组件被移动到节点树另一个位置")
    },
    detached(){
      console.log("组件被移除")
    }
  },

  options: {
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
