import request from "../../../request"

// ===================  我的模块  =================
// 上传头像
export function saveUserPic(data){
    return request.post('api/user/saveUserPic', data)
}

