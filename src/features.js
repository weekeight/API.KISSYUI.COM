/**
* features模块提供了Features来进行硬件环境关键特性检测，直接通过KISSY全局对象调用
* @module features
*/

/**
* 硬件环境关键特性检测，直接通过KISSY全局对象调用
* 这类功能通常在判断硬件环境时使用，比如在KISSY的modules定义的代码：
*   ```
*   KISSY.config('modules',{
*        "dom/basic": {
*                "alias": [
*                        'dom/base',
*                        KISSY.Features.isIELessThan(9) ? 'dom/ie' : '',
*                        KISSY.Features.isClassListSupported() ? '' : 'dom/class-list'
*                ]
*        },
*        "dom": {
*                "alias": [
*                        'dom/basic',
*                        !KISSY.Features.isQuerySelectorSupported() ? 'dom/selector' : ''
*                ]
*        }
*	});
*   ```
* @class Features
* @static
*/

/**
* 判断当前宿主环境是否支持手势事件
*
*   ```
*   KISSY.Features.isDeviceMotionSupported();
*   ```
*
* @method isDeviceMotionSupported
* @static
* @return {Boolean} 当前宿主环境是否支持手势事件
*/

/**
* 判断当前宿主环境是否支持ie8的Pointer事件
* @method isMsPointerSupported
* @static
* @return {Boolean} 当前宿主环境是否支持ie8的Pointer事件
*/

/**
* 判断当前宿主环境是否支持触屏事件
* @method isTouchEventSupported
* @static
* @return {Boolean} 当前宿主环境是否支持触屏事件
*/

/**
* 判断当前环境是否支持hashChange事件
* @method isHashChangeSupported
* @static
* @return {Boolean} 当前环境是否支持hashChange事件
*/

/**
* 判断当前环境是否支持Transition动画
* @method isTransitionSupported
* @static
* @return {Boolean} 当前环境是否支持Transition动画
*/

/**
* 判断当前环境是否支持Transform动画
* @method isTransformSupported
* @static
* @return {Boolean} 当前环境是否支持Transform动画
*/

/**
* 判断当前环境是否支持ClassList
* @method isClassListSupported
* @static
* @return {Boolean} 当前环境是否支持ClassList
*/

/**
* 判断当前环境是否支持QuerySelector方法
* @method isQuerySelectorSupported
* @static
* @return {Boolean} 当前环境是否支持QuerySelector方法
*/

/**
* 得到Transition属性的前缀
* @method getTransitionPrefix
* @static
* @return {Boolean} Transition属性的前缀
*/

/**
* 得到Transform属性的前缀
* @method getTransformPrefix
* @static
* @return {Boolean} Transform属性的前缀
*/