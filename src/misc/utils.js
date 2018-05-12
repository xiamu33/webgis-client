/*
 * 工具类函数
 * @Author: xiamu
 * @Date: 2018-05-03 01:36:37
 * @Last Modified by: xiamu
 * @Last Modified time: 2018-05-11 19:51:48
 */
import vue from 'vue'
import global from './global.constant'
import utils from '../misc/utils'

export default {
  ///////////////localStore 过期时间函数//////////////////
  setLocalStore(key, value) {
    if (value.data) {
      value = value.data
    }
    var curTime = new Date().getTime();
    window.localStorage.setItem(key, JSON.stringify({ data: value, time: curTime }));
  },
  getLocalStore(data) {
    var dataObj = data
    if (new Date().getTime() - dataObj.time > 1000 * 60 * 60) {
      return {
        timeout: true,
        data: dataObj.data
      }
    } else {
      return {
        timeout: false,
        data: dataObj.data
      }
    }
  },
  ///////////////// 消息提醒 /////////////////
  showSuccessMsg(t, msg, cb) {
    t.$message({
      message: msg,
      type: 'success',
      customClass: 'message_position',
      onClose: () => {
        if (cb) {
          cb()
        }
      }
    })
  },
  showErrorMsg(t, msg, cb) {
    t.$message({
      message: msg,
      type: 'error',
      customClass: 'message_position',
      onClose: () => {
        if (cb) {
          cb()
        }
      }
    })
  },
  // 经度格式
  formatLon(val) {
    if (val > 0) {
      return Math.abs(val).toFixed(7) + ' E'
    } else {
      return Math.abs(val).toFixed(7) + ' W'
    }
  },
  // 维度格式
  formatLat(val) {
    if (val > 0) {
      return Math.abs(val).toFixed(7) + ' N'
    } else {
      return Math.abs(val).toFixed(7) + ' S'
    }
  },
}