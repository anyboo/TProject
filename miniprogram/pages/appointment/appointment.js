// miniprogram/pages/appointment/appointment.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');

const app = getApp()
const qqmapsdk = new QQMapWX({
  key: 'OOMBZ-AAXK6-EONSK-E7I64-MRRVH-6AB6O'
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1200,
    location: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    // 中央第五街2号楼 ‘26.092077， 119.333092’
    qqmapsdk.calculateDistance({
      mode: 'driving',
      to: '26.092077,119.333092',
      from: '',
      success: function(res) {
        var res = res.result.elements;
        if (res.length > 0) {
          console.log('qqmapsdk.calculateDistance', res[0].distance,
            res[0]
            .duration)
          let distance = (res[0].distance / 1000).toFixed(2)
          let duration = Math.ceil(res[0].duration / 60)
          var _location =
            `工业路360号中央第五街2号楼2832\n距离您${distance}千米，驾车${duration}分钟`
          _this.setData({
            location: _location
          })
        }
      },
      fail: function(error) {
        console.error(error);
      },
      complete: function(res) {
        console.log(res);
      }
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
  todetail: function(e) {
    app.globalData.roomNum = e.currentTarget.dataset.room;
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})
