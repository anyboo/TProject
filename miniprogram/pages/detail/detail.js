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
    array: ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00',
      '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30',
      '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00',
      '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
      '14:00',
      '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
      '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
      '21:30',
      '22:00', '22:30', '23:00', '23:30'
    ],
    price: 0,
    totalDuration: 0,
    index: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let info = app.globalData.room[app.globalData.roomNum];
    let date = new Date();
    let time = ''
    let time2 = ''
    let ts = Math.max(date.getMinutes(), 30)
    let ms, hr, ehr;
    if (ts > 30) {
      ms = '00'
      hr = date.getHours() + 1
      ehr = hr + 1
    } else {
      ms = '30'
      hr = date.getHours()
      ehr = hr + 1
    }

    if (hr < 10) hr = '0'.concat(hr);
    time = ''.concat(hr, ":", ms)
    time2 = ''.concat(ehr, ":", ms)

    console.log(time, time2);
    let arr = this.data.array;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == time) {
        let e = {}
        e.detail = {};
        e.detail.value = i;
        this.bindIndexChangeS(e);
        break;
      }
    }

    this.setData({
      name: info.roomName,
      number: info.number,
      imageSrc: `https://www.teamcs.cn/images/detail-${info.number}.png`
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
    console.log('onShareAppMessage')
  },
  toOrderForm: function() {
    let array = {};
    let info = app.globalData.room[app.globalData.roomNum];
    app.globalData.orderNumber = app.cleadorderNumber();
    array.name = info.roomName;
    array.orderNumber = app.globalData.orderNumber;
    array.creadTime = app.getData(2);
    array.price = this.data.price;
    array.duration = this.data.totalDuration;
    array.startTime = this.data.startTime;
    array.endTime = this.data.endTime;
    app.globalData.orderList.push(array);
    app.globalData.index = app.globalData.orderList.length - 1;

    let userInfo = app.globalData.userInfo;
    if (userInfo == null) {
      app.globalData.url = '../detail/detail'
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      wx.navigateTo({
        url: '../orderForm/orderForm',
      })
    }
  },
  discount: function(st, duration) {
    //23:00 - 10:00 [23-[0-20]
    //12:00 - 14:00 [24-28]
    //17:00 - 19:00 [34-36]
    if (23 == st) return true;
    if (0 <= st && st < 20) return true;
    if (24 <= st && st < 28) return true;
    if (34 <= st && st < 36) return true;
    return false;
  },
  formatTime: function(ts) {
    let _UTCTime = new Date(ts)
    let hours = _UTCTime.getUTCHours().toString()
    let minutes = _UTCTime.getUTCMinutes().toString()
    let str = hours.padStart(2, "0") + ':' + minutes.padStart(2, "0")
    console.log('formatTime', str)
    return str;
  },
  bindIndexChangeS: function(e) {
    console.log(this.data.array[e.detail.value])
    app.globalData.startTime = app.getData(0) + this.data.array[e.detail
        .value] +
      ':00 UTC'
    let startTimeUTC = new Date(app.globalData.startTime)
    let end = startTimeUTC.getTime() + 3600 * 1000
    this.data.totalDuration = 1;
    let info = app.globalData.room[app.globalData.roomNum];
    this.data.price = this.discount(e.detail.value) ? 68 : info.price;
    this.setData({
      startTime: this.data.array[e.detail.value],
      endTime: this.formatTime(end),
      price: this.data.price
    })
  },
  bindIndexChangeE: function(e) {
    console.log(this.data.array[e.detail.value])
    app.globalData.endTime = app.getData(0) + this.data.array[e.detail
        .value] +
      ':00 UTC'
    let start = Date.parse(app.globalData.startTime)
    let end = Date.parse(app.globalData.endTime)

    if (end < start) {
      end += 3600 * 1000 * 24
    }
    console.log(start, end)
    let iDura = (end - start) / 3600 / 1000
    let count = Math.ceil(iDura)
    end = start + count * 3600 * 1000
    this.data.totalDuration = count;
    let info = app.globalData.room[app.globalData.roomNum];
    this.data.price = this.discount(e.detail.value) ? 68 * count :
      info.price *
      count;
    this.setData({
      endTime: this.formatTime(end),
      price: this.data.price
    })
  },
  bindTimeChangeS: function(e) {
    console.log(e.detail.value)
    app.globalData.startTime = app.getData(0) + e.detail.value +
      ':00 UTC'
    console.log(app.globalData.startTime)
    var startTimeUTC = new Date(app.globalData.startTime)
    var end = startTimeUTC.getTime() + 3600 * 1000
    console.log(end)
    var endTimeUTC = new Date(end)
    console.log(endTimeUTC, endTimeUTC.toJSON(), endTimeUTC.getUTCHours(),
      endTimeUTC.getUTCMinutes())

    var strHours = endTimeUTC.getUTCHours().toString()
    var strMins = endTimeUTC.getUTCMinutes().toString()
    var strEnd = strHours.padStart(2, "0") + ':' + strMins.padStart(2,
      "0")

    this.setData({
      startTime: e.detail.value,
      endTime: strEnd
    })
  },
  bindTimeChangeE: function(e) {
    console.log(e.detail.value)
    app.globalData.endTime = app.getData(0) + e.detail.value +
      ':00 UTC'
    console.log(app.globalData.endTime)
    var start = Date.parse(app.globalData.startTime)
    var end = Date.parse(app.globalData.endTime)

    if (end < start) {
      end += 3600 * 1000 * 24
    }
    console.log(start, end)
    var iDura = (end - start) / 3600 / 1000;
    var count = Math.ceil(iDura)
    end = start + count * 3600 * 1000

    var endTimeUTC = new Date(end)
    console.log(endTimeUTC.toJSON(), iDura, count)
    var strHours = endTimeUTC.getUTCHours().toString()
    var strMins = endTimeUTC.getUTCMinutes().toString()
    var strEnd = strHours.padStart(2, "0") + ':' + strMins.padStart(2,
      "0")

    this.setData({
      endTime: strEnd
    })
  }

})
