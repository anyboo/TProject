// miniprogram/pages/orderList/orderList.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["全部", "待付款", "已预约"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    orderList:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    this.setData({
      orderList : app.globalData.orderList
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
    this.setData({
      orderList: app.globalData.orderList
    })
    app.globalData.index = null;
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
  tabClick: function (e) {
    console.log(e);
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  toast: function () {
    wx.showToast({
      title: "功能暂未开启。",
      duration: 1500,
      icon: "none",
      mask: false
    });
  },
  topay:function(e){
    app.globalData.index = e.currentTarget.dataset.index;
    let info = app.globalData.userInfo;
    if (info == null) {
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