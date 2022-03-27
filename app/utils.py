# 自定义登录成功后给前端的返回信息
def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,  # 默认只返回token
        'username': user.username
    }