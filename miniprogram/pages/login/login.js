// miniprogram/pages/login/login.js
const app = getApp() 
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
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          console.log(res);
          app.globalData.code = res.code
        } else {
          wx.showToast({
            title: '登录失败！' + res.errMsg,
          })
        }
      }
    })
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
  // 获取用户信息
  getUserInfo: function (e) {
    console.log(e)
    app.openLoading();
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    this.gotoBtnView()
  },
  gotoBtnView: function () {
    app.closeLoading();
    if (app.globalData.url != null){
      if (app.globalData.url == '../detail/detail'){
        wx.redirectTo({
          url: app.globalData.url
        })
      }
      else{
        wx.switchTab({
          url: app.globalData.url
        })
      }
    } else {
      wx.switchTab({
        url: '../index/index'
      })
    }
    
  },
})