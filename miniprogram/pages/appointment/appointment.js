// miniprogram/pages/appointment/appointment.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1200,
    location:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let distance = 1.5
    let duration = 10
    let _location = `工业路360号中央第五街2号楼2832\n距离您${distance}千米，驾车${duration}分钟`
    
    this.setData({
      location: _location
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
  todetail: function (e) {
    app.globalData.roomNum = e.currentTarget.dataset.room;
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})