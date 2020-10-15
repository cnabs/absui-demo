/*
 * @Author: LD
 * @Date: 2019-07-17 11:08:47
 * @LastEditTime: 2020-10-15 11:48:47
 * @LastEditors: LD
 * @FilePath: /create-react-app-with-antd-master/config-overrides.js
 * @Description: 
 */
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('antd', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }),
    fixBabelImports('import', {
        libraryName: 'absui',
        libraryDirectory: 'lib',
        style: 'css'
    })
)
