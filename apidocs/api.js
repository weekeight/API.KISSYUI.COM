YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Features",
        "UA",
        "Util"
    ],
    "modules": [
        "UA",
        "features"
    ],
    "allModules": [
        {
            "displayName": "features",
            "name": "features",
            "description": "features模块提供了Features来进行硬件环境关键特性检测，直接通过KISSY全局对象调用"
        },
        {
            "displayName": "UA",
            "name": "UA",
            "description": "UA模块将UA挂在在全局对象KISSY上，通过 KISSY.UA 的属性，你可以获取浏览器等用户代理的信息。"
        }
    ]
} };
});