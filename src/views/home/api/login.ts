import request from "../../../request"
import {Login} from "./interface"

// 登录
export function login(data: Login.RepLoginForm){
    return request.post('api/user/login', data)
}
// 注册
export function register(data){
    return request.post('api/user/register', data)
}