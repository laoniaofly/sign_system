// pages/order/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '退货单详情页',
    product_types: 3,
    icon20: '../../../assets/images/order/cp-01.png',
    img_arr: [{
      icon: '../../../assets/images/order/cp-01.png'
    },{
      icon: '../../../assets/images/order/cp-01.png'
    },{
      icon: '../../../assets/images/order/cp-01.png'
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

    this.setData({
      detail_data: JSON.parse(options.data)
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
  
  }
})