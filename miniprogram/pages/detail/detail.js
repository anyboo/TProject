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
    endTime: '-- --',
    array: ['00:00', '01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00',
    '13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
    index:0
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

  formatTime: function(ts){
    let _UTCTime = new Date(ts)
    let hours = _UTCTime.getUTCHours().toString()
    let minutes = _UTCTime.getUTCMinutes().toString()
    let str = hours.padStart(2, "0") + ':' + minutes.padStart(2, "0")
    console.log('formatTime',str)
    return str;
  },
  bindIndexChangeS: function(e) {
    console.log(this.data.array[e.detail.value])
    app.globalData.startTime = app.getData(0) + this.data.array[e.detail.value] + ':00 UTC'
    let startTimeUTC = new Date(app.globalData.startTime)
    let end = startTimeUTC.getTime() + 3600 * 1000

    this.setData({
      startTime: this.data.array[e.detail.value],
      endTime: this.formatTime(end)
    })
  },
  bindIndexChangeE: function(e){
    console.log(this.data.array[e.detail.value])
    app.globalData.endTime = app.getData(0) + this.data.array[e.detail.value] + ':00 UTC'
    let start = Date.parse(app.globalData.startTime)
    let end = Date.parse(app.globalData.endTime)

    if (end < start) {
      end += 3600 * 1000 * 24
    }
    console.log(start, end)
    let iDura = (end - start) / 3600 / 1000
    let count = Math.ceil(iDura)
    end = start + count * 3600 * 1000

    this.setData({
      endTime: this.formatTime(end)
    })
  },
  bindTimeChangeS: function (e) {
    console.log(e.detail.value)
    app.globalData.startTime = app.getData(0) + e.detail.value +':00 UTC'
    console.log(app.globalData.startTime)
    var startTimeUTC = new Date(app.globalData.startTime)
    var end = startTimeUTC.getTime() + 3600 * 1000
    console.log(end)
    var endTimeUTC = new Date(end)
    console.log(endTimeUTC, endTimeUTC.toJSON(), endTimeUTC.getUTCHours(), endTimeUTC.getUTCMinutes())

    var strHours = endTimeUTC.getUTCHours().toString()
    var strMins = endTimeUTC.getUTCMinutes().toString()
    var strEnd = strHours.padStart(2, "0") + ':' + strMins.padStart(2, "0")

    this.setData({
      startTime: e.detail.value,
      endTime: strEnd
    })
  },
  bindTimeChangeE: function (e) {
    console.log(e.detail.value)
    app.globalData.endTime = app.getData(0) +  e.detail.value + ':00 UTC'
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
    var strHours = endTimeUTC.getUTCHours().toString()
    var strMins = endTimeUTC.getUTCMinutes().toString()
    var strEnd = strHours.padStart(2, "0") + ':' + strMins.padStart(2,"0")

    this.setData({
      endTime: strEnd
    })
  }
  
})