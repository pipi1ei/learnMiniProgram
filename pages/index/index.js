//index.js

import request from '../../service/network.js'

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World'
  },
  onLoad: function () {
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success: res => {
    //     console.log(res)
    //   }
    // }) 

    request({
      url: 'http://123.207.32.32:8000/recommend',
    }).then(res => {
      console.log(res.statusCode)
    })
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList: ["相册", "拍照"],
      success: res => {
        console.log(res)
      }
    })
  },
  onShareAppMessage(){
    return {
      title: '你好啊，李银河'
    }
  }
})
