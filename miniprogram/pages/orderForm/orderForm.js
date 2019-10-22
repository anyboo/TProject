// miniprogram/pages/orderForm/orderForm.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.globalData.orderList);
    let last = app.globalData.index;

    let info = app.globalData.room[app.globalData.roomNum];
    let order = {}
    order.room = last
    order.price = app.globalData.orderList[last].price
    order.name = app.globalData.orderList[last].name
    order.duration = app.globalData.orderList[last].duration
    order.orderNumber = app.globalData.orderList[last].orderNumber
    order.creatData = app.globalData.orderList[last].creadTime
    order.startTime = app.globalData.orderList[last].startTime
    order.endTime = app.globalData.orderList[last].endTime

    wx.request({
      method: 'POST',
      url: 'https://www.teamcs.cn/bookroom',
      data: {
        code: app.globalData.code,
        orderID: order.orderNumber,
        roomID: order.room,
        duration: order.duration,
        startTime: order.startTime,
        endTime: order.endTime
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        
      }
    })
    this.setData({
      price: order.price,
      name: order.name,
      duration: order.duration,
      orderNumber: order.orderNumber,
      startTime: order.startTime,
      endTime: order.endTime
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  toPay: function() {
    //下单处理 bookroom
    let info = app.globalData.userInfo;
    if (info == null) {
      app.globalData.url = "../orderForm/orderForm"
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      wx.navigateTo({
        url: '../pay/pay',
      })
    }
  }
})
