// components/tab-bar/tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handTabItemClick(e){
      var index = e.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })

      this.triggerEvent("handTabItemClick", {index, title: this.properties.titles[index]}, {})
    }
  }
})
