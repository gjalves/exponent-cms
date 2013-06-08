/*
YUI 3.10.3 (build 2fb5187)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/widget-base-ie/widget-base-ie.js']) {
   __coverage__['build/widget-base-ie/widget-base-ie.js'] = {"path":"build/widget-base-ie/widget-base-ie.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"b":{"1":[0,0],"2":[0,0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":45}}},"2":{"name":"(anonymous_2)","line":19,"loc":{"start":{"line":19,"column":31},"end":{"line":19,"column":48}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":49,"column":42}},"2":{"start":{"line":8,"column":0},"end":{"line":16,"column":67}},"3":{"start":{"line":19,"column":0},"end":{"line":46,"column":2}},"4":{"start":{"line":21,"column":4},"end":{"line":23,"column":39}},"5":{"start":{"line":25,"column":4},"end":{"line":27,"column":5}},"6":{"start":{"line":26,"column":8},"end":{"line":26,"column":118}},"7":{"start":{"line":29,"column":4},"end":{"line":45,"column":5}},"8":{"start":{"line":30,"column":8},"end":{"line":30,"column":48}},"9":{"start":{"line":32,"column":8},"end":{"line":44,"column":9}},"10":{"start":{"line":33,"column":12},"end":{"line":35,"column":13}},"11":{"start":{"line":34,"column":16},"end":{"line":34,"column":45}},"12":{"start":{"line":37,"column":12},"end":{"line":37,"column":57}},"13":{"start":{"line":39,"column":12},"end":{"line":41,"column":13}},"14":{"start":{"line":40,"column":16},"end":{"line":40,"column":48}},"15":{"start":{"line":43,"column":12},"end":{"line":43,"column":43}}},"branchMap":{"1":{"line":25,"type":"if","locations":[{"start":{"line":25,"column":4},"end":{"line":25,"column":4}},{"start":{"line":25,"column":4},"end":{"line":25,"column":4}}]},"2":{"line":26,"type":"binary-expr","locations":[{"start":{"line":26,"column":43},"end":{"line":26,"column":45}},{"start":{"line":26,"column":49},"end":{"line":26,"column":55}},{"start":{"line":26,"column":59},"end":{"line":26,"column":116}}]},"3":{"line":29,"type":"if","locations":[{"start":{"line":29,"column":4},"end":{"line":29,"column":4}},{"start":{"line":29,"column":4},"end":{"line":29,"column":4}}]},"4":{"line":32,"type":"if","locations":[{"start":{"line":32,"column":8},"end":{"line":32,"column":8}},{"start":{"line":32,"column":8},"end":{"line":32,"column":8}}]},"5":{"line":33,"type":"if","locations":[{"start":{"line":33,"column":12},"end":{"line":33,"column":12}},{"start":{"line":33,"column":12},"end":{"line":33,"column":12}}]},"6":{"line":39,"type":"if","locations":[{"start":{"line":39,"column":12},"end":{"line":39,"column":12}},{"start":{"line":39,"column":12},"end":{"line":39,"column":12}}]}},"code":["(function () { YUI.add('widget-base-ie', function (Y, NAME) {","","/**"," * IE specific support for the widget-base module."," *"," * @module widget-base-ie"," */","var BOUNDING_BOX = \"boundingBox\",","    CONTENT_BOX = \"contentBox\",","    HEIGHT = \"height\",","    OFFSET_HEIGHT = \"offsetHeight\",","    EMPTY_STR = \"\",","    IE = Y.UA.ie,","    heightReallyMinHeight = IE < 7,","    bbTempExpanding = Y.Widget.getClassName(\"tmp\", \"forcesize\"),","    contentExpanded = Y.Widget.getClassName(\"content\", \"expanded\");","","// TODO: Ideally we want to re-use the base _uiSizeCB impl","Y.Widget.prototype._uiSizeCB = function(expand) {","","    var bb = this.get(BOUNDING_BOX),","        cb = this.get(CONTENT_BOX),","        borderBoxSupported = this._bbs;","","    if (borderBoxSupported === undefined) {","        this._bbs = borderBoxSupported = !(IE && IE < 8 && bb.get(\"ownerDocument\").get(\"compatMode\") != \"BackCompat\");","    }","","    if (borderBoxSupported) {","        cb.toggleClass(contentExpanded, expand);","    } else {","        if (expand) {","            if (heightReallyMinHeight) {","                bb.addClass(bbTempExpanding);","            }","","            cb.set(OFFSET_HEIGHT, bb.get(OFFSET_HEIGHT));","","            if (heightReallyMinHeight) {","                bb.removeClass(bbTempExpanding);","            }","        } else {","            cb.setStyle(HEIGHT, EMPTY_STR);","        }","    }","};","","","}, 'true', {\"requires\": [\"widget-base\"]});","","}());"]};
}
var __cov__5xkELqleeuONdVWK9MW$A = __coverage__['build/widget-base-ie/widget-base-ie.js'];
__cov__5xkELqleeuONdVWK9MW$A.s['1']++;YUI.add('widget-base-ie',function(Y,NAME){__cov__5xkELqleeuONdVWK9MW$A.f['1']++;__cov__5xkELqleeuONdVWK9MW$A.s['2']++;var BOUNDING_BOX='boundingBox',CONTENT_BOX='contentBox',HEIGHT='height',OFFSET_HEIGHT='offsetHeight',EMPTY_STR='',IE=Y.UA.ie,heightReallyMinHeight=IE<7,bbTempExpanding=Y.Widget.getClassName('tmp','forcesize'),contentExpanded=Y.Widget.getClassName('content','expanded');__cov__5xkELqleeuONdVWK9MW$A.s['3']++;Y.Widget.prototype._uiSizeCB=function(expand){__cov__5xkELqleeuONdVWK9MW$A.f['2']++;__cov__5xkELqleeuONdVWK9MW$A.s['4']++;var bb=this.get(BOUNDING_BOX),cb=this.get(CONTENT_BOX),borderBoxSupported=this._bbs;__cov__5xkELqleeuONdVWK9MW$A.s['5']++;if(borderBoxSupported===undefined){__cov__5xkELqleeuONdVWK9MW$A.b['1'][0]++;__cov__5xkELqleeuONdVWK9MW$A.s['6']++;this._bbs=borderBoxSupported=!((__cov__5xkELqleeuONdVWK9MW$A.b['2'][0]++,IE)&&(__cov__5xkELqleeuONdVWK9MW$A.b['2'][1]++,IE<8)&&(__cov__5xkELqleeuONdVWK9MW$A.b['2'][2]++,bb.get('ownerDocument').get('compatMode')!='BackCompat'));}else{__cov__5xkELqleeuONdVWK9MW$A.b['1'][1]++;}__cov__5xkELqleeuONdVWK9MW$A.s['7']++;if(borderBoxSupported){__cov__5xkELqleeuONdVWK9MW$A.b['3'][0]++;__cov__5xkELqleeuONdVWK9MW$A.s['8']++;cb.toggleClass(contentExpanded,expand);}else{__cov__5xkELqleeuONdVWK9MW$A.b['3'][1]++;__cov__5xkELqleeuONdVWK9MW$A.s['9']++;if(expand){__cov__5xkELqleeuONdVWK9MW$A.b['4'][0]++;__cov__5xkELqleeuONdVWK9MW$A.s['10']++;if(heightReallyMinHeight){__cov__5xkELqleeuONdVWK9MW$A.b['5'][0]++;__cov__5xkELqleeuONdVWK9MW$A.s['11']++;bb.addClass(bbTempExpanding);}else{__cov__5xkELqleeuONdVWK9MW$A.b['5'][1]++;}__cov__5xkELqleeuONdVWK9MW$A.s['12']++;cb.set(OFFSET_HEIGHT,bb.get(OFFSET_HEIGHT));__cov__5xkELqleeuONdVWK9MW$A.s['13']++;if(heightReallyMinHeight){__cov__5xkELqleeuONdVWK9MW$A.b['6'][0]++;__cov__5xkELqleeuONdVWK9MW$A.s['14']++;bb.removeClass(bbTempExpanding);}else{__cov__5xkELqleeuONdVWK9MW$A.b['6'][1]++;}}else{__cov__5xkELqleeuONdVWK9MW$A.b['4'][1]++;__cov__5xkELqleeuONdVWK9MW$A.s['15']++;cb.setStyle(HEIGHT,EMPTY_STR);}}};},'true',{'requires':['widget-base']});
