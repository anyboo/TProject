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
    let array = {};
    let info = app.globalData.room[app.globalData.roomNum];
    app.globalData.orderNumber = app.cleadorderNumber();
    array.name = info.roomName;
    array.orderNumber = app.globalData.orderNumber;
    array.creadTime = app.getData(2);
    array.price = info.price;
    app.globalData.orderList.push(array);
    wx.navigateTo({
      url: '../orderForm/orderForm',
    })
  },
  bindTimeChangeS: function (e) {
    console.log(e.detail.value)
    app.globalData.startTime = app.getData(0) + e.detail.value +' UTC'
    console.log(app.globalData.startTime)
    var end = Date.parse(app.globalData.startTime) + 3600 * 1000
    var endTimeUTC = new Date(end)
    console.log(endTimeUTC.toJSON(), endTimeUTC.getUTCHours(), endTimeUTC.getUTCMinutes());
    this.setData({
      startTime: e.detail.value,
      endTime: endTimeUTC.getUTCHours().toString().padStart(2, '0') + ':' + endTimeUTC.getUTCMinutes().toString().padStart(2, '0')
    })
  },
  bindTimeChangeE: function (e) {
    console.log(e.detail.value)
    app.globalData.endTime = app.getData(0) +  e.detail.value + ' UTC'
    console.log(app.globalData.endTime)
    var start = Date.parse(app.globalData.startTime)
    var end = Date.parse(app.globalData.endTime)
    
    if(end < start){
      end += 3600 * 1000 * 24
    }
    console.log(start, end)
    var iDura =  (end - start) / 3600 / 1000;
    var count = Math.ceil(iDura)
    end = start + count * 3600 * 1000

    var endTimeUTC = new Date(end)
    console.log(endTimeUTC.toJSON(), iDura, count)
    
    this.setData({
      endTime: endTimeUTC.getUTCHours().toString().padStart(2, '0') + ':' + endTimeUTC.getUTCMinutes().toString().padStart(2,'0')
    })
  }
  
})