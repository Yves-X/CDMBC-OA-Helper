// ==UserScript==
// @name                CDMBCOA助手 CDMBC OA Helper
// @name:zh-cn          CDMBCOA助手
// @description         一个内部使用的便捷脚本；An insider script.
// @description:zh-cn   一个内部使用的便捷脚本。
// @description:en      An insider script.
// @version             0.9.2
// @icon                data:image/png;base64,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
// @author              Hayden Xiao
// @namespace           https://github.com/Yves-X
// @supportURL          https://github.com/Yves-X/CDMBC-OA-Helper/issues
// @match               http://10.1.235.133:10000/*
// @grant               unsafeWindow
// @run-at              document-end
// ==/UserScript==

(function(){function c(){line=document.querySelectorAll(".el-table__row--level-1");limit=[];line.forEach(function(d){limit.push(d.childNodes[3].childNodes[0].childNodes[0].innerHTML)});if(2>line.length)setTimeout(c,1E3);else if(score=prompt("\u8bf7\u8f93\u5165\u603b\u5206","95"),100<score&&(score=100),document.querySelector("div.zw  .el-form-item__content").innerHTML.includes("\u8096\u534e\u5b87")&&console.log(1),null!=score){kill=100-score;for(skip=0;kill;)if(i=Math.floor(10*Math.random()*limit.length),limit[i]-1>=.8*limit[i]?(skip=0,limit[i]--,kill--):limit[i]-1<.8*limit[i]&&skip++,skip==line.length){alert("\u603b\u5206\u504f\u4f4e\uff0c\u8bf7\u68c0\u67e5\u81ea\u52a8\u8bc4\u5206\u662f\u5426\u5408\u7406");break}scoreBox=document.querySelectorAll(".el-table__body input");for(var a=0;a<scoreBox.length;a++)scoreBox[a].value=limit[a],scoreBox[a].dispatchEvent(new Event("input"))}}var b=0;setInterval(function(){var a=document.querySelector(".dialog-footer button.el-button.el-button--primary.el-button--small");a&&"\u8bc4 \u5206"==a.childNodes[2].innerHTML?(0==b&&c(),b=1):b=0},500)})();
