//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: 'pipi1ei',
    counter: 0,
    students: [
      {
        id: 110,
        name: 'pipilei',
        age: 20
      }, {
        id: 111,
        name: 'zs',
        age: 23
      }, {
        id: 112,
        name: 'ls',
        age: 50
      }, {
        id: 113,
        name: 'ww',
        age: 18
      },
    ]
  },

  clickBtn(){
    // 下面方式错误，页面不会响应式变化
    // this.data.counter++

    // 使用这种方式渲染页面
    this.setData({
      counter: this.data.counter+1
    })
  }
})
