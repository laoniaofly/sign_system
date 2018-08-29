// const $ = require('../../../../common/zepto');

/**
 * 订单列表签核
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '签收',
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
      amount: 0,
      relAmount: 90,
      backAmount: 10
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({products_copy: [].concat(this.data.products)});
    wx.setNavigationBarTitle({
      title: this.data.title
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
    wx.navigateTo({url: '../refuse/refuse'});
  },

  /**
   * 拒绝签署
   */
  refuseSign: function () {
    wx.navigateTo({url: '../refuse/refuse'});
  },

  /**
   * 跳产品详情
   */
  toDetail: function (event) {
    let item = event.currentTarget.dataset['item'];
    wx.navigateTo({url: '../detail/detail?data='+JSON.stringify(item)});
  },

  /**
   * 输入
   */
  import: function (event) {
    let val = event.detail.value,
      ind = event.currentTarget.dataset['item'];
    this.data.products[ind].amount = Number(val);  //数据格式化
    if(!val.length){
      this.data.products[ind].amount = 0;
      this.setData({
        products: this.data.products
      });
    }else{
      this.setData({
        products: this.data.products
      })
    }
  },

  /**
   * 点击事件
   */
  inputTap: function (event) {},

  /**
   * 增加
   */
  addCount: function (event) {
    let ind = event.currentTarget.dataset['item'];
    this.data.products[ind].amount++;
    this.setData({
      products: this.data.products
    });
  },

  /**
   * 减少
   */
  delCount: function (event) {
    let ind = event.currentTarget.dataset['item'];
    if(this.data.products[ind].amount == 0){
      this.data.products[ind].amount = 0;
    } else {
      (this.data.products[ind].amount)--;
    }
    this.setData({
      products: this.data.products
    });
  },

  /**
   * 确定签收
   */
  sign: function (event) {
    let isAll = true; //记录是否全签
    for (let i = 0; i < this.data.products.length; i++) {
      if(this.data.products[i].amount < this.data.products_copy[i].amount){
        isAll = false;
      }
    }

    if(!k){  //部分签

    }else{ //全签

    }
  }
});