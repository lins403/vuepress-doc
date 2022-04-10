# 项目

## 鉴权方式

### 双重鉴权

- 前端在请求的header中添加一个**Authorization**字段，存的是base64位加密过的一串标识符，后端会优先检测这个
- 然后再添加另外一个**Auth**字段，存的是登录验证通过以后后端接口发来的access token（同时还有refresh token），其实是jwt token，请求的时候发送给后端做校验。这个access token过期时就用refresh token去刷新。
- 定时每十秒检测access token，过期了就用refresh token去刷新
  - token被存在localStorage中，并且存储时设置了一个dateTime字段表示当时写的时间，然后用当前时间减去dateTime计算的时间差，超过设置的超时时间时则表示过期，然后用refresh token去刷新

我们会去获取按钮的权限列表，就是菜单了，在后台配置的，然后通过接口来拉取

### 表单按钮的权限功能

登录以后取到后端发来的access token，然后给http header添加一个字段用来存这个token，在后续所有的请求中都带上这个token，其实是一个jwt token。然后我们通过接口读取菜单列表的时候，后端解析这个token，然后根据角色信息做过滤，然后将过滤后的菜单列表以及按钮权限菜单发送给前端。

我们把按钮菜单的标识符，例如用户模块的新增按钮权限user_add，存进一个数组中，然后保存至vuex中，并且设置为getters的属性，可以有缓存。每个组件可以通过mapGetters来注入这个permission数组，然后我们可以在button按钮上的v-if中使用permission是否有这个权限标识符来判断。

并且我们还可以自定义一个指令v-permission，指令的表达式传入一个角色列表，结合vuex中的当前角色来判断，如果在这个列表中，就显示，否则就移除该节点。

## Store

1. common：基础的配置参数
2. user：用户token、用户信息、角色权限
3. permission：权限路由
4. tagView：后台管理的打开标签
5. log：日志列表