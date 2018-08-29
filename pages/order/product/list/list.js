// pages/order/product/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '产品列表',
    icon20: '../../../../assets/images/order/cp-01.png',
    products: [{
      icon20: '../../../../assets/images/order/cp-01.png',
      name: '长丝无妨111',
      amount: 600,
      relAmount: 400,
      backAmount: 200
    },{
      icon20: '../../../../assets/images/order/cp-01.png',
      name: '长丝无妨222',
      amount: 100,
      relAmount: 90,
      backAmount: 10
    },{
      icon20: '../../../../assets/images/order/cp-01.png',
      name: '长丝无妨333',
      amount: 100,
      relAmount: 90,
      backAmount: 10
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.title
    });
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

  /**
   * 签署
   */
  sign: function () {
    wx.navigateTo({
      url: '../sign/sign'
    });
  },

  /**
   * 拒绝签署
   */
  refuseSign: function () {
    wx.navigateTo({
      url: '../refuse/refuse'
    });
  },

  /**
   * 跳产品详情
   */
  toDetail: function (event) {
    let item = event.currentTarget.dataset['item'];
    wx.navigateTo({
      url: '../detail/detail?data='+JSON.stringify(item)
    });
  }
});