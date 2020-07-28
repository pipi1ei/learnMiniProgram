//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    counter: 0
  },
  handAdd(event){
    console.log(event)
    this.setData({
      counter: this.data.counter + 1
    })
  },

  handTabItemClick(e){
    console.log(e.detail)
  },

  handlePageBtnClick(){
    const my_sel = this.selectComponent('#my-sel')
    console.log(my_sel)
    my_sel.add(5)
  }
})
