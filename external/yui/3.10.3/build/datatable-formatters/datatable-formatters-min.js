/*
YUI 3.10.3 (build 2fb5187)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("datatable-formatters",function(e,t){var n=e.Lang,r=n.isValue,i=e.Escape.html,s=e.ClassNameManager.getClassName,o=function(e){return s("datatable",e)},u=function(e,t){return r(e)?i(e.toString()):t||""},a={button:function(e){var t=o("button"),n="<button>"+(e.buttonLabel||"Click")+"</button>";return e.allowHTML=!0,function(e){return e.className=t,n}},"boolean":function(e){var t=e.booleanLabels||this.get("booleanLabels")||{"true":"true","false":"false"};return function(e){var n=e.value;return!n&&n!==!1?n:(n=n?"true":"false",e.className=o(n),t[n])}},currency:function(t){var n=o("currency"),r=t.currencyFormat||this.get("currencyFormat"),i=e.Number.format;return function(e){e.className=n;var t=parseFloat(e.value);return!t&&t!==0?e.value:i(t,r)}},_date:function(t){var n=o("date"),r=e.Date.format;return t={format:t},function(e){return e.className=n,r(e.value,t)}},date:function(e){return a._date(e.dateFormat||this.get("dateFormat"))},localDate:function(){return a._date("%x")},localTime:function(){return a._date("%X")},localDateTime:function(){return a._date("%c")},email:function(e){var t=o("email"),n=e.linkFrom,r=e.emptyCellValue,i=(this.getColumn(n)||{}).emptyCellValue;return e.allowHTML=!0,function(e){var s=u(e.value,r),o=n?u(e.data[n],i):s;return e.className=t,o?'<a href="mailto:'+o+'">'+s+"</a>":s}},link:function(e){var t=o("link"),n=e.linkFrom,r=e.emptyCellValue,i=(this.getColumn(n)||{}).emptyCellValue;return e.allowHTML=!0,function(e){var s=u(e.value,r),o=n?u(e.data[n],i):s;return e.className=t,o?'<a href="'+o+'">'+s+"</a>":s}},number:function(t){var n=o("number"),r=t.numberFormat||this.get("numberFormat"),i=e.Number.format;return function(e){e.className=n;var t=parseFloat(e.value);return!t&&t!==0?e.value:i(t,r)}}};e.mix(e.DataTable.BodyView.Formatters,a)},"true",{requires:["datatable-body","datatype-number-format","datatype-date-format","escape"]});
