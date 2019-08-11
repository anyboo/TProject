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
  onLoad: function (options) {
    console.log(app.globalData.orderList);
    let info = app.globalData.room[app.globalData.roomNum];
    this.setData({
      price: info.price,
      name: info.roomName,
      startTime: app.globalData.startTime,
      endTime: app.globalData.endTime,
      orderNumber: app.globalData.orderNumber,
      creatData: app.getData(2)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toPay: function () {
    let info = app.globalData.userInfo;
    if (info == null) {
      app.globalData.url = "../orderForm/orderForm"
      wx.redirectTo({
        url: '../login/login',
      })
    }else{
      wx.navigateTo({
        url: '../pay/pay',
      })
    }
    
  }
})