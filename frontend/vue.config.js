module.exports = {
    // 选项...
    productionSourceMap:false, // 使不生成map文件（map文件体积大）
    lintOnSave:true, // 开启语法检查
    publicPath:'./',
    assetsDir: 'static',// 静态资源打包输出目录 (js, css, img, fonts)，相应的url路径也会改变
}