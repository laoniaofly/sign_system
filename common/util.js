const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 设置等待层显示与隐藏
 * @type {{formatTime: (function(*): string)}}
 */
let waitStatus = (v,b) => {
  v.setData({
    isloading: b
  });
};

module.exports = {
  formatTime: formatTime,
  waitStatus: waitStatus
}
