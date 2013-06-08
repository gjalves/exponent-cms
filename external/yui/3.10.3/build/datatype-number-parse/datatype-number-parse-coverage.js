/*
YUI 3.10.3 (build 2fb5187)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/datatype-number-parse/datatype-number-parse.js']) {
   __coverage__['build/datatype-number-parse/datatype-number-parse.js'] = {"path":"build/datatype-number-parse/datatype-number-parse.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":52}}},"2":{"name":"(anonymous_2)","line":22,"loc":{"start":{"line":22,"column":11},"end":{"line":22,"column":26}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":39,"column":11}},"2":{"start":{"line":11,"column":0},"end":{"line":11,"column":18}},"3":{"start":{"line":13,"column":0},"end":{"line":31,"column":3}},"4":{"start":{"line":23,"column":8},"end":{"line":23,"column":67}},"5":{"start":{"line":24,"column":8},"end":{"line":29,"column":9}},"6":{"start":{"line":25,"column":12},"end":{"line":25,"column":26}},"7":{"start":{"line":28,"column":12},"end":{"line":28,"column":24}},"8":{"start":{"line":34,"column":0},"end":{"line":34,"column":47}},"9":{"start":{"line":35,"column":0},"end":{"line":35,"column":24}},"10":{"start":{"line":36,"column":0},"end":{"line":36,"column":29}}},"branchMap":{"1":{"line":23,"type":"cond-expr","locations":[{"start":{"line":23,"column":54},"end":{"line":23,"column":58}},{"start":{"line":23,"column":61},"end":{"line":23,"column":66}}]},"2":{"line":23,"type":"binary-expr","locations":[{"start":{"line":23,"column":22},"end":{"line":23,"column":35}},{"start":{"line":23,"column":39},"end":{"line":23,"column":50}}]},"3":{"line":24,"type":"if","locations":[{"start":{"line":24,"column":8},"end":{"line":24,"column":8}},{"start":{"line":24,"column":8},"end":{"line":24,"column":8}}]}},"code":["(function () { YUI.add('datatype-number-parse', function (Y, NAME) {","","/**"," * Parse number submodule."," *"," * @module datatype-number"," * @submodule datatype-number-parse"," * @for Number"," */","","var LANG = Y.Lang;","","Y.mix(Y.namespace(\"Number\"), {","    /**","     * Converts data to type Number.","     *","     * @method parse","     * @param data {String | Number | Boolean} Data to convert. The following","     * values return as null: null, undefined, NaN, \"\".","     * @return {Number} A number, or null.","     */","    parse: function(data) {","        var number = (data === null || data === \"\") ? data : +data;","        if(LANG.isNumber(number)) {","            return number;","        }","        else {","            return null;","        }","    }","});","","// Add Parsers shortcut","Y.namespace(\"Parsers\").number = Y.Number.parse;","Y.namespace(\"DataType\");","Y.DataType.Number = Y.Number;","","","}, 'true');","","}());"]};
}
var __cov_vDl8Yyxj8O_PBviOOEdjQQ = __coverage__['build/datatype-number-parse/datatype-number-parse.js'];
__cov_vDl8Yyxj8O_PBviOOEdjQQ.s['1']++;YUI.add('datatype-number-parse',function(Y,NAME){__cov_vDl8Yyxj8O_PBviOOEdjQQ.f['1']++;__cov_vDl8Yyxj8O_PBviOOEdjQQ.s['2']++;var LANG=Y.Lang;__cov_vDl8Yyxj8O_PBviOOEdjQQ.s['3']++;Y.mix(Y.namespace('Number'),{parse:function(data){__cov_vDl8Yyxj8O_PBviOOEdjQQ.f['2']++;__cov_vDl8Yyxj8O_PBviOOEdjQQ.s['4']++;var number=(__cov_vDl8Yyxj8O_PBviOOEdjQQ.b['2'][0]++,data===null)||(__cov_vDl8Yyxj8O_PBviOOEdjQQ.b['2'][1]++,data==='')?(__cov_vDl8Yyxj8O_PBviOOEdjQQ.b['1'][0]++,data):(__cov_vDl8Yyxj8O_PBviOOEdjQQ.b['1'][1]++,+data);__cov_vDl8Yyxj8O_PBviOOEdjQQ.s['5']++;if(LANG.isNumber(number)){__cov_vDl8Yyxj8O_PBviOOEdjQQ.b['3'][0]++;__cov_vDl8Yyxj8O_PBviOOEdjQQ.s['6']++;return number;}else{__cov_vDl8Yyxj8O_PBviOOEdjQQ.b['3'][1]++;__cov_vDl8Yyxj8O_PBviOOEdjQQ.s['7']++;return null;}}});__cov_vDl8Yyxj8O_PBviOOEdjQQ.s['8']++;Y.namespace('Parsers').number=Y.Number.parse;__cov_vDl8Yyxj8O_PBviOOEdjQQ.s['9']++;Y.namespace('DataType');__cov_vDl8Yyxj8O_PBviOOEdjQQ.s['10']++;Y.DataType.Number=Y.Number;},'true');
