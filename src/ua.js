/**
* UA模块将UA挂在在全局对象KISSY上，通过 KISSY.UA 的属性，你可以获取浏览器等用户代理的信息。
* @module UA
*/

/**
* 通过 KISSY.UA 的属性，你可以获取浏览器等用户代理的信息。属性值遵循以下规则：
*   
    - 表示当前引擎或浏览器的版本。版本号 1.2.3.4 会转换为数值 1.234
    - 如果不是当前引擎或浏览器，返回 0 或者 undefined
    - 如果当前浏览器版本号无法准确判定，均返回 0.1
*   
* @class UA
* @static
*/

/**
* trident 的版本号。IE 浏览器 8 系列以下都无法准确探测 Trident 内核的版本号。
* @property trident
* @type Number
* @static
*/

/**
* webkit 的版本号
* @property webkit
* @type Number
* @static
*/

/**
* gecko 的版本号
* @property gecko
* @type Number
* @static
*/

/**
* presto 的版本号
* @property presto
* @type Number
* @static
*/

/**
* chrome 的版本号
* @property chrome
* @type Number
* @static
*/

/**
* safari 的版本号
* @property safari
* @type Number
* @static
*/

/**
* firefox 的版本号
* @property firefox
* @type Number
* @static
*/

/**
* ie 的版本号
* @property ie
* @type Number
* @static
*/

/**
* opera 的版本号
* @property opera
* @type Number
* @static
*/

/**
* mobile 的标志符。 若无法探测或非移动设备浏览器，将返回空字符串。
* @property mobile
* @type String
* @static
*/

/**
* core 的标志符。此标识符表示浏览器的内核标识。若浏览器内核不是 trident, webkit, gecko, presto 将返回空字符串。
* @property core
* @type String
* @static
*/

/**
* shell 的标志符。此标识符表示用户所用浏览器的外壳标识。
*此处的外壳表示广义的外壳，即 IE, Firefox, Chrome, Opera, Safari 等浏览器都属于外壳。可以利用此标识符直接识别浏览器类型。 可以首先使用 UA.shell 返回的标识符判断当前浏览器类型，若需浏览器具体版本信息，可以再通过 UA[UA.shell] 取出版本号。 * UA.core 返回字符串，目前支持 trident, webkit, gecko, presto 四大浏览器内核. * UA.shell 返回字符串，比如 firefox, opera, chrome, ie, safari * UA.mobile 返回字符串，目前支持 apple, nokia, android, opera mini/mobile 等设备/浏览器的探测.
* @property shell
* @type String
* @static
*/

/**
* 操作系统标志符。例如 windows android ios linux
* @property os
* @type String
* @static
*/

/**
* ipad ios 版本号。例如 5.0
* @property ipad
* @type Number
* @static
*/

/**
* iphone ios 版本号。例如 5.0
* @property iphone
* @type Number
* @static
*/

/**
*  ipod ios 版本号。例如 5.0
* @property ipod
* @type Number
* @static
*/

/**
* ios 版本号。例如 5.0
* @property ios
* @type Number
* @static
*/

/**
* android版本号。例如 5.0
* @property android
* @type Number
* @static
*/
