# 编译

## 指令

1. parse > preTransformNode > processElement > processAttrs > addDirective > el.directives.push({ name, rawName, value, arg, modifiers })

2. generate > genElement > genData > genDirectives

3. patch > createPatchFunction / baseModules > updateDirectives , unbindDirectives > _update(oldVnode, vnode)
