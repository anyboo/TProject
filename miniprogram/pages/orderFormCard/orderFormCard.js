// miniprogram/pages/orderForm/orderForm.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a_name:"",
    b_name:"",
    a_count : 0,
    b_count : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.orderCardList);
    let last = app.globalData.indexCard;
    let info = app.globalData.orderCardList[last];
    this.setData({
      price: info.car,
      name: app.globalData.orderList[last].name,
      duration: app.globalData.orderList[last].duration,
      orderNumber: app.globalData.orderList[last].orderNumber,
      creatData: app.globalData.orderList[last].creadTime
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
    //下单处理
    let info = app.globalData.userInfo;
    if (info == null) {
      app.globalData.url = "../orderFormCard/orderFormCard"
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