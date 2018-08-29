// pages/order/list/list.js
const util = require('../../../common/util');

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

/**
 * 查询tab页数据
 */
function queryType(url){
  wx.request({
    url: url
  });
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '订单',
    tabs: ["全部", "全部签收", "部分签收", "拒签"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    scrollTop: 0,
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
    },{
      name: 'ATM取款机3',
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
    scrollHeight: 0,
    isloading: false
  },

  /**
   * tab切换
   */
  tabClick: function (e) {
    let ind = e.currentTarget.dataset['item'],
        url = '';
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    switch(ind){
      case 0:
        url = '';
        break;
      case 1:
        url = '';
        break;
      case 2:
        url = '';
        break;
      case 3:
        url = '';
        break;
    }
    queryType(url);
  },

  /**
   * 列表进详情
   */
  toDetail(event){
    let item = event.currentTarget.dataset['item'];
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
                  scrollHeight:res.windowHeight
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
  
  },

  /**
   * 上拉加载
   */
  loading: function () {

    // wx.showLoading({
    //   title: '正在加载...',
    //   mask: true
    // });

    // wx.showModal({
    //   content: '请检查您的货物型号，数量是否正确，签收完成后不可更改。',
    //   showCancel: true,
    //   cancelText: '我再想想',
    //   cancelColor: '#000',
    //   confirmText: '全部签收',
    //   confirmColor: '#4B74F4',
    //   success: '',
    //   fail: '',
    //   complete: ''
    // });

    this.data.orderList.push(
      {
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
      }
    );

    this.setData({
      orderList: this.data.orderList
    });
  },

  /**
   * 下拉刷新
   */
  doRefresh: function () {
    this.setData({
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
      }],
      scrollTop: 0
    });
  }
});