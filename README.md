一个内部使用的便捷脚本。

***有时你只想给个总分而已。***

## 特点

- 自动评分。不再纠结该如何下手扣分。

- 智能分布。随机，但与手工评分一样合理。

- 安全可靠。绝不会擅自提交结果。

## 使用

0. 在浏览器安装用户脚本管理器：[Google Chrome 点此](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag)，[Mozilla Firefox 点此](https://addons.mozilla.org/zh-CN/firefox/addon/violentmonkey/)，[Safari 点此](http://tampermonkey.net/?browser=safari)，[Microsoft Edge 点此](https://www.microsoft.com/store/p/tampermonkey/9nblggh5162s)，[360 极速浏览器点此](https://ext.chrome.360.cn/webstore/detail/jinjaccalgkegednnccohejagnlnfdag)，[傲游浏览器点此](http://extension.maxthon.cn/detail/index.php?view_id=1680)。
0. **访问[该页面](https://greasyfork.org/zh-CN/scripts/397003)，点击`安装此脚本`，在弹出页面`确认安装`。**
0. 大功告成。

正常使用 OA 即可，脚本会在评分页弹出窗口询问总分。

## 帮助

Q1. Google Chrome 用户无法安装扩展？

A1. 如果在中国内地无法直接访问 Chrome 网上应用店，可以使用代理，或[尝试离线安装](https://www.chrome-api.com/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo)（不推荐）。 

Q2. 已经进入评分页，但是没有反应？

A2. 请按照如下顺序排查：

1. 检查浏览器的扩展管理，用户脚本插件（如 Violent monkey 或 Tampermonkey）已启用。
1. 检查用户脚本插件的脚本管理，CDMBCOA 助手/Helper 已启用。
1. 点击更新，CDMBCOA 助手/Helper 已是最新版本。
1. 登录 OA 系统，检查用户脚本插件在浏览器工具栏的图标，CDMBCOA 助手/Helper 已激活。
1. 请联系作者。

## What's New

### 0.9.2

- 新增一个检测回避机制，降低页面加载缓慢时被脚本卡住的概率
- 优化输入分数极端情况的逻辑，避免分数分布不合理
- 提高响应频率，脚本更灵敏
- 新的编码方式
- 新增一个预留接口

### 0.9.1

- 增大地址适配范围以确保脚本加载
