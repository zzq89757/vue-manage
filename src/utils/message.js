import {Message} from 'element-ui';
  // 封装提示信息的message
  export function msg(message,type='error') {
    return Message({
      type,
      message
    })
}