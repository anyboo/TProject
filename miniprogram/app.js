//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'test-x1dzi'
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    
    this.globalData = {
      room:[
        {
          roomName: "使命感",
          price: "108",
          number:1
        },
        {
          roomName: "价值观",
          price: "108",
          number:2
        },
        {
          roomName: "责任心",
          price: "108",
          number:3
        },
        {
          roomName: "凝聚力",
          price: "108",
          number: 4
        }
      ],
      userInfo:null,
      url:null,
      orderList: [],
      orderCardList:[],
      index: null,
      indexCard: null
    }
  },
  openLoading: function () {
    wx.showLoading({
      title: '加载中...',
    })
  },
  closeLoading: function(){
    wx.hideLoading();
  },
  cleadorderNumber:function(){
    var outTradeNo = "";  //订单号
    for (var i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
    {
      outTradeNo += Math.floor(Math.random() * 10);
    }
    outTradeNo = new Date().getTime() + outTradeNo;
    return outTradeNo;
  },
  getData: function getNowFormatDate(type) {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hh = date.getHours();
    var mm = date.getMinutes();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if (mm >= 1 && mm <= 9) {
      mm = "0" + mm;
    }
    var currentdate = ""
    if (type == 0) {
      currentdate = year + "/" + month + "/" + strDate + " ";
    }
    if(type == 1){
      currentdate = year + "年" + month + "月" + strDate + "日";
    }
    if (type == 2) {
      currentdate = year + "年" + month + "月" + strDate + "日" + hh + ":" + mm
    }
    return currentdate;
  }
})
