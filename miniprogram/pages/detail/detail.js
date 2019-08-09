// miniprogram/pages/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1200,
    startTime: '-- --',
    endTime: '-- --'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let info = app.globalData.room[app.globalData.roomNum];
    this.setData({
      price: info.price,
      name: info.roomName,

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
  toOrderForm:function(){
    app.globalData.orderNumber = app.cleadorderNumber();
    wx.navigateTo({
      url: '../orderForm/orderForm',
    })
  },
  bindTimeChangeS: function (e) {
    console.log(e.detail.value)
    app.globalData.startTime = app.getData(1) + e.detail.value
    this.setData({
      startTime: e.detail.value
    })
  },
  bindTimeChangeE: function (e) {
    console.log(e.detail.value)
    app.globalData.endTime = app.getData(1) +  e.detail.value
    this.setData({
      endTime: e.detail.value
    })
  }
  
})