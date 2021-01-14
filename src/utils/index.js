/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

export function generateRandomNum(length = 6) {
  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = length; i > 0; --i)
    result += str[Math.floor(Math.random() * str.length)];
  return new Date().toLocaleDateString().replace(/\//g, '-') + '/' + result;
}

export function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}
//视频时长格式化
export function formatVideoTime(time) {
  let minutes = parseInt(time / 60);
  return (minutes > 9 ? minutes : '0' + minutes) + ":" + (time % 60 > 9 ? time % 60 : '0' + time % 60)
}


function getTs(time) {
  var arr = time.split(/[- :]/),
    _date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]),
    timeStr = Date.parse(_date)
  return timeStr
}
export function handlePublishTimeDesc(post_modified) {
  // 拿到当前时间戳和发布时的时间戳，然后得出时间戳差
  var curTime = new Date();
  var postTime = new Date(post_modified);                  //部分浏览器不兼容此转换建议所以对此进行补充（指定调用自己定义的函数进行生成发布时间的时间戳）

  //var timeDiff = curTime.getTime() - postTime.getTime();
  //上面一行代码可以换成以下（兼容性的解决）
  var timeDiff = curTime.getTime() - getTs(parseTime(post_modified,'{y}-{m}-{d} {h}:{i}:{s}'));
  console.log("timeDiff————————————",timeDiff)
  // 单位换算
  var min = 60 * 1000;
  var hour = min * 60;
  var day = hour * 24;
  var week = day * 7;
  var month = week * 4;
  var year = month * 12;

  // 计算发布时间距离当前时间的周、天、时、分
  var exceedyear = Math.floor(timeDiff / year);
  var exceedmonth = Math.floor(timeDiff / month);
  var exceedWeek = Math.floor(timeDiff / week);
  var exceedDay = Math.floor(timeDiff / day);
  var exceedHour = Math.floor(timeDiff / hour);
  var exceedMin = Math.floor(timeDiff / min);


  // 最后判断时间差到底是属于哪个区间，然后return

  if (exceedyear < 100 && exceedyear > 0) {
    return exceedyear + '年前';
  } else {
    if (exceedmonth < 12 && exceedmonth > 0) {
      return exceedmonth + '个月前';
    } else {
      if (exceedWeek < 4 && exceedWeek > 0) {
        return exceedWeek + '个星期前';
      } else {
        if (exceedDay < 7 && exceedDay > 0) {
          return exceedDay + '天前';
        } else {
          if (exceedHour < 24 && exceedHour > 0) {
            return exceedHour + '小时前';
          } else {
            return exceedMin + '分钟前';
          }
        }
      }
    }
  }
}


