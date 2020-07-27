// pages/mustache/mustache.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive: false,
    currentTime: new Date().toLocaleString(),
    isShow: true,
    nums: [
      [1,2,3],
      [11,22,33],
      [111,222,333]
    ]
  },

  hanldeSwitchColor(){
    this.setData({
      isActive: !this.data.isActive
    })
  },

  hanldeSwitchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },

  onLoad(){
    setInterval(() => {
      this.setData({
        currentTime: new Date().toLocaleString()
      })
    }, 1000)
  }
})