/*
YUI 3.10.3 (build 2fb5187)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/transition-timer/transition-timer.js']) {
   __coverage__['build/transition-timer/transition-timer.js'] = {"path":"build/transition-timer/transition-timer.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0],"34":[0,0],"35":[0,0],"36":[0,0],"37":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":47}}},"2":{"name":"(anonymous_2)","line":14,"loc":{"start":{"line":14,"column":12},"end":{"line":14,"column":23}}},"3":{"name":"(anonymous_3)","line":22,"loc":{"start":{"line":22,"column":15},"end":{"line":22,"column":26}}},"4":{"name":"(anonymous_4)","line":31,"loc":{"start":{"line":31,"column":15},"end":{"line":31,"column":26}}},"5":{"name":"(anonymous_5)","line":37,"loc":{"start":{"line":37,"column":15},"end":{"line":37,"column":26}}},"6":{"name":"(anonymous_6)","line":42,"loc":{"start":{"line":42,"column":15},"end":{"line":42,"column":30}}},"7":{"name":"(anonymous_7)","line":109,"loc":{"start":{"line":109,"column":16},"end":{"line":109,"column":27}}},"8":{"name":"(anonymous_8)","line":169,"loc":{"start":{"line":169,"column":13},"end":{"line":169,"column":24}}},"9":{"name":"(anonymous_9)","line":210,"loc":{"start":{"line":210,"column":17},"end":{"line":210,"column":38}}},"10":{"name":"(anonymous_10)","line":222,"loc":{"start":{"line":222,"column":20},"end":{"line":222,"column":79}}},"11":{"name":"(anonymous_11)","line":247,"loc":{"start":{"line":247,"column":20},"end":{"line":247,"column":40}}},"12":{"name":"(anonymous_12)","line":258,"loc":{"start":{"line":258,"column":17},"end":{"line":258,"column":28}}},"13":{"name":"(anonymous_13)","line":264,"loc":{"start":{"line":264,"column":16},"end":{"line":264,"column":27}}},"14":{"name":"(anonymous_14)","line":275,"loc":{"start":{"line":275,"column":15},"end":{"line":275,"column":26}}},"15":{"name":"(anonymous_15)","line":290,"loc":{"start":{"line":290,"column":17},"end":{"line":290,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":334,"column":41}},"2":{"start":{"line":11,"column":0},"end":{"line":11,"column":30}},"3":{"start":{"line":13,"column":0},"end":{"line":173,"column":9}},"4":{"start":{"line":15,"column":8},"end":{"line":19,"column":9}},"5":{"start":{"line":16,"column":12},"end":{"line":16,"column":30}},"6":{"start":{"line":18,"column":12},"end":{"line":18,"column":29}},"7":{"start":{"line":23,"column":8},"end":{"line":23,"column":24}},"8":{"start":{"line":24,"column":8},"end":{"line":24,"column":26}},"9":{"start":{"line":26,"column":8},"end":{"line":26,"column":50}},"10":{"start":{"line":27,"column":8},"end":{"line":27,"column":37}},"11":{"start":{"line":28,"column":8},"end":{"line":28,"column":33}},"12":{"start":{"line":32,"column":8},"end":{"line":32,"column":24}},"13":{"start":{"line":33,"column":8},"end":{"line":33,"column":50}},"14":{"start":{"line":34,"column":8},"end":{"line":34,"column":31}},"15":{"start":{"line":38,"column":8},"end":{"line":38,"column":45}},"16":{"start":{"line":39,"column":8},"end":{"line":39,"column":26}},"17":{"start":{"line":43,"column":8},"end":{"line":59,"column":14}},"18":{"start":{"line":61,"column":8},"end":{"line":106,"column":9}},"19":{"start":{"line":62,"column":12},"end":{"line":105,"column":13}},"20":{"start":{"line":63,"column":16},"end":{"line":63,"column":39}},"21":{"start":{"line":64,"column":16},"end":{"line":64,"column":40}},"22":{"start":{"line":65,"column":16},"end":{"line":65,"column":48}},"23":{"start":{"line":66,"column":16},"end":{"line":66,"column":25}},"24":{"start":{"line":67,"column":16},"end":{"line":72,"column":18}},"25":{"start":{"line":74,"column":16},"end":{"line":75,"column":70}},"26":{"start":{"line":77,"column":16},"end":{"line":77,"column":32}},"27":{"start":{"line":79,"column":16},"end":{"line":81,"column":17}},"28":{"start":{"line":80,"column":20},"end":{"line":80,"column":26}},"29":{"start":{"line":83,"column":16},"end":{"line":103,"column":17}},"30":{"start":{"line":84,"column":20},"end":{"line":85,"column":58}},"31":{"start":{"line":87,"column":20},"end":{"line":102,"column":21}},"32":{"start":{"line":88,"column":24},"end":{"line":88,"column":43}},"33":{"start":{"line":89,"column":24},"end":{"line":89,"column":38}},"34":{"start":{"line":91,"column":24},"end":{"line":93,"column":25}},"35":{"start":{"line":92,"column":28},"end":{"line":92,"column":72}},"36":{"start":{"line":97,"column":24},"end":{"line":101,"column":25}},"37":{"start":{"line":98,"column":28},"end":{"line":98,"column":43}},"38":{"start":{"line":99,"column":28},"end":{"line":99,"column":47}},"39":{"start":{"line":100,"column":28},"end":{"line":100,"column":45}},"40":{"start":{"line":110,"column":8},"end":{"line":122,"column":29}},"41":{"start":{"line":124,"column":8},"end":{"line":166,"column":9}},"42":{"start":{"line":125,"column":12},"end":{"line":165,"column":13}},"43":{"start":{"line":126,"column":16},"end":{"line":126,"column":53}},"44":{"start":{"line":127,"column":16},"end":{"line":127,"column":47}},"45":{"start":{"line":128,"column":16},"end":{"line":128,"column":42}},"46":{"start":{"line":129,"column":16},"end":{"line":129,"column":38}},"47":{"start":{"line":132,"column":16},"end":{"line":164,"column":17}},"48":{"start":{"line":133,"column":20},"end":{"line":134,"column":101}},"49":{"start":{"line":136,"column":20},"end":{"line":136,"column":60}},"50":{"start":{"line":137,"column":20},"end":{"line":137,"column":56}},"51":{"start":{"line":139,"column":20},"end":{"line":139,"column":53}},"52":{"start":{"line":140,"column":20},"end":{"line":140,"column":45}},"53":{"start":{"line":141,"column":20},"end":{"line":141,"column":65}},"54":{"start":{"line":143,"column":20},"end":{"line":145,"column":21}},"55":{"start":{"line":144,"column":24},"end":{"line":144,"column":55}},"56":{"start":{"line":147,"column":20},"end":{"line":153,"column":21}},"57":{"start":{"line":148,"column":24},"end":{"line":152,"column":25}},"58":{"start":{"line":149,"column":28},"end":{"line":149,"column":88}},"59":{"start":{"line":150,"column":31},"end":{"line":152,"column":25}},"60":{"start":{"line":151,"column":28},"end":{"line":151,"column":64}},"61":{"start":{"line":155,"column":20},"end":{"line":155,"column":51}},"62":{"start":{"line":156,"column":20},"end":{"line":156,"column":47}},"63":{"start":{"line":157,"column":20},"end":{"line":157,"column":42}},"64":{"start":{"line":158,"column":20},"end":{"line":158,"column":46}},"65":{"start":{"line":159,"column":20},"end":{"line":159,"column":58}},"66":{"start":{"line":160,"column":20},"end":{"line":160,"column":44}},"67":{"start":{"line":162,"column":20},"end":{"line":162,"column":39}},"68":{"start":{"line":163,"column":20},"end":{"line":163,"column":34}},"69":{"start":{"line":170,"column":8},"end":{"line":170,"column":25}},"70":{"start":{"line":171,"column":8},"end":{"line":171,"column":26}},"71":{"start":{"line":175,"column":0},"end":{"line":327,"column":9}},"72":{"start":{"line":211,"column":16},"end":{"line":211,"column":62}},"73":{"start":{"line":223,"column":8},"end":{"line":223,"column":28}},"74":{"start":{"line":224,"column":8},"end":{"line":224,"column":24}},"75":{"start":{"line":226,"column":8},"end":{"line":227,"column":65}},"76":{"start":{"line":229,"column":8},"end":{"line":229,"column":42}},"77":{"start":{"line":231,"column":8},"end":{"line":238,"column":9}},"78":{"start":{"line":232,"column":12},"end":{"line":235,"column":13}},"79":{"start":{"line":233,"column":16},"end":{"line":233,"column":34}},"80":{"start":{"line":234,"column":16},"end":{"line":234,"column":54}},"81":{"start":{"line":237,"column":12},"end":{"line":237,"column":24}},"82":{"start":{"line":248,"column":8},"end":{"line":249,"column":21}},"83":{"start":{"line":251,"column":8},"end":{"line":253,"column":9}},"84":{"start":{"line":252,"column":12},"end":{"line":252,"column":52}},"85":{"start":{"line":255,"column":8},"end":{"line":255,"column":19}},"86":{"start":{"line":259,"column":8},"end":{"line":261,"column":9}},"87":{"start":{"line":260,"column":12},"end":{"line":260,"column":91}},"88":{"start":{"line":265,"column":8},"end":{"line":265,"column":41}},"89":{"start":{"line":266,"column":8},"end":{"line":266,"column":33}},"90":{"start":{"line":276,"column":8},"end":{"line":277,"column":17}},"91":{"start":{"line":278,"column":8},"end":{"line":283,"column":9}},"92":{"start":{"line":279,"column":12},"end":{"line":282,"column":13}},"93":{"start":{"line":280,"column":16},"end":{"line":280,"column":29}},"94":{"start":{"line":281,"column":16},"end":{"line":281,"column":54}},"95":{"start":{"line":285,"column":8},"end":{"line":287,"column":9}},"96":{"start":{"line":286,"column":12},"end":{"line":286,"column":36}},"97":{"start":{"line":291,"column":8},"end":{"line":310,"column":42}},"98":{"start":{"line":312,"column":8},"end":{"line":312,"column":22}},"99":{"start":{"line":329,"column":0},"end":{"line":329,"column":112}},"100":{"start":{"line":331,"column":0},"end":{"line":331,"column":26}}},"branchMap":{"1":{"line":15,"type":"if","locations":[{"start":{"line":15,"column":8},"end":{"line":15,"column":8}},{"start":{"line":15,"column":8},"end":{"line":15,"column":8}}]},"2":{"line":62,"type":"if","locations":[{"start":{"line":62,"column":12},"end":{"line":62,"column":12}},{"start":{"line":62,"column":12},"end":{"line":62,"column":12}}]},"3":{"line":62,"type":"binary-expr","locations":[{"start":{"line":62,"column":17},"end":{"line":62,"column":40}},{"start":{"line":62,"column":45},"end":{"line":62,"column":74}}]},"4":{"line":74,"type":"cond-expr","locations":[{"start":{"line":75,"column":24},"end":{"line":75,"column":41}},{"start":{"line":75,"column":44},"end":{"line":75,"column":69}}]},"5":{"line":74,"type":"binary-expr","locations":[{"start":{"line":74,"column":26},"end":{"line":74,"column":41}},{"start":{"line":74,"column":45},"end":{"line":74,"column":67}}]},"6":{"line":79,"type":"if","locations":[{"start":{"line":79,"column":16},"end":{"line":79,"column":16}},{"start":{"line":79,"column":16},"end":{"line":79,"column":16}}]},"7":{"line":83,"type":"if","locations":[{"start":{"line":83,"column":16},"end":{"line":83,"column":16}},{"start":{"line":83,"column":16},"end":{"line":83,"column":16}}]},"8":{"line":83,"type":"binary-expr","locations":[{"start":{"line":83,"column":20},"end":{"line":83,"column":26}},{"start":{"line":83,"column":30},"end":{"line":83,"column":43}}]},"9":{"line":87,"type":"if","locations":[{"start":{"line":87,"column":20},"end":{"line":87,"column":20}},{"start":{"line":87,"column":20},"end":{"line":87,"column":20}}]},"10":{"line":91,"type":"if","locations":[{"start":{"line":91,"column":24},"end":{"line":91,"column":24}},{"start":{"line":91,"column":24},"end":{"line":91,"column":24}}]},"11":{"line":91,"type":"binary-expr","locations":[{"start":{"line":91,"column":28},"end":{"line":91,"column":40}},{"start":{"line":91,"column":44},"end":{"line":91,"column":59}},{"start":{"line":91,"column":63},"end":{"line":91,"column":82}}]},"12":{"line":97,"type":"if","locations":[{"start":{"line":97,"column":24},"end":{"line":97,"column":24}},{"start":{"line":97,"column":24},"end":{"line":97,"column":24}}]},"13":{"line":97,"type":"binary-expr","locations":[{"start":{"line":97,"column":28},"end":{"line":97,"column":36}},{"start":{"line":97,"column":40},"end":{"line":97,"column":56}}]},"14":{"line":125,"type":"if","locations":[{"start":{"line":125,"column":12},"end":{"line":125,"column":12}},{"start":{"line":125,"column":12},"end":{"line":125,"column":12}}]},"15":{"line":125,"type":"binary-expr","locations":[{"start":{"line":125,"column":17},"end":{"line":125,"column":40}},{"start":{"line":125,"column":45},"end":{"line":125,"column":74}}]},"16":{"line":132,"type":"if","locations":[{"start":{"line":132,"column":16},"end":{"line":132,"column":16}},{"start":{"line":132,"column":16},"end":{"line":132,"column":16}}]},"17":{"line":132,"type":"binary-expr","locations":[{"start":{"line":132,"column":20},"end":{"line":132,"column":44}},{"start":{"line":132,"column":48},"end":{"line":132,"column":75}}]},"18":{"line":133,"type":"cond-expr","locations":[{"start":{"line":134,"column":28},"end":{"line":134,"column":60}},{"start":{"line":134,"column":63},"end":{"line":134,"column":100}}]},"19":{"line":133,"type":"binary-expr","locations":[{"start":{"line":133,"column":29},"end":{"line":133,"column":47}},{"start":{"line":133,"column":51},"end":{"line":133,"column":76}}]},"20":{"line":139,"type":"cond-expr","locations":[{"start":{"line":139,"column":36},"end":{"line":139,"column":44}},{"start":{"line":139,"column":47},"end":{"line":139,"column":52}}]},"21":{"line":140,"type":"cond-expr","locations":[{"start":{"line":140,"column":32},"end":{"line":140,"column":38}},{"start":{"line":140,"column":41},"end":{"line":140,"column":44}}]},"22":{"line":141,"type":"cond-expr","locations":[{"start":{"line":141,"column":33},"end":{"line":141,"column":39}},{"start":{"line":141,"column":42},"end":{"line":141,"column":64}}]},"23":{"line":141,"type":"cond-expr","locations":[{"start":{"line":141,"column":51},"end":{"line":141,"column":59}},{"start":{"line":141,"column":62},"end":{"line":141,"column":64}}]},"24":{"line":143,"type":"if","locations":[{"start":{"line":143,"column":20},"end":{"line":143,"column":20}},{"start":{"line":143,"column":20},"end":{"line":143,"column":20}}]},"25":{"line":143,"type":"binary-expr","locations":[{"start":{"line":143,"column":24},"end":{"line":143,"column":29}},{"start":{"line":143,"column":33},"end":{"line":143,"column":70}}]},"26":{"line":147,"type":"if","locations":[{"start":{"line":147,"column":20},"end":{"line":147,"column":20}},{"start":{"line":147,"column":20},"end":{"line":147,"column":20}}]},"27":{"line":148,"type":"if","locations":[{"start":{"line":148,"column":24},"end":{"line":148,"column":24}},{"start":{"line":148,"column":24},"end":{"line":148,"column":24}}]},"28":{"line":150,"type":"if","locations":[{"start":{"line":150,"column":31},"end":{"line":150,"column":31}},{"start":{"line":150,"column":31},"end":{"line":150,"column":31}}]},"29":{"line":231,"type":"if","locations":[{"start":{"line":231,"column":8},"end":{"line":231,"column":8}},{"start":{"line":231,"column":8},"end":{"line":231,"column":8}}]},"30":{"line":232,"type":"if","locations":[{"start":{"line":232,"column":12},"end":{"line":232,"column":12}},{"start":{"line":232,"column":12},"end":{"line":232,"column":12}}]},"31":{"line":232,"type":"binary-expr","locations":[{"start":{"line":232,"column":16},"end":{"line":232,"column":33}},{"start":{"line":232,"column":37},"end":{"line":232,"column":63}}]},"32":{"line":233,"type":"binary-expr","locations":[{"start":{"line":233,"column":23},"end":{"line":233,"column":27}},{"start":{"line":233,"column":31},"end":{"line":233,"column":33}}]},"33":{"line":251,"type":"if","locations":[{"start":{"line":251,"column":8},"end":{"line":251,"column":8}},{"start":{"line":251,"column":8},"end":{"line":251,"column":8}}]},"34":{"line":251,"type":"binary-expr","locations":[{"start":{"line":251,"column":12},"end":{"line":251,"column":29}},{"start":{"line":251,"column":33},"end":{"line":251,"column":59}}]},"35":{"line":259,"type":"if","locations":[{"start":{"line":259,"column":8},"end":{"line":259,"column":8}},{"start":{"line":259,"column":8},"end":{"line":259,"column":8}}]},"36":{"line":279,"type":"if","locations":[{"start":{"line":279,"column":12},"end":{"line":279,"column":12}},{"start":{"line":279,"column":12},"end":{"line":279,"column":12}}]},"37":{"line":285,"type":"if","locations":[{"start":{"line":285,"column":8},"end":{"line":285,"column":8}},{"start":{"line":285,"column":8},"end":{"line":285,"column":8}}]}},"code":["(function () { YUI.add('transition-timer', function (Y, NAME) {","","/**","* Provides the base Transition class, for animating numeric properties.","*","* @module transition","* @submodule transition-timer","*/","","","var Transition = Y.Transition;","","Y.mix(Transition.prototype, {","    _start: function() {","        if (Transition.useNative) {","            this._runNative();","        } else {","            this._runTimer();","        }","    },","","    _runTimer: function() {","        var anim = this;","        anim._initAttrs();","","        Transition._running[Y.stamp(anim)] = anim;","        anim._startTime = new Date();","        Transition._startTimer();","    },","","    _endTimer: function() {","        var anim = this;","        delete Transition._running[Y.stamp(anim)];","        anim._startTime = null;","    },","","    _runFrame: function() {","        var t = new Date() - this._startTime;","        this._runAttrs(t);","    },","","    _runAttrs: function(time) {","        var anim = this,","            node = anim._node,","            config = anim._config,","            uid = Y.stamp(node),","            attrs = Transition._nodeAttrs[uid],","            customAttr = Transition.behaviors,","            done = false,","            allDone = false,","            data,","            name,","            attribute,","            setter,","            elapsed,","            delay,","            d,","            t,","            i;","","        for (name in attrs) {","            if ((attribute = attrs[name]) && attribute.transition === anim) {","                d = attribute.duration;","                delay = attribute.delay;","                elapsed = (time - delay) / 1000;","                t = time;","                data = {","                    type: 'propertyEnd',","                    propertyName: name,","                    config: config,","                    elapsedTime: elapsed","                };","","                setter = (i in customAttr && 'set' in customAttr[i]) ?","                        customAttr[i].set : Transition.DEFAULT_SETTER;","","                done = (t >= d);","","                if (t > d) {","                    t = d;","                }","","                if (!delay || time >= delay) {","                    setter(anim, name, attribute.from, attribute.to, t - delay, d - delay,","                        attribute.easing, attribute.unit);","","                    if (done) {","                        delete attrs[name];","                        anim._count--;","","                        if (config[name] && config[name].on && config[name].on.end) {","                            config[name].on.end.call(Y.one(node), data);","                        }","","                        //node.fire('transition:propertyEnd', data);","","                        if (!allDone && anim._count <= 0) {","                            allDone = true;","                            anim._end(elapsed);","                            anim._endTimer();","                        }","                    }","                }","","            }","        }","    },","","    _initAttrs: function() {","        var anim = this,","            customAttr = Transition.behaviors,","            uid = Y.stamp(anim._node),","            attrs = Transition._nodeAttrs[uid],","            attribute,","            duration,","            delay,","            easing,","            val,","            name,","            mTo,","            mFrom,","            unit, begin, end;","","        for (name in attrs) {","            if ((attribute = attrs[name]) && attribute.transition === anim) {","                duration = attribute.duration * 1000;","                delay = attribute.delay * 1000;","                easing = attribute.easing;","                val = attribute.value;","","                // only allow supported properties","                if (name in anim._node.style || name in Y.DOM.CUSTOM_STYLES) {","                    begin = (name in customAttr && 'get' in customAttr[name])  ?","                            customAttr[name].get(anim, name) : Transition.DEFAULT_GETTER(anim, name);","","                    mFrom = Transition.RE_UNITS.exec(begin);","                    mTo = Transition.RE_UNITS.exec(val);","","                    begin = mFrom ? mFrom[1] : begin;","                    end = mTo ? mTo[1] : val;","                    unit = mTo ? mTo[2] : mFrom ?  mFrom[2] : ''; // one might be zero TODO: mixed units","","                    if (!unit && Transition.RE_DEFAULT_UNIT.test(name)) {","                        unit = Transition.DEFAULT_UNIT;","                    }","","                    if (typeof easing === 'string') {","                        if (easing.indexOf('cubic-bezier') > -1) {","                            easing = easing.substring(13, easing.length - 1).split(',');","                        } else if (Transition.easings[easing]) {","                            easing = Transition.easings[easing];","                        }","                    }","","                    attribute.from = Number(begin);","                    attribute.to = Number(end);","                    attribute.unit = unit;","                    attribute.easing = easing;","                    attribute.duration = duration + delay;","                    attribute.delay = delay;","                } else {","                    delete attrs[name];","                    anim._count--;","                }","            }","        }","    },","","    destroy: function() {","        this.detachAll();","        this._node = null;","    }","}, true);","","Y.mix(Y.Transition, {","    _runtimeAttrs: {},","    /*","     * Regex of properties that should use the default unit.","     *","     * @property RE_DEFAULT_UNIT","     * @static","     */","    RE_DEFAULT_UNIT: /^width|height|top|right|bottom|left|margin.*|padding.*|border.*$/i,","","    /*","     * The default unit to use with properties that pass the RE_DEFAULT_UNIT test.","     *","     * @property DEFAULT_UNIT","     * @static","     */","    DEFAULT_UNIT: 'px',","","    /*","     * Time in milliseconds passed to setInterval for frame processing","     *","     * @property intervalTime","     * @default 20","     * @static","     */","    intervalTime: 20,","","    /*","     * Bucket for custom getters and setters","     *","     * @property behaviors","     * @static","     */","    behaviors: {","        left: {","            get: function(anim, attr) {","                return Y.DOM._getAttrOffset(anim._node, attr);","            }","        }","    },","","    /*","     * The default setter to use when setting object properties.","     *","     * @property DEFAULT_SETTER","     * @static","     */","    DEFAULT_SETTER: function(anim, att, from, to, elapsed, duration, fn, unit) {","        from = Number(from);","        to = Number(to);","","        var node = anim._node,","            val = Transition.cubicBezier(fn, elapsed / duration);","","        val = from + val[0] * (to - from);","","        if (node) {","            if (att in node.style || att in Y.DOM.CUSTOM_STYLES) {","                unit = unit || '';","                Y.DOM.setStyle(node, att, val + unit);","            }","        } else {","            anim._end();","        }","    },","","    /*","     * The default getter to use when getting object properties.","     *","     * @property DEFAULT_GETTER","     * @static","     */","    DEFAULT_GETTER: function(anim, att) {","        var node = anim._node,","            val = '';","","        if (att in node.style || att in Y.DOM.CUSTOM_STYLES) {","            val = Y.DOM.getComputedStyle(node, att);","        }","","        return val;","    },","","    _startTimer: function() {","        if (!Transition._timer) {","            Transition._timer = setInterval(Transition._runFrame, Transition.intervalTime);","        }","    },","","    _stopTimer: function() {","        clearInterval(Transition._timer);","        Transition._timer = null;","    },","","    /*","     * Called per Interval to handle each animation frame.","     * @method _runFrame","     * @private","     * @static","     */","    _runFrame: function() {","        var done = true,","            anim;","        for (anim in Transition._running) {","            if (Transition._running[anim]._runFrame) {","                done = false;","                Transition._running[anim]._runFrame();","            }","        }","","        if (done) {","            Transition._stopTimer();","        }","    },","","    cubicBezier: function(p, t) {","        var x0 = 0,","            y0 = 0,","            x1 = p[0],","            y1 = p[1],","            x2 = p[2],","            y2 = p[3],","            x3 = 1,","            y3 = 0,","","            A = x3 - 3 * x2 + 3 * x1 - x0,","            B = 3 * x2 - 6 * x1 + 3 * x0,","            C = 3 * x1 - 3 * x0,","            D = x0,","            E = y3 - 3 * y2 + 3 * y1 - y0,","            F = 3 * y2 - 6 * y1 + 3 * y0,","            G = 3 * y1 - 3 * y0,","            H = y0,","","            x = (((A*t) + B)*t + C)*t + D,","            y = (((E*t) + F)*t + G)*t + H;","","        return [x, y];","    },","","    easings: {","        ease: [0.25, 0, 1, 0.25],","        linear: [0, 0, 1, 1],","        'ease-in': [0.42, 0, 1, 1],","        'ease-out': [0, 0, 0.58, 1],","        'ease-in-out': [0.42, 0, 0.58, 1]","    },","","    _running: {},","    _timer: null,","","    RE_UNITS: /^(-?\\d*\\.?\\d*){1}(em|ex|px|in|cm|mm|pt|pc|%)*$/","}, true);","","Transition.behaviors.top = Transition.behaviors.bottom = Transition.behaviors.right = Transition.behaviors.left;","","Y.Transition = Transition;","","","}, 'true', {\"requires\": [\"transition\"]});","","}());"]};
}
var __cov_P9MyqHY8ItAFRxYCk9oI0w = __coverage__['build/transition-timer/transition-timer.js'];
__cov_P9MyqHY8ItAFRxYCk9oI0w.s['1']++;YUI.add('transition-timer',function(Y,NAME){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['1']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['2']++;var Transition=Y.Transition;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['3']++;Y.mix(Transition.prototype,{_start:function(){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['2']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['4']++;if(Transition.useNative){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['1'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['5']++;this._runNative();}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['1'][1]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['6']++;this._runTimer();}},_runTimer:function(){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['3']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['7']++;var anim=this;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['8']++;anim._initAttrs();__cov_P9MyqHY8ItAFRxYCk9oI0w.s['9']++;Transition._running[Y.stamp(anim)]=anim;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['10']++;anim._startTime=new Date();__cov_P9MyqHY8ItAFRxYCk9oI0w.s['11']++;Transition._startTimer();},_endTimer:function(){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['4']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['12']++;var anim=this;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['13']++;delete Transition._running[Y.stamp(anim)];__cov_P9MyqHY8ItAFRxYCk9oI0w.s['14']++;anim._startTime=null;},_runFrame:function(){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['5']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['15']++;var t=new Date()-this._startTime;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['16']++;this._runAttrs(t);},_runAttrs:function(time){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['6']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['17']++;var anim=this,node=anim._node,config=anim._config,uid=Y.stamp(node),attrs=Transition._nodeAttrs[uid],customAttr=Transition.behaviors,done=false,allDone=false,data,name,attribute,setter,elapsed,delay,d,t,i;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['18']++;for(name in attrs){__cov_P9MyqHY8ItAFRxYCk9oI0w.s['19']++;if((__cov_P9MyqHY8ItAFRxYCk9oI0w.b['3'][0]++,attribute=attrs[name])&&(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['3'][1]++,attribute.transition===anim)){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['2'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['20']++;d=attribute.duration;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['21']++;delay=attribute.delay;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['22']++;elapsed=(time-delay)/1000;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['23']++;t=time;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['24']++;data={type:'propertyEnd',propertyName:name,config:config,elapsedTime:elapsed};__cov_P9MyqHY8ItAFRxYCk9oI0w.s['25']++;setter=(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['5'][0]++,i in customAttr)&&(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['5'][1]++,'set'in customAttr[i])?(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['4'][0]++,customAttr[i].set):(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['4'][1]++,Transition.DEFAULT_SETTER);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['26']++;done=t>=d;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['27']++;if(t>d){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['6'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['28']++;t=d;}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['6'][1]++;}__cov_P9MyqHY8ItAFRxYCk9oI0w.s['29']++;if((__cov_P9MyqHY8ItAFRxYCk9oI0w.b['8'][0]++,!delay)||(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['8'][1]++,time>=delay)){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['7'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['30']++;setter(anim,name,attribute.from,attribute.to,t-delay,d-delay,attribute.easing,attribute.unit);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['31']++;if(done){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['9'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['32']++;delete attrs[name];__cov_P9MyqHY8ItAFRxYCk9oI0w.s['33']++;anim._count--;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['34']++;if((__cov_P9MyqHY8ItAFRxYCk9oI0w.b['11'][0]++,config[name])&&(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['11'][1]++,config[name].on)&&(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['11'][2]++,config[name].on.end)){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['10'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['35']++;config[name].on.end.call(Y.one(node),data);}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['10'][1]++;}__cov_P9MyqHY8ItAFRxYCk9oI0w.s['36']++;if((__cov_P9MyqHY8ItAFRxYCk9oI0w.b['13'][0]++,!allDone)&&(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['13'][1]++,anim._count<=0)){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['12'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['37']++;allDone=true;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['38']++;anim._end(elapsed);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['39']++;anim._endTimer();}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['12'][1]++;}}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['9'][1]++;}}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['7'][1]++;}}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['2'][1]++;}}},_initAttrs:function(){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['7']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['40']++;var anim=this,customAttr=Transition.behaviors,uid=Y.stamp(anim._node),attrs=Transition._nodeAttrs[uid],attribute,duration,delay,easing,val,name,mTo,mFrom,unit,begin,end;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['41']++;for(name in attrs){__cov_P9MyqHY8ItAFRxYCk9oI0w.s['42']++;if((__cov_P9MyqHY8ItAFRxYCk9oI0w.b['15'][0]++,attribute=attrs[name])&&(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['15'][1]++,attribute.transition===anim)){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['14'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['43']++;duration=attribute.duration*1000;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['44']++;delay=attribute.delay*1000;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['45']++;easing=attribute.easing;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['46']++;val=attribute.value;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['47']++;if((__cov_P9MyqHY8ItAFRxYCk9oI0w.b['17'][0]++,name in anim._node.style)||(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['17'][1]++,name in Y.DOM.CUSTOM_STYLES)){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['16'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['48']++;begin=(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['19'][0]++,name in customAttr)&&(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['19'][1]++,'get'in customAttr[name])?(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['18'][0]++,customAttr[name].get(anim,name)):(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['18'][1]++,Transition.DEFAULT_GETTER(anim,name));__cov_P9MyqHY8ItAFRxYCk9oI0w.s['49']++;mFrom=Transition.RE_UNITS.exec(begin);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['50']++;mTo=Transition.RE_UNITS.exec(val);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['51']++;begin=mFrom?(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['20'][0]++,mFrom[1]):(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['20'][1]++,begin);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['52']++;end=mTo?(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['21'][0]++,mTo[1]):(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['21'][1]++,val);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['53']++;unit=mTo?(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['22'][0]++,mTo[2]):(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['22'][1]++,mFrom?(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['23'][0]++,mFrom[2]):(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['23'][1]++,''));__cov_P9MyqHY8ItAFRxYCk9oI0w.s['54']++;if((__cov_P9MyqHY8ItAFRxYCk9oI0w.b['25'][0]++,!unit)&&(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['25'][1]++,Transition.RE_DEFAULT_UNIT.test(name))){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['24'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['55']++;unit=Transition.DEFAULT_UNIT;}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['24'][1]++;}__cov_P9MyqHY8ItAFRxYCk9oI0w.s['56']++;if(typeof easing==='string'){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['26'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['57']++;if(easing.indexOf('cubic-bezier')>-1){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['27'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['58']++;easing=easing.substring(13,easing.length-1).split(',');}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['27'][1]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['59']++;if(Transition.easings[easing]){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['28'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['60']++;easing=Transition.easings[easing];}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['28'][1]++;}}}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['26'][1]++;}__cov_P9MyqHY8ItAFRxYCk9oI0w.s['61']++;attribute.from=Number(begin);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['62']++;attribute.to=Number(end);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['63']++;attribute.unit=unit;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['64']++;attribute.easing=easing;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['65']++;attribute.duration=duration+delay;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['66']++;attribute.delay=delay;}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['16'][1]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['67']++;delete attrs[name];__cov_P9MyqHY8ItAFRxYCk9oI0w.s['68']++;anim._count--;}}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['14'][1]++;}}},destroy:function(){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['8']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['69']++;this.detachAll();__cov_P9MyqHY8ItAFRxYCk9oI0w.s['70']++;this._node=null;}},true);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['71']++;Y.mix(Y.Transition,{_runtimeAttrs:{},RE_DEFAULT_UNIT:/^width|height|top|right|bottom|left|margin.*|padding.*|border.*$/i,DEFAULT_UNIT:'px',intervalTime:20,behaviors:{left:{get:function(anim,attr){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['9']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['72']++;return Y.DOM._getAttrOffset(anim._node,attr);}}},DEFAULT_SETTER:function(anim,att,from,to,elapsed,duration,fn,unit){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['10']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['73']++;from=Number(from);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['74']++;to=Number(to);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['75']++;var node=anim._node,val=Transition.cubicBezier(fn,elapsed/duration);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['76']++;val=from+val[0]*(to-from);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['77']++;if(node){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['29'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['78']++;if((__cov_P9MyqHY8ItAFRxYCk9oI0w.b['31'][0]++,att in node.style)||(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['31'][1]++,att in Y.DOM.CUSTOM_STYLES)){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['30'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['79']++;unit=(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['32'][0]++,unit)||(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['32'][1]++,'');__cov_P9MyqHY8ItAFRxYCk9oI0w.s['80']++;Y.DOM.setStyle(node,att,val+unit);}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['30'][1]++;}}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['29'][1]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['81']++;anim._end();}},DEFAULT_GETTER:function(anim,att){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['11']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['82']++;var node=anim._node,val='';__cov_P9MyqHY8ItAFRxYCk9oI0w.s['83']++;if((__cov_P9MyqHY8ItAFRxYCk9oI0w.b['34'][0]++,att in node.style)||(__cov_P9MyqHY8ItAFRxYCk9oI0w.b['34'][1]++,att in Y.DOM.CUSTOM_STYLES)){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['33'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['84']++;val=Y.DOM.getComputedStyle(node,att);}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['33'][1]++;}__cov_P9MyqHY8ItAFRxYCk9oI0w.s['85']++;return val;},_startTimer:function(){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['12']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['86']++;if(!Transition._timer){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['35'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['87']++;Transition._timer=setInterval(Transition._runFrame,Transition.intervalTime);}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['35'][1]++;}},_stopTimer:function(){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['13']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['88']++;clearInterval(Transition._timer);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['89']++;Transition._timer=null;},_runFrame:function(){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['14']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['90']++;var done=true,anim;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['91']++;for(anim in Transition._running){__cov_P9MyqHY8ItAFRxYCk9oI0w.s['92']++;if(Transition._running[anim]._runFrame){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['36'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['93']++;done=false;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['94']++;Transition._running[anim]._runFrame();}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['36'][1]++;}}__cov_P9MyqHY8ItAFRxYCk9oI0w.s['95']++;if(done){__cov_P9MyqHY8ItAFRxYCk9oI0w.b['37'][0]++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['96']++;Transition._stopTimer();}else{__cov_P9MyqHY8ItAFRxYCk9oI0w.b['37'][1]++;}},cubicBezier:function(p,t){__cov_P9MyqHY8ItAFRxYCk9oI0w.f['15']++;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['97']++;var x0=0,y0=0,x1=p[0],y1=p[1],x2=p[2],y2=p[3],x3=1,y3=0,A=x3-3*x2+3*x1-x0,B=3*x2-6*x1+3*x0,C=3*x1-3*x0,D=x0,E=y3-3*y2+3*y1-y0,F=3*y2-6*y1+3*y0,G=3*y1-3*y0,H=y0,x=((A*t+B)*t+C)*t+D,y=((E*t+F)*t+G)*t+H;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['98']++;return[x,y];},easings:{ease:[0.25,0,1,0.25],linear:[0,0,1,1],'ease-in':[0.42,0,1,1],'ease-out':[0,0,0.58,1],'ease-in-out':[0.42,0,0.58,1]},_running:{},_timer:null,RE_UNITS:/^(-?\d*\.?\d*){1}(em|ex|px|in|cm|mm|pt|pc|%)*$/},true);__cov_P9MyqHY8ItAFRxYCk9oI0w.s['99']++;Transition.behaviors.top=Transition.behaviors.bottom=Transition.behaviors.right=Transition.behaviors.left;__cov_P9MyqHY8ItAFRxYCk9oI0w.s['100']++;Y.Transition=Transition;},'true',{'requires':['transition']});
