/*
YUI 3.10.3 (build 2fb5187)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/datasource-polling/datasource-polling.js']) {
   __coverage__['build/datasource-polling/datasource-polling.js'] = {"path":"build/datasource-polling/datasource-polling.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":49}}},"2":{"name":"Pollable","line":15,"loc":{"start":{"line":15,"column":0},"end":{"line":15,"column":20}}},"3":{"name":"(anonymous_3)","line":55,"loc":{"start":{"line":55,"column":17},"end":{"line":55,"column":41}}},"4":{"name":"(anonymous_4)","line":69,"loc":{"start":{"line":69,"column":19},"end":{"line":69,"column":37}}},"5":{"name":"(anonymous_5)","line":85,"loc":{"start":{"line":85,"column":23},"end":{"line":85,"column":34}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":93,"column":47}},"2":{"start":{"line":15,"column":0},"end":{"line":17,"column":1}},"3":{"start":{"line":16,"column":4},"end":{"line":16,"column":25}},"4":{"start":{"line":19,"column":0},"end":{"line":88,"column":2}},"5":{"start":{"line":56,"column":8},"end":{"line":56,"column":73}},"6":{"start":{"line":57,"column":8},"end":{"line":57,"column":34}},"7":{"start":{"line":59,"column":8},"end":{"line":59,"column":54}},"8":{"start":{"line":60,"column":8},"end":{"line":60,"column":20}},"9":{"start":{"line":71,"column":8},"end":{"line":71,"column":23}},"10":{"start":{"line":72,"column":8},"end":{"line":77,"column":9}},"11":{"start":{"line":74,"column":12},"end":{"line":74,"column":41}},"12":{"start":{"line":76,"column":12},"end":{"line":76,"column":39}},"13":{"start":{"line":86,"column":8},"end":{"line":86,"column":58}},"14":{"start":{"line":90,"column":0},"end":{"line":90,"column":40}}},"branchMap":{"1":{"line":71,"type":"binary-expr","locations":[{"start":{"line":71,"column":13},"end":{"line":71,"column":16}},{"start":{"line":71,"column":20},"end":{"line":71,"column":22}}]},"2":{"line":72,"type":"if","locations":[{"start":{"line":72,"column":8},"end":{"line":72,"column":8}},{"start":{"line":72,"column":8},"end":{"line":72,"column":8}}]}},"code":["(function () { YUI.add('datasource-polling', function (Y, NAME) {","","/**"," * Extends DataSource with polling functionality."," *"," * @module datasource"," * @submodule datasource-polling"," */","    ","/**"," * Adds polling to the DataSource Utility."," * @class Pollable"," * @extends DataSource.Local"," */    ","function Pollable() {","    this._intervals = {};","}","","Pollable.prototype = {","","    /**","    * @property _intervals","    * @description Hash of polling interval IDs that have been enabled,","    * stored here to be able to clear all intervals.","    * @private","    */","    _intervals: null,","","    /**","     * Sets up a polling mechanism to send requests at set intervals and","     * forward responses to given callback.","     *","     * @method setInterval","     * @param msec {Number} Length of interval in milliseconds.","     * @param [request] {Object} An object literal with the following properties:","     *     <dl>","     *     <dt><code>request</code></dt>","     *     <dd>The request to send to the live data source, if any.</dd>","     *     <dt><code>callback</code></dt>","     *     <dd>An object literal with the following properties:","     *         <dl>","     *         <dt><code>success</code></dt>","     *         <dd>The function to call when the data is ready.</dd>","     *         <dt><code>failure</code></dt>","     *         <dd>The function to call upon a response failure condition.</dd>","     *         <dt><code>argument</code></dt>","     *         <dd>Arbitrary data payload that will be passed back to the success and failure handlers.</dd>","     *         </dl>","     *     </dd>","     *     <dt><code>cfg</code></dt>","     *     <dd>Configuration object, if any.</dd>","     *     </dl>","     * @return {Number} Interval ID.","     */","    setInterval: function(msec, request) {","        var x = Y.later(msec, this, this.sendRequest, [ request ], true);","        this._intervals[x.id] = x;","        // First call happens immediately, but async","        Y.later(0, this, this.sendRequest, [request]);","        return x.id;","    },","","    /**","     * Disables polling mechanism associated with the given interval ID.","     *","     * @method clearInterval","     * @param id {Number} Interval ID.","     */","    clearInterval: function(id, key) {","        // In case of being called by clearAllIntervals()","        id = key || id;","        if(this._intervals[id]) {","            // Clear the interval","            this._intervals[id].cancel();","            // Clear from tracker","            delete this._intervals[id];","        }","    },","","    /**","     * Clears all intervals.","     *","     * @method clearAllIntervals","     */","    clearAllIntervals: function() {","        Y.each(this._intervals, this.clearInterval, this);","    }","};","    ","Y.augment(Y.DataSource.Local, Pollable);","","","}, 'true', {\"requires\": [\"datasource-local\"]});","","}());"]};
}
var __cov_k9FlZQEJVsDks2tbgqGUVQ = __coverage__['build/datasource-polling/datasource-polling.js'];
__cov_k9FlZQEJVsDks2tbgqGUVQ.s['1']++;YUI.add('datasource-polling',function(Y,NAME){__cov_k9FlZQEJVsDks2tbgqGUVQ.f['1']++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['2']++;function Pollable(){__cov_k9FlZQEJVsDks2tbgqGUVQ.f['2']++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['3']++;this._intervals={};}__cov_k9FlZQEJVsDks2tbgqGUVQ.s['4']++;Pollable.prototype={_intervals:null,setInterval:function(msec,request){__cov_k9FlZQEJVsDks2tbgqGUVQ.f['3']++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['5']++;var x=Y.later(msec,this,this.sendRequest,[request],true);__cov_k9FlZQEJVsDks2tbgqGUVQ.s['6']++;this._intervals[x.id]=x;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['7']++;Y.later(0,this,this.sendRequest,[request]);__cov_k9FlZQEJVsDks2tbgqGUVQ.s['8']++;return x.id;},clearInterval:function(id,key){__cov_k9FlZQEJVsDks2tbgqGUVQ.f['4']++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['9']++;id=(__cov_k9FlZQEJVsDks2tbgqGUVQ.b['1'][0]++,key)||(__cov_k9FlZQEJVsDks2tbgqGUVQ.b['1'][1]++,id);__cov_k9FlZQEJVsDks2tbgqGUVQ.s['10']++;if(this._intervals[id]){__cov_k9FlZQEJVsDks2tbgqGUVQ.b['2'][0]++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['11']++;this._intervals[id].cancel();__cov_k9FlZQEJVsDks2tbgqGUVQ.s['12']++;delete this._intervals[id];}else{__cov_k9FlZQEJVsDks2tbgqGUVQ.b['2'][1]++;}},clearAllIntervals:function(){__cov_k9FlZQEJVsDks2tbgqGUVQ.f['5']++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['13']++;Y.each(this._intervals,this.clearInterval,this);}};__cov_k9FlZQEJVsDks2tbgqGUVQ.s['14']++;Y.augment(Y.DataSource.Local,Pollable);},'true',{'requires':['datasource-local']});
