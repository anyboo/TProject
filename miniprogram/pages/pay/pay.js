// miniprogram/pages/pay/pay.js
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
    console.log(app.globalData.index)
    if (app.globalData.index != null){
      this.setData({
        price: app.globalData.orderList[app.globalData.index].price,
        orderNumber: app.globalData.orderList[app.globalData.index].orderNumber
      })
    }else{
      let info = app.globalData.room[app.globalData.roomNum];
      this.setData({
        price: info.price,
        orderNumber: app.globalData.orderNumber
      })
    }
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
  pay:function(){
    wx.showToast({
      title: "支付失败，请联系管理员。",
      duration: 1500,
      icon:"none",
      mask: false
    });
  }
})