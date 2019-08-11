// miniprogram/pages/my/my.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesLogo:'../../images/logo.jpg',
    name:'点击登录个人账户'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo);
    let info = app.globalData.userInfo;
    if(info != null){
      this.setData({
        imagesLogo: info.avatarUrl,
        name: info.nickName
      })
    }
    // this.data.imagesLogo = info.avatarUrl
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
  toMyInfo:function(){
    let info = app.globalData.userInfo;
    if (info == null) {
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      wx.navigateTo({
        url: '../myInfo/myInfo',
      })
    }
  },
  toLogin: function () {
    let info = app.globalData.userInfo;
    if (info == null) {
      wx.redirectTo({
        url: '../login/login',
      })
    }
  },
  toWallet: function () {
    let info = app.globalData.userInfo;
    if (info == null) {
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      wx.navigateTo({
        url: '../wallet/wallet',
      })
    }
  },
  toCard:function(){
    let info = app.globalData.userInfo;
    if (info == null) {
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      wx.navigateTo({
        url: '../card/card',
      })
    }
  },
  tel: function () {
    wx.makePhoneCall({
      phoneNumber: '13500236142',
    })
  },
  toast: function () {
    wx.showToast({
      title: "功能暂未开启。",
      duration: 1500,
      icon: "none",
      mask: false
    });
  }
})