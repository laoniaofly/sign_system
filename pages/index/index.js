const service = require('../../common/service');

//获取应用实例
const app = getApp()
//index.js
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logoText: '卓宝集团',
    declaration: '为社会奉献不渗透的防水工程，呵护人类诗意安居！',
    title: '身份验证'
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {

    //登录接口测试
    let url = 'auth/token',
      params = {"username": "04435", "password": "111111"};
    service.login(url, params, function(data){
      console.log(data);
    });

    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if(res.code){

        }
      }
    });

    wx.setNavigationBarTitle({
      title: this.data.title
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  login: function(e) {
    wx.switchTab({
      url: '../myIndex/index'
    });
  }
});
