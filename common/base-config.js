
// 是否为调试模式， 调试模式：true;  正式环境：false
let isDebug = true,
  // 代理设置
  isProxy = true,
  // 域名
  domain =  '',
  // api设置
  api = '',
  // node代理前缀
  proxy_prefix = '',
  // 基础url设置
  baseUrl = '',
  baseCrmUrl = '',
  // 请求码
  unLoginCode = 401,
  successCode = 200,
  // 初始化函数
  getDomainName = () => {
    if (isDebug) {
      if (isProxy) {
        api = 'ndApi/';
        proxy_prefix = '2p/';
        // domain = "http://58.251.73.130:2027/";         // 外网环境  测试的数据库
        // domain ="http://172.16.100.48:7777/"        // 蔡俊焕
        // domain = "http://localhost:7777/"
        domain="http://172.16.30.188/";             //  测试环境
        baseCrmUrl = "http://172.16.30.188/";           // CRM测试环境（加载图片）
        // domain = "http://172.16.100.48:7777/";      // node蔡俊焕环境
        // baseCrmUrl = "http://172.16.100.48:7777";           // node蔡俊焕环境（加载图片）
      } else {
        api = 'ndApi/';
        proxy_prefix = '2p/';
        // domain = "http://172.16.30.188:9090/"; // 测试环境
        domain = "http://localhost:7777/"; //
      }
    } else {
      api = 'ndApi/';
      proxy_prefix = '2p/';
      domain = "https://www.zhuobao.com/rb/";             // 正式环境
      // domain = "http://58.251.73.130:2027/";         // 外网环境
      baseCrmUrl = "https://www.zhuobao.com/rb";         // CRM正式环境（加载图片）
    }
    return domain + api + proxy_prefix;
  };

module.exports = {
  getDomainName: getDomainName,
  unLoginCode: unLoginCode,
  successCode: successCode
};