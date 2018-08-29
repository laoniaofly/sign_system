const domain = require('base-config');

let urlTransfer = url => {
   return domain.getDomainName() + url;
},

/**
 * 登录接口
 * @param url
 * @returns {*}
 */
login = (url, params, callback) => {
  wx.request({
    url: urlTransfer(url),
    method: 'POST',
    data: params,
    header: {
      'Content-Type': 'application/json'
    },
    success: (data) => {
      callback(data);
    },
    fail: (error) => {

    },
    complete: () => {

    }
  });
},
/**
 * get请求封装
 * @param {string} url     请求路径
 * @param hasProxy         为空时有代理2p
 * @returns {Promise<any>}
 */
submitGet = (url, callback) => {
  wx.request({
    url: urlTransfer(url),
    method: 'GET',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    success: (data) => {
      callback(data);
    },
    fail: (error) => {

    },
    complete: () => {

    }
  });
},

/**
 * get请求封装(用于搜索)
 * @param {string} url     请求路径
 * @param hasProxy         为空时有代理2p
 * @returns {Promise<any>}
 */
submitGetQuery = (url, params, callback) => {
  if (params != undefined && params != null) {
    if (typeof(params) == 'string') {
      params = params.replace(/%/g, '%25');
    }else if(typeof (params) == 'object'){
      var dataJSON = JSON.stringify(params);
      params = JSON.parse(dataJSON.replace(/%/g, '%25'));
    }
  }
  wx.request({
    url: urlTransfer(url),
    method: 'GET',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: params,
    success: (data) => {
      callback(data);
    },
    fail: (error) => {

    },
    complete: () => {

    }
  });
},

/**
 * post请求封装
 * @param {string} urlString 请求路径
 * @param params             请求参数
 * @param hasProxy           为空时有代理2p
 * @returns {Promise<any>}
 */
submitPost = (url, params, callback) => {
  //处理提交数据中存在%问题
  if (params != undefined && params != null) {
    if (typeof(params) == 'string') {
      params = params.replace(/%/g, '%25');
    }else if (typeof (params) == 'object') {
      var dataJSON = JSON.stringify(params);
      params = JSON.parse(dataJSON.replace(/%/g, '%25'));
    }
  }

  wx.request({
    url: urlTransfer(url),
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: param,
    success: (data) => {
      callback(data);
    },
    fail: (error) => {

    },
    complete: () => {

    }
  });
},

/**
 * post请求封装(参数数量动态变化)
 * @param {string} urlString 请求路径
 * @param body               请求参数
 * @param hasProxy           为空时有代理2p
 * @returns {Promise<any>}
 */
submitPostMulti = (url, params, callback) => {
//处理提交数据中存在%问题
  if (params != undefined) {
    if (typeof(params) == 'string') {
      params = params.replace(/%/g, '%25');
    }
    if (typeof (params) == 'object') {
      var dataJSON = JSON.stringify(params);
      params = JSON.parse(dataJSON.replace(/%/g, '%25'));
    }
  }

  wx.request({
    url: urlTransfer(url),
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    data: params,
    success: (data) => {
      callback(data);
    },
    fail: (error) => {

    },
    complete: () => {

    }
  });
},

/**
 * put修改数据
 * @param {string} urlString 请求路径
 * @param params             请求参数
 * @param hasProxy           为空时有代理2p
 * @returns {Promise<any>}
 */
submitPut = (url, params, callback) => {
  //处理提交数据中存在%问题
  if (params != undefined) {
    if (typeof(params) == 'string') {
      params = params.replace(/%/g, '%25');
    }
    if (typeof (params) == 'object') {
      var dataJSON = JSON.stringify(params);
      params = JSON.parse(dataJSON.replace(/%/g, '%25'));
    }
  }

  wx.request({
    url: urlTransfer(url),
    method: 'PUT',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: params,
    success: (data) => {
      callback(data);
    },
    fail: (error) => {

    },
    complete: () => {

    }
  });
},

/**
 * put修改数据(参数数量动态变化)
 * @param {string} urlString 请求路径
 * @param body               请求参数
 * @param hasProxy           为空时有代理2p
 * @returns {Promise<any>}
 */
submitPutMulti = (url, params, callback) => {
  //处理提交数据中存在%问题
  if (params != undefined) {
    if (typeof(params) == 'string') {
      params = params.replace(/%/g, '%25');
    }
    if (typeof (params) == 'object') {
      var dataJSON = JSON.stringify(params);
      params = JSON.parse(dataJSON.replace(/%/g, '%25'));
    }
  }
  wx.request({
    url: urlTransfer(url),
    method: 'PUT',
    header: {
      'Content-Type': 'application/json'
    },
    data: params,
    success: (data) => {
      callback(data);
    },
    fail: (error) => {

    },
    complete: () => {

    }
  });
},

/**
 * Delete提交数据
 * @param urlString         请求路径
 * @param data              请求参数
 * @param hasProxy          为空时有代理2p
 * @returns {Promise<any>}  返回结果
 */
submitDelete = (url, callback) => {
  wx.request({
    url: urlTransfer(url),
    method: 'DELETE',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    success: (data) => {
      callback(data);
    },
    fail: (error) => {

    },
    complete: () => {

    }
  });
};

/**
 * http请求接口封装
 * @type {{submitGet: submitGet, submitGetQuery: submitGetQuery, submitPost: submitPost, submitPostMulti: submitPostMulti, submitPut: submitPut, submitPutMulti: submitPostMulti, submitDelete: submitDelete}}
 */
module.exports = {
  login: login,
  submitGet: submitGet,
  submitGetQuery: submitGetQuery,
  submitPost: submitPost,
  submitPostMulti: submitPostMulti,
  submitPut: submitPut,
  submitPutMulti: submitPostMulti,
  submitDelete: submitDelete
};