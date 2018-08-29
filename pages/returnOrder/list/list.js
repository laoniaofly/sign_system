// pages/order/list/list.js

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '退货单',
    tabs: ["全部", "全部签收", "部分签收", "拒签"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    scrollTop: 51,
    orderList: [{
      name: 'ATM取款机1',
      billsNo: 'AM3332454566',
      project: {
        type: 0,
        name: '这是一个很重大的项目'
      },
      receiver: '刘德华',
      phone: '1563234xxx',
      beginDate: '20180203',
      signDate: '20180304'
    },{
      name: 'ATM取款机2',
      billsNo: 'AM3332454567',
      project: {
        type: 0,
        name: '这是一个很重大的项目'
      },
      receiver: '刘德华',
      phone: '1563234xxx',
      beginDate: '20180203',
      signDate: '20180304'
    }],
    scrollHeight: 0
  },

  /**
   * tab切换
   */
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  /**
   * 列表进详情
   */
  toDetail(event){
    let item = event.currentTarget.dataset['item'];
    // console.log(item);
    wx.navigateTo({
      url: '../detail/detail?data='+JSON.stringify(item)
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //设置头部标题
      var that = this;
      wx.setNavigationBarTitle({
          title: that.data.title
      });
      wx.getSystemInfo({
          success: function(res) {
              that.setData({
                  sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                  sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
              });
          }
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
});