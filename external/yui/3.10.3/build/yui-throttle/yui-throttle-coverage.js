/*
YUI 3.10.3 (build 2fb5187)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/yui-throttle/yui-throttle.js']) {
   __coverage__['build/yui-throttle/yui-throttle.js'] = {"path":"build/yui-throttle/yui-throttle.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":24},"end":{"line":1,"column":43}}},"2":{"name":"(anonymous_2)","line":33,"loc":{"start":{"line":33,"column":13},"end":{"line":33,"column":30}}},"3":{"name":"(anonymous_3)","line":37,"loc":{"start":{"line":37,"column":15},"end":{"line":37,"column":26}}},"4":{"name":"(anonymous_4)","line":44,"loc":{"start":{"line":44,"column":11},"end":{"line":44,"column":22}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":54,"column":39}},"2":{"start":{"line":33,"column":0},"end":{"line":51,"column":2}},"3":{"start":{"line":34,"column":4},"end":{"line":34,"column":52}},"4":{"start":{"line":36,"column":4},"end":{"line":40,"column":5}},"5":{"start":{"line":37,"column":8},"end":{"line":39,"column":10}},"6":{"start":{"line":38,"column":12},"end":{"line":38,"column":38}},"7":{"start":{"line":42,"column":4},"end":{"line":42,"column":28}},"8":{"start":{"line":44,"column":4},"end":{"line":50,"column":6}},"9":{"start":{"line":45,"column":8},"end":{"line":45,"column":31}},"10":{"start":{"line":46,"column":8},"end":{"line":49,"column":9}},"11":{"start":{"line":47,"column":12},"end":{"line":47,"column":23}},"12":{"start":{"line":48,"column":12},"end":{"line":48,"column":38}}},"branchMap":{"1":{"line":34,"type":"cond-expr","locations":[{"start":{"line":34,"column":16},"end":{"line":34,"column":18}},{"start":{"line":34,"column":22},"end":{"line":34,"column":50}}]},"2":{"line":34,"type":"binary-expr","locations":[{"start":{"line":34,"column":22},"end":{"line":34,"column":43}},{"start":{"line":34,"column":47},"end":{"line":34,"column":50}}]},"3":{"line":36,"type":"if","locations":[{"start":{"line":36,"column":4},"end":{"line":36,"column":4}},{"start":{"line":36,"column":4},"end":{"line":36,"column":4}}]},"4":{"line":46,"type":"if","locations":[{"start":{"line":46,"column":8},"end":{"line":46,"column":8}},{"start":{"line":46,"column":8},"end":{"line":46,"column":8}}]}},"code":["(function () { YUI.add('yui-throttle', function (Y, NAME) {","","/**","Throttles a call to a method based on the time between calls. This method is attached","to the `Y` object and is <a href=\"../classes/YUI.html#method_throttle\">documented there</a>.","","    var fn = Y.throttle(function() {","        counter++;","    });","","    for (i; i< 35000; i++) {","        out++;","        fn();","    }","","","@module yui","@submodule yui-throttle","*/","","/*! Based on work by Simon Willison: http://gist.github.com/292562 */","/**"," * Throttles a call to a method based on the time between calls."," * @method throttle"," * @for YUI"," * @param fn {function} The function call to throttle."," * @param ms {int} The number of milliseconds to throttle the method call."," * Can set globally with Y.config.throttleTime or by call. Passing a -1 will"," * disable the throttle. Defaults to 150."," * @return {function} Returns a wrapped function that calls fn throttled."," * @since 3.1.0"," */","Y.throttle = function(fn, ms) {","    ms = (ms) ? ms : (Y.config.throttleTime || 150);","","    if (ms === -1) {","        return function() {","            fn.apply(this, arguments);","        };","    }","","    var last = Y.Lang.now();","","    return function() {","        var now = Y.Lang.now();","        if (now - last > ms) {","            last = now;","            fn.apply(this, arguments);","        }","    };","};","","","}, 'true', {\"requires\": [\"yui-base\"]});","","}());"]};
}
var __cov_w4RDhG3t2OqGnCo0Wgk4TA = __coverage__['build/yui-throttle/yui-throttle.js'];
__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['1']++;YUI.add('yui-throttle',function(Y,NAME){__cov_w4RDhG3t2OqGnCo0Wgk4TA.f['1']++;__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['2']++;Y.throttle=function(fn,ms){__cov_w4RDhG3t2OqGnCo0Wgk4TA.f['2']++;__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['3']++;ms=ms?(__cov_w4RDhG3t2OqGnCo0Wgk4TA.b['1'][0]++,ms):(__cov_w4RDhG3t2OqGnCo0Wgk4TA.b['1'][1]++,(__cov_w4RDhG3t2OqGnCo0Wgk4TA.b['2'][0]++,Y.config.throttleTime)||(__cov_w4RDhG3t2OqGnCo0Wgk4TA.b['2'][1]++,150));__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['4']++;if(ms===-1){__cov_w4RDhG3t2OqGnCo0Wgk4TA.b['3'][0]++;__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['5']++;return function(){__cov_w4RDhG3t2OqGnCo0Wgk4TA.f['3']++;__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['6']++;fn.apply(this,arguments);};}else{__cov_w4RDhG3t2OqGnCo0Wgk4TA.b['3'][1]++;}__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['7']++;var last=Y.Lang.now();__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['8']++;return function(){__cov_w4RDhG3t2OqGnCo0Wgk4TA.f['4']++;__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['9']++;var now=Y.Lang.now();__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['10']++;if(now-last>ms){__cov_w4RDhG3t2OqGnCo0Wgk4TA.b['4'][0]++;__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['11']++;last=now;__cov_w4RDhG3t2OqGnCo0Wgk4TA.s['12']++;fn.apply(this,arguments);}else{__cov_w4RDhG3t2OqGnCo0Wgk4TA.b['4'][1]++;}};};},'true',{'requires':['yui-base']});
