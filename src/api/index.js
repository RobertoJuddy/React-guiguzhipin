import ajax from './ajax';

//请求登录的函数
export const reqLogin = data => ajax('/login', data, 'POST');
//请求注册的函数
export const reqRegister = data => ajax('/register', data, 'POST');

//请求更新数据的函数
export const reqUpDateUserInfo = data =>ajax('/update', data, 'POST');